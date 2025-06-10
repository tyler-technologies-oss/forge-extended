import { Component } from '@angular/core';

@Component({
    selector: 'app-quantity-field-demo',
    templateUrl: './quantity-field.component.html',
    styleUrls: ['./quantity-field.component.scss'],
    standalone: false
})
export class QuantityFieldDemoComponent {
  public quantity = 1;
}
