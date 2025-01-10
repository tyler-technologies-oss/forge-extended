import { Component, inject, signal } from '@angular/core';
import { BusyIndicatorService } from '@tylertech/forge-extended-angular';

@Component({
  selector: 'app-busy-indicator-demo',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss']
})
export class BusyIndicatorDemoComponent {
  private _busyIndicatorService = inject(BusyIndicatorService);

  public open = signal(false);

  public showInline(): void {
    this.open.set(true);
    setTimeout(() => {
      this.open.set(false);
    }, 3000);
  }

  public showDynamic(): void {
    const ref = this._busyIndicatorService.show({ message: 'Loading...' });
    setTimeout(() => ref.hide(), 3000);
  }
}
