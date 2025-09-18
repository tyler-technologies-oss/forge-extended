import '$dev/shared';
import '$lib/multi-select-header';
import { defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconCheck, tylIconClear, tylIconMoreVert } from '@tylertech/tyler-icons';

defineIconButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconCheck, tylIconClear, tylIconMoreVert]);