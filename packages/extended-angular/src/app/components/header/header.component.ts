import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';
import { IAppBarSearchInputEventData } from '@tylertech/forge';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false
})
export class HeaderComponent {
  private _toastService = inject(ToastService);

  @Input() public showDrawerToggle = false;

  @Output()
  public menuClicked = new EventEmitter<void>();

  public onMenuClicked(): void {
    this.menuClicked.next();
  }

  public onSearch(evt: CustomEvent<IAppBarSearchInputEventData>): void {
    this._toastService.show(`Search: ${evt.detail}`);
  }
}
