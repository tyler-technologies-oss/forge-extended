import { Component, inject, signal } from '@angular/core';
import { BusyIndicatorService } from '@tylertech/forge-extended-angular';

@Component({
  selector: 'app-busy-indicator-demo',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss'],
  standalone: false
})
export class BusyIndicatorDemoComponent {
  private _busyIndicatorService = inject(BusyIndicatorService);

  public open = signal(false);

  public showDynamic(): void {
    const ref = this._busyIndicatorService.open({ message: 'Loading...' });
    setTimeout(() => ref.hide(), 3000);
  }
}
