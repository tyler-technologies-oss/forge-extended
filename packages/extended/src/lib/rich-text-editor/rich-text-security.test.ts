import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { RichTextContextComponent } from './rich-text-context';
import { RichTextRendererComponent } from './rich-text-renderer';
import type { RichTextFeatureLinkComponent } from './features/rte-link';

describe('Security: XSS Prevention', () => {
  describe('Security Hardening - Insecure Properties Removed', () => {
    it('should not expose validateUrls property on rte-link', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

      // Property should not exist in the public API
      expect(link).to.not.have.property('validateUrls');
    });

    it('should not expose suppressErrors property on rich-text-context', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      // Property should not exist in the public API
      expect(el).to.not.have.property('suppressErrors');
    });

    it('should always validate URLs even if validate-urls attribute is set', async () => {
      // Even if someone tries to set the attribute in HTML, validation should still run
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link validate-urls="false"></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'javascript:alert(1)';
      (link as any)._validateUrl();

      // Should still show validation error
      expect((link as any)._validationError).to.include('Invalid protocol');
    });

    it('should always log security warnings even if suppress-errors attribute is set', async () => {
      const spy = sinon.spy(console, 'warn');

      try {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context suppress-errors="true"></forge-rich-text-context>
        `);

        await new Promise(resolve => setTimeout(resolve, 100));

        // Trigger a security warning by injecting dangerous protocol
        (el as any).content = {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Link',
                  marks: [{ type: 'link', attrs: { href: 'javascript:alert(1)' } }]
                }
              ]
            }
          ]
        };
        await el.updateComplete;

        // Should still log warning even with suppress-errors="true"
        expect(spy.calledWith(sinon.match(/Blocked dangerous protocol/))).to.be.true;
      } finally {
        spy.restore();
      }
    });
  });

  describe('HTML Output Encoding', () => {
    it('should escape script tags in toHTML()', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      // Wait for editor initialization
      await new Promise(resolve => setTimeout(resolve, 100));

      // Inject malicious content via setContent API
      el.content = '<p><script>alert(1)</script></p>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.include('&lt;script&gt;');
      expect(output).to.not.include('<script>alert');
    });

    it('should escape img onerror in toHTML()', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p><img src=x onerror=alert(1)></p>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('onerror=');
    });

    it('should escape HTML entities in text content', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '<script>alert("XSS")</script>'
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.include('&lt;script&gt;');
      expect(output).to.not.include('<script>alert');
    });

    it('should remove dangerous elements from output', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p>Safe text</p><iframe src="evil.com"></iframe><script>alert(1)</script>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('<iframe');
      expect(output).to.not.include('<script>');
      expect(output).to.include('Safe text');
    });

    it('should remove event handler attributes', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p onclick="alert(1)" onmouseover="evil()">Text</p>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('onclick=');
      expect(output).to.not.include('onmouseover=');
    });
  });

  describe('Link Protocol Validation', () => {
    it('should block javascript: protocol', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'javascript:alert(1)';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.include('Invalid protocol');
    });

    it('should block data: URLs', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'data:text/html,<script>alert(1)</script>';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.include('Invalid protocol');
    });

    it('should block vbscript: protocol', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'vbscript:alert(1)';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.include('Invalid protocol');
    });

    it('should block file: protocol', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'file:///etc/passwd';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.include('Invalid protocol');
    });

    it('should block URL-encoded javascript: protocol', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'java%09script:alert(1)'; // Tab character
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.include('Invalid protocol');
    });

    it('should block obfuscated protocols in URL', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'https://example.com?redirect=javascript:alert(1)';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.include('Invalid protocol detected');
    });

    it('should allow valid https URLs', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'https://example.com';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.equal('');
    });

    it('should allow valid http URLs', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context>
          <forge-rte-link></forge-rte-link>
        </forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;
      (link as any)._linkUrl = 'http://example.com/path?query=value';
      (link as any)._validateUrl();

      expect((link as any)._validationError).to.equal('');
    });
  });

  describe('JSON Input Sanitization', () => {
    it('should sanitize javascript: links in JSON', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Click here',
                marks: [
                  {
                    type: 'link',
                    attrs: { href: 'javascript:alert(1)' }
                  }
                ]
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('javascript:');
      expect(output).to.include('href="#"'); // Replaced with safe default
    });

    it('should sanitize data: URLs in JSON', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Click',
                marks: [
                  {
                    type: 'link',
                    attrs: { href: 'data:text/html,<script>alert(1)</script>' }
                  }
                ]
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('data:text/html');
      expect(output).to.include('href="#"');
    });

    it('should reject deeply nested JSON (DoS prevention)', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      // Create deeply nested structure (51 levels - exceeds MAX_DEPTH of 50)
      const deep: any = { type: 'doc', content: [] };
      let current: any = deep.content;
      for (let i = 0; i < 51; i++) {
        const node = { type: 'paragraph', content: [] };
        current.push(node);
        current = node.content;
      }

      let errorThrown = false;
      try {
        (el as any).content = deep;
        await el.updateComplete;
      } catch (e) {
        errorThrown = true;
        expect((e as Error).message).to.include('Maximum nesting depth');
      }

      expect(errorThrown).to.be.true;
    });

    it('should reject extremely large JSON structures (DoS prevention)', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      // Create structure with too many nodes (exceeds MAX_NODES of 5000)
      const huge = {
        type: 'doc',
        content: Array(5001)
          .fill(null)
          .map(() => ({
            type: 'paragraph',
            content: [{ type: 'text', text: 'x' }]
          }))
      };

      let errorThrown = false;
      try {
        (el as any).content = huge;
        await el.updateComplete;
      } catch (e) {
        errorThrown = true;
        expect((e as Error).message).to.include('Maximum node count');
      }

      expect(errorThrown).to.be.true;
    });

    it('should sanitize URL-encoded dangerous protocols in JSON', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Link',
                marks: [
                  {
                    type: 'link',
                    attrs: { href: 'java%09script:alert(1)' }
                  }
                ]
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('javascript');
      expect(output).to.include('href="#"');
    });

    it('should handle nested link marks safely', async () => {
      const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Text',
                marks: [
                  { type: 'bold' },
                  {
                    type: 'link',
                    attrs: { href: 'javascript:alert(1)' }
                  },
                  { type: 'italic' }
                ]
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('javascript:');
    });
  });

  describe('Renderer Security', () => {
    it('should sanitize javascript: links in renderer', async () => {
      const el = await fixture<RichTextRendererComponent>(html`
        <forge-rich-text-renderer></forge-rich-text-renderer>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Click',
                marks: [
                  {
                    type: 'link',
                    attrs: { href: 'javascript:alert(1)' }
                  }
                ]
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const links = el.shadowRoot!.querySelectorAll('a');
      links.forEach(link => {
        expect(link.href).to.not.include('javascript:');
      });
    });

    it('should sanitize data: URLs in renderer', async () => {
      const el = await fixture<RichTextRendererComponent>(html`
        <forge-rich-text-renderer></forge-rich-text-renderer>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      const malicious = {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Data URL',
                marks: [
                  {
                    type: 'link',
                    attrs: { href: 'data:text/html,<script>alert(1)</script>' }
                  }
                ]
              }
            ]
          }
        ]
      };

      (el as any).content = malicious;
      await el.updateComplete;

      const links = el.shadowRoot!.querySelectorAll('a');
      links.forEach(link => {
        expect(link.href).to.not.include('data:text/html');
      });
    });

    it('should handle deeply nested content in renderer', async () => {
      const el = await fixture<RichTextRendererComponent>(html`
        <forge-rich-text-renderer></forge-rich-text-renderer>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      // Create deeply nested structure
      const deep: any = { type: 'doc', content: [] };
      let current: any = deep.content;
      for (let i = 0; i < 51; i++) {
        const node = { type: 'paragraph', content: [] };
        current.push(node);
        current = node.content;
      }

      // Should gracefully handle error and show empty content
      el.content = deep;
      await el.updateComplete;

      const text = el.shadowRoot!.textContent?.trim();
      expect(text).to.equal('');
    });

    it('should handle large content safely in renderer', async () => {
      const el = await fixture<RichTextRendererComponent>(html`
        <forge-rich-text-renderer></forge-rich-text-renderer>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      // Create structure with too many nodes
      const huge = {
        type: 'doc',
        content: Array(5001)
          .fill(null)
          .map(() => ({
            type: 'paragraph',
            content: [{ type: 'text', text: 'x' }]
          }))
      };

      // Should gracefully handle error
      el.content = huge;
      await el.updateComplete;

      const text = el.shadowRoot!.textContent?.trim();
      expect(text).to.equal('');
    });
  });

  describe('Paste Handler Security', () => {
    it('should remove script elements from pasted HTML', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      // Simulate setting content with script
      el.content = '<p>Safe text</p><script>alert(1)</script>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('<script>');
      expect(output).to.include('Safe text');
    });

    it('should remove iframe elements from pasted HTML', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p>Text</p><iframe src="evil.com"></iframe>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('<iframe');
    });

    it('should remove SVG elements with scripts', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p>Text</p><svg onload="alert(1)"><script>alert(2)</script></svg>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('<svg');
      expect(output).to.not.include('onload');
    });

    it('should remove style attributes', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p style="background:red">Text</p>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('style=');
    });

    it('should remove data attributes', async () => {
      const el = await fixture<RichTextContextComponent>(html`
        <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
      `);

      await new Promise(resolve => setTimeout(resolve, 100));

      el.content = '<p data-evil="payload">Text</p>';
      await el.updateComplete;

      const output = el.toHTML();
      expect(output).to.not.include('data-evil');
    });
  });
});
