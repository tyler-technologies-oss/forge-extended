import { ForgeResponsiveToolbar } from '@tylertech/forge-extended-react';
import { ForgeIconButton, ForgeIcon, ForgeButton, ForgeStack } from '@tylertech/forge-react';

export function ResponsiveToolbarDemo(): JSX.Element {
  return (
    <>
      <h2 className="forge-typography--subheading4">Responsive Toolbar</h2>
      <div>
        <ForgeResponsiveToolbar>
          <ForgeIconButton aria-label="Navigate back" slot="before-start">
            <ForgeIcon name="arrow_back" external></ForgeIcon>
          </ForgeIconButton>
          <div slot="start" className="forge-typography--heading4">
            This is the title
          </div>
          <div slot="end-large">
            <ForgeStack inline alignment="center">
              <ForgeButton variant={'text'}>Action 1</ForgeButton>
              <ForgeButton variant={'outlined'}>Action 2</ForgeButton>
              <ForgeButton variant={'raised'}>Action 3</ForgeButton>
            </ForgeStack>
          </div>
          <div slot="end-small">
            <ForgeIconButton aria-label="Open menu">
              <ForgeIcon name="more_vert" external></ForgeIcon>
            </ForgeIconButton>
          </div>
        </ForgeResponsiveToolbar>
      </div>
    </>
  );
}
