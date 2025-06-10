import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';
import { ConfirmationDialogActionEventData } from '@tylertech/forge-extended';
import { ConfirmationDialogService } from 'projects/forge-extended-angular/src/lib/confirmation-dialog/confirmation-dialog.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-confirmation-dialog-demo',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
    standalone: false
})
export class ConfirmationDialogDemoComponent {
  private _confirmationDialogService = inject(ConfirmationDialogService);
  private _toastService = inject(ToastService);

  // Inline dialog state
  public open = signal(false);
  public isBusy = signal(false);
  public simulateAsync = signal(true);

  public openDialog(): void {
    this.open.set(true);
  }

  public closeDialog(): void {
    this.open.set(false);
  }

  public openDialogWithService(): void {
    const dialogRef = this._confirmationDialogService.open({
      title: 'Discard draft?',
      message: 'You have unsaved changes. Are you sure you want to discard them?',
      secondaryButtonText: 'Cancel',
      primaryButtonText: 'Discard',
      isBusy: false
    });

    dialogRef.onAction.pipe(take(1)).subscribe(evt => {
      console.log('[ConfirmationDialogDemoComponent] openDialogWithService', evt.detail);

      if (evt.detail.value) {
        if (this.simulateAsync()) {
          evt.preventDefault(); // Prevent the dialog from closing
          dialogRef.isBusy = true;
          this._toastService.show({ theme: 'success', message: 'Changes confirmed (simulate async)' });
          setTimeout(() => dialogRef.close(), 3000);
        } else {
          this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
        }
      } else {
        this._toastService.show({ message: 'Changes cancelled' });
      }
    });
  }

  public onActionInline(evt: CustomEvent<ConfirmationDialogActionEventData>): void {
    console.log('[ConfirmationDialogDemoComponent] onActionInline', evt.detail);

    if (evt.detail.value) {
      if (this.simulateAsync()) {
        evt.preventDefault(); // Prevent the dialog from closing
        this.isBusy.set(true);
        this._toastService.show({ theme: 'success', message: 'Changes confirmed (simulate async)' });
        setTimeout(() => {
          this.isBusy.set(false);
          this.closeDialog();
        }, 3000);
      } else {
        this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
      }
    } else {
      this._toastService.show({ message: 'Changes cancelled' });
    }
  }
}
