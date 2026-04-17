import { Component, signal } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconShoppingCart,
  tylIconPeople,
  tylIconAttachMoney,
  tylIconTrendingUp,
  tylIconMoreVert,
  tylIconWarning
} from '@tylertech/tyler-icons';
import { CountCardTheme } from '@tylertech/forge-extended';

@Component({
  selector: 'app-count-card-demo',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss'],
  standalone: false
})
export class CountCardDemoComponent {
  static {
    IconRegistry.define([
      tylIconShoppingCart,
      tylIconPeople,
      tylIconAttachMoney,
      tylIconTrendingUp,
      tylIconMoreVert,
      tylIconWarning
    ]);
  }

  public selectedTheme = signal<CountCardTheme>('none');
  public noBorder = signal(false);

  public themes: CountCardTheme[] = [
    'none',
    'primary',
    'secondary',
    'tertiary',
    'success',
    'error',
    'warning',
    'info',
    'info-secondary'
  ];
}
