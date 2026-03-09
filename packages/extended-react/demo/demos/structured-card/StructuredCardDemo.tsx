import { IconRegistry } from '@tylertech/forge';
import { ForgeStructuredCard } from '@tylertech/forge-extended-react';
import { ForgeButton, ForgeIcon, ForgeIconButton } from '@tylertech/forge-react';
import { tylIconMoreVert, tylIconArrowBack, tylIconSave, tylIconClose } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconMoreVert, tylIconArrowBack, tylIconSave, tylIconClose]);

export function StructuredCardDemo(): JSX.Element {
  return (
    <>
      <h2 className="forge-typography--subheading4">Structured Card</h2>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">With Header Actions</h3>
        <ForgeStructuredCard headingLevel={2} style={{ maxWidth: '600px' }}>
          <div slot="title">Project Details</div>
          <ForgeIconButton slot="header-actions" aria-label="More actions">
            <ForgeIcon name="more_vert" />
          </ForgeIconButton>
          <div slot="body">
            <p style={{ margin: 0, padding: 0 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <ForgeButton variant="text" slot="footer-secondary-action">
            <ForgeIcon slot="start" name="close" />
            Cancel
          </ForgeButton>
          <ForgeButton variant="filled" slot="footer-primary-action">
            <ForgeIcon slot="start" name="save" />
            Save
          </ForgeButton>
        </ForgeStructuredCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">With Before Title Slot</h3>
        <ForgeStructuredCard headingLevel={2} style={{ maxWidth: '600px' }}>
          <ForgeIconButton slot="before-title" aria-label="Back">
            <ForgeIcon name="arrow_back" />
          </ForgeIconButton>
          <span slot="title">Project Details</span>
          <div slot="body">
            <p style={{ margin: 0, padding: 0 }}>
              This card demonstrates the before-title slot with a back button. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
          <ForgeButton variant="text" slot="footer-secondary-action">
            <ForgeIcon slot="start" name="close" />
            Cancel
          </ForgeButton>
          <ForgeButton variant="filled" slot="footer-primary-action">
            <ForgeIcon slot="start" name="save" />
            Save
          </ForgeButton>
        </ForgeStructuredCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">No Header</h3>
        <ForgeStructuredCard style={{ maxWidth: '600px' }}>
          <div slot="body">
            <p style={{ margin: 0, padding: 0 }}>
              This card has no header section, only body content. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <ForgeButton variant="text" slot="footer-secondary-action">
            <ForgeIcon slot="start" name="close" />
            Cancel
          </ForgeButton>
          <ForgeButton variant="filled" slot="footer-primary-action">
            <ForgeIcon slot="start" name="save" />
            Save
          </ForgeButton>
        </ForgeStructuredCard>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 className="forge-typography--subheading5">No Footer</h3>
        <ForgeStructuredCard headingLevel={2} style={{ maxWidth: '600px' }}>
          <div slot="title">Project Details</div>
          <ForgeIconButton slot="header-actions" aria-label="More actions">
            <ForgeIcon name="more_vert" />
          </ForgeIconButton>
          <div slot="body">
            <p style={{ margin: 0, padding: 0 }}>
              This card has no footer section, only header and body content. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
        </ForgeStructuredCard>
      </div>
    </>
  );
}
