import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantity-field-demo',
  templateUrl: './quantity-field.component.html',
  styleUrls: ['./quantity-field.component.scss']
})
export class QuantityFieldDemoComponent {
  public quantity = model(1);
}
