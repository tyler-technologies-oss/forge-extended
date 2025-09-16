import { useState, useEffect } from 'react';
import { IconRegistry } from '@tylertech/forge';
import { ForgeMultiSelectHeader } from '@tylertech/forge-extended-react';
import { ForgeIconButton, ForgeIcon, ForgeCheckbox } from '@tylertech/forge-react';
import { tylIconDownload, tylIconDelete } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconDownload, tylIconDelete]);

export function MultiSelectHeaderDemo(): JSX.Element {
  const [selectedCount, setSelectedCount] = useState(3);
  const [totalCount] = useState(15);
  const [noBorder, setNoBorder] = useState(false);
  const [showSelectAllButton, setShowSelectAllButton] = useState(true);
  const [showActions, setShowActions] = useState(true);

  const selectionText = `${selectedCount} of ${totalCount} selected`;

  // Re-register icons when component updates to ensure they're available
  useEffect(() => {
    IconRegistry.define([tylIconDownload, tylIconDelete]);
  }, [showActions]);

  const handleSelectAll = (): void => {
    setSelectedCount(totalCount);
    // In a real app, you'd handle the select all logic here
  };

  return (
    <>
      <h2 className="forge-typography--subheading4">Multi Select Header</h2>
      <div>
        {/* Configuration Controls */}
        <div style={{ marginBottom: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ForgeCheckbox
            checked={noBorder}
            onChange={(e: CustomEvent<boolean>) => setNoBorder((e.target as HTMLInputElement).checked)}>
            <label>No border</label>
          </ForgeCheckbox>
          <ForgeCheckbox
            checked={showSelectAllButton}
            onChange={(e: CustomEvent<boolean>) => setShowSelectAllButton((e.target as HTMLInputElement).checked)}>
            <label>Show select all button</label>
          </ForgeCheckbox>
          <ForgeCheckbox
            checked={showActions}
            onChange={(e: CustomEvent<boolean>) => setShowActions((e.target as HTMLInputElement).checked)}>
            <label>Show action buttons</label>
          </ForgeCheckbox>
        </div>

        {/* Demo Component */}
        <ForgeMultiSelectHeader
          text={selectionText}
          noBorder={noBorder}
          onForgeMultiSelectHeaderSelectAll={handleSelectAll}>
          {/* Select All Button Text (conditionally rendered) */}
          {showSelectAllButton && <span slot="select-all-button-text">Select all</span>}

          {/* Action Buttons (conditionally rendered) */}
          {showActions && (
            <div slot="actions">
              <ForgeIconButton>
                <ForgeIcon name="download" />
              </ForgeIconButton>
              <ForgeIconButton disabled={selectedCount === 0}>
                <ForgeIcon name="delete" />
              </ForgeIconButton>
            </div>
          )}
        </ForgeMultiSelectHeader>
      </div>
    </>
  );
}
