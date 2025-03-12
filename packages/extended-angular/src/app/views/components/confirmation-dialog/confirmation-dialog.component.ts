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

  public toggleConfirmationDialog(open: boolean): void {
    this.open.set(open);
  }

  public openDialogWithService(): void {
    const dialogRef = this._confirmationDialogService.open({
      title: 'Discard draft?',
      message: 'You have unsaved changes. Are you sure you want to discard them?',
      secondaryButtonText: 'Cancel',
      primaryButtonText: 'Discard'
    });

    dialogRef.onAction.pipe(take(1)).subscribe(result => {
      let { primaryAction } = result.detail;
      dialogRef.nativeElement.isBusy = true;

      if (primaryAction) {
        setTimeout(() => {
          dialogRef.isBusy = true;
          dialogRef.close();
          this._toastService.show({ theme: 'success', message: 'Changes confirmed' });
        }, 1000);
      } else {
        dialogRef.close();
        this._toastService.show({ message: 'Changes cancelled' });
      }
    });
  }

  public onActionInline(e: CustomEvent<ConfirmationDialogActionEventData>): void {
    let { primaryAction } = e.detail;
    if (!primaryAction) {
      this.toggleConfirmationDialog(false);
      return;
    }

    // Perform primary action
    this.isBusy.set(true);
    setTimeout(() => {
      this.toggleConfirmationDialog(false);
    }, 3000);
  }
}
