import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';
import { IconRegistry } from '@tylertech/forge';
import { tylIconDownload, tylIconDelete } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconDownload, tylIconDelete]);

@Component({
  selector: 'app-multi-select-header-demo',
  templateUrl: './multi-select-header.component.html',
  styleUrls: ['./multi-select-header.component.scss'],
  standalone: false
})
export class MultiSelectHeaderDemoComponent {
  private _toastService = inject(ToastService);

  public selectedCount = signal(3);
  public totalCount = signal(15);
  public noBorder = signal(false);
  public showSelectAllButton = signal(true);
  public showActions = signal(true);

  public get selectionText(): string {
    return `${this.selectedCount()} of ${this.totalCount()} selected`;
  }

  public onSelectAll(): void {
    this.selectedCount.set(this.totalCount());
    this._toastService.show({ message: `Selected all ${this.totalCount()} items` });
  }

  public onExport(): void {
    this._toastService.show({
      theme: 'success',
      message: `Exporting ${this.selectedCount()} selected items`
    });
  }

  public onDelete(): void {
    if (this.selectedCount() > 0) {
      this._toastService.show({
        theme: 'warning',
        message: `Deleting ${this.selectedCount()} selected items`
      });
    }
  }
}
