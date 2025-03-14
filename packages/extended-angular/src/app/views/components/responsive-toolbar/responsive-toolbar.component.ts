import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-responsive-toolbar-demo',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarDemoComponent {
  public noBorder = signal(false);
  public autoHeight = signal(true);
  public inverted = signal(false);
}
