import { Component } from '@angular/core';
import { ButtonVariant, IMenuOption } from '@tylertech/forge';
import { IconRegistry } from '@tylertech/forge';
import { tylIconMoreVert } from '@tylertech/tyler-icons/standard';
import { NgTemplateOutlet } from '@angular/common';
import { tylIconMoveResizeVariant } from '@tylertech/tyler-icons/extended';

interface customMenuOption extends IMenuOption {
  variant?: ButtonVariant | undefined;
}
@Component({
  selector: 'app-responsive-toolbar-demo',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarDemoComponent {
  static {
    IconRegistry.define([tylIconMoreVert, tylIconMoveResizeVariant]);
  }

  public toolbarActions: customMenuOption[] = [
    { label: 'Tertiary action ', value: 'add-user', variant: 'text' },
    { label: 'Secondary action', value: 'remove-user', variant: 'outlined' },
    { label: 'Primary action', value: 'third-action', variant: 'raised' }
  ];
}
