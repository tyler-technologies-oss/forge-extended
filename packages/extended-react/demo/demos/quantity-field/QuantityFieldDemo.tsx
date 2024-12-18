import { ForgeQuantityField } from '@tylertech/forge-extended-react';

export function QuantityFieldDemo(): JSX.Element {
  return (
    <>
      <h2 className="forge-typography--subheading4">Quantity Field</h2>
      <div>
        <ForgeQuantityField>
          <input id="quantity" type="number" defaultValue="1" aria-label="Set a quantity" step="2" />
        </ForgeQuantityField>
      </div>
    </>
  );
}
