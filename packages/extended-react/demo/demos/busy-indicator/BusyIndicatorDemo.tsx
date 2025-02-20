import { ForgeButton } from '@tylertech/forge-react';
import { ForgeExtBusyIndicator } from '@tylertech/forge-extended-react';
import { useState } from 'react';

export function BusyIndicatorDemo(): JSX.Element {
  const [open, setOpen] = useState(false);

  function openBusyIndicator(): void {
    setOpen(true);
    setTimeout(() => setOpen(false), 5000);
  }

  return (
    <>
      <h2 className="forge-typography--subheading4">Busy Indicator</h2>
      <div>
        <ForgeButton variant="raised" onclick={openBusyIndicator}>
          Show Busy Indicator
        </ForgeButton>
        <ForgeExtBusyIndicator open={open} />
      </div>
    </>
  );
}
