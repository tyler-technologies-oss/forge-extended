import { Component, signal } from '@angular/core';
import { IMenuOption } from '@tylertech/forge';
import { IconRegistry } from '@tylertech/forge';
import { tylIconMoreVert } from '@tylertech/tyler-icons/standard';
import { NgTemplateOutlet } from '@angular/common';

interface customMenuOption extends IMenuOption {
  variant?: 'text' | 'raised' | 'outlined';
}
@Component({
  selector: 'app-responsive-toolbar-demo',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarDemoComponent {
  static {
    IconRegistry.define([tylIconMoreVert]);
  }

  public noBorder = signal(false);
  public autoHeight = signal(true);
  public inverted = signal(false);

  public cards = [1, 2, 3, 4];

  public toolbarActions: customMenuOption[] = [
    { label: 'Tertiary action ', value: 'add-user', variant: 'text' },
    { label: 'Secondary action', value: 'remove-user', variant: 'outlined' },
    { label: 'Primary action', value: 'third-action', variant: 'raised' }
  ];
}
