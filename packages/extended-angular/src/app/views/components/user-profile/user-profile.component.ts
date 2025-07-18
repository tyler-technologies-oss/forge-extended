import { Component } from '@angular/core';
import { ButtonVariant, IMenuOption } from '@tylertech/forge';
import { IconRegistry } from '@tylertech/forge';
import { tylIconAccount, tylIconSettings } from '@tylertech/tyler-icons';

interface customMenuOption extends IMenuOption {
  variant?: ButtonVariant | undefined;
}
@Component({
  selector: 'app-user-profile-demo',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: false
})
export class UserProfileDemoComponent {
  static {
    IconRegistry.define([tylIconSettings, tylIconAccount]);
  }

  public toolbarActions: customMenuOption[] = [
    { label: 'Tertiary action ', value: 'add-user', variant: 'text' },
    { label: 'Secondary action', value: 'remove-user', variant: 'outlined' },
    { label: 'Primary action', value: 'third-action', variant: 'raised' }
  ];
}
