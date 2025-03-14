import { Component, inject, signal } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';
import { ConfirmationDialogActionEventData } from '@tylertech/forge-extended';
import { ConfirmationDialogService } from 'projects/forge-extended-angular/src/lib/confirmation-dialog/confirmation-dialog.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog-demo',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogDemoComponent {
  private _confirmationDialogService = inject(ConfirmationDialogService);
  private _toastService = inject(ToastService);

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
      evt.preventDefault();

      let { primaryAction } = evt.detail;

      if (primaryAction) {
        if (!this.simulateAsync()) {
          dialogRef.close();
          this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
        }

        dialogRef.isBusy = true;
        setTimeout(() => {
          dialogRef.close();
          this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
        }, 1500);
      } else {
        dialogRef.close();
        this._toastService.show({ message: 'Changes cancelled' });
      }
    });
  }

  public onActionInline(evt: CustomEvent<ConfirmationDialogActionEventData>): void {
    evt.preventDefault();
    let { primaryAction } = evt.detail;

    if (primaryAction) {
      if (!this.simulateAsync()) {
        this.closeDialog();
        this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
      }

      this.isBusy.set(true);

      setTimeout(() => {
        this.isBusy.set(false);
        this.closeDialog();
        this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
      }, 3000);
    } else {
      this.isBusy.set(false);
      this.closeDialog();
      this._toastService.show({ message: 'Changes cancelled' });
    }
  }
}
