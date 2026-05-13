import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconMoreVert, tylIconArrowBack, tylIconSave, tylIconClose } from '@tylertech/tyler-icons';

@Component({
  selector: 'app-structured-card-demo',
  templateUrl: './structured-card.component.html',
  styleUrls: ['./structured-card.component.scss'],
  standalone: false
})
export class StructuredCardDemoComponent {
  static {
    IconRegistry.define([tylIconMoreVert, tylIconArrowBack, tylIconSave, tylIconClose]);
  }
}
