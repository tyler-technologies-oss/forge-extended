# Tyler Forge™ Extended Angular Adapter

Angular wrapper components for Tyler Forge™ Extended Web Components with full TypeScript support, Angular Forms integration, and tree-shakable modules.

## Why This Library?

Angular doesn't natively recognize custom elements without `CUSTOM_ELEMENTS_SCHEMA`, which removes type safety and IDE support. This library provides:

- **Type-safe Angular components** that wrap each Forge extended Web Component
- **Full TypeScript support** with IntelliSense for properties and events
- **Angular Forms integration** with `ControlValueAccessor` for `formControl`, `formControlName`, and `ngModel`
- **Tree-shakable modules** - import only what you need
- **No `CUSTOM_ELEMENTS_SCHEMA` required**

## Version Compatibility

| `@tylertech/forge-extended-angular` | Angular              | `@tylertech/forge-extended` |
| ----------------------------------- | -------------------- | --------------------------- |
| `^2.0.0`                            | `>=20.0.0 < 22.0.0`  | `^1.2.0`                    |
| `^1.0.0`                            | `>=19.0.0 < 21.0.0`  | `^1.0.0`                    |

## Installation

Install both the core Forge extended components and the Angular adapter:

```bash
npm install @tylertech/forge-extended @tylertech/forge-extended-angular
```

> **Note:** `@tylertech/forge-extended` is a peer dependency and must be installed alongside this package.

## Quick Start

```typescript
import { Component } from '@angular/core';
import { ForgeQuantityFieldModule } from '@tylertech/forge-extended-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ForgeQuantityFieldModule],
  template: `<forge-quantity-field [value]="5"></forge-quantity-field>`
})
export class AppComponent {}
```

## Usage

### Standalone Components (Recommended)

Import component modules directly in your standalone components:

```typescript
import { Component } from '@angular/core';
import { ForgeQuantityFieldModule } from '@tylertech/forge-extended-angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ForgeQuantityFieldModule],
  template: `
    <forge-quantity-field
      [value]="quantity"
      (valueChange)="onQuantityChange($event)">
    </forge-quantity-field>
  `
})
export class ExampleComponent {
  quantity = 5;

  onQuantityChange(value: number): void {
    this.quantity = value;
  }
}
```

### NgModule-based Applications

For traditional NgModule-based applications, import the component modules in your Angular module:

```typescript
import { NgModule } from '@angular/core';
import { ForgeQuantityFieldModule } from '@tylertech/forge-extended-angular';

@NgModule({
  imports: [
    ForgeQuantityFieldModule,
    // ... other modules
  ]
})
export class AppModule { }
```

Then use the component in your templates:

```html
<forge-quantity-field
  [value]="quantity"
  (valueChange)="onQuantityChange($event)">
</forge-quantity-field>
```

### Using with Angular Forms

The adapter library provides `ControlValueAccessor` support for form-enabled components.

**Standalone example:**

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ForgeQuantityFieldModule } from '@tylertech/forge-extended-angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ReactiveFormsModule, ForgeQuantityFieldModule],
  template: `
    <forge-quantity-field [formControl]="quantityControl"></forge-quantity-field>
  `
})
export class ExampleComponent {
  quantityControl = new FormControl(5);
}
```

**NgModule example:**

```typescript
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgeQuantityFieldModule } from '@tylertech/forge-extended-angular';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ForgeQuantityFieldModule
  ]
})
export class FeatureModule { }
```

```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example',
  template: `
    <forge-quantity-field [formControl]="quantityControl"></forge-quantity-field>
  `
})
export class ExampleComponent {
  quantityControl = new FormControl(5);
}
```

## Available Components

This library provides Angular wrappers for all Forge extended components:

| Component | Module | Description |
|-----------|--------|-------------|
| `<forge-app-launcher>` | `ForgeAppLauncherModule` | Application launcher with navigation |
| `<forge-app-launcher-link>` | `ForgeAppLauncherLinkModule` | Link items for app launcher |
| `<forge-busy-indicator>` | `ForgeBusyIndicatorModule` | Loading indicator overlay |
| `<forge-confirmation-dialog>` | `ForgeConfirmationDialogModule` | Confirmation dialog component |
| `<forge-multi-select-header>` | `ForgeMultiSelectHeaderModule` | Multi-select table header |
| `<forge-profile-link>` | `ForgeProfileLinkModule` | User profile link component |
| `<forge-quantity-field>` | `ForgeQuantityFieldModule` | Numeric input with increment/decrement |
| `<forge-responsive-toolbar>` | `ForgeResponsiveToolbarModule` | Responsive toolbar container |
| `<forge-theme-toggle>` | `ForgeThemeToggleModule` | Light/dark theme toggle |
| `<forge-user-profile>` | `ForgeUserProfileModule` | User profile dropdown |

Each component is exported as a standalone Angular module that you can import individually for tree-shaking.

## Additional Resources

- **[Tyler Forge Documentation](https://forge.tylertech.com/)** - Complete component documentation
- **[GitHub Repository](https://github.com/tyler-technologies-oss/forge-extended)** - Source code and issues
- **[Changelog](https://github.com/tyler-technologies-oss/forge-extended/blob/main/packages/extended-angular/CHANGELOG.md)** - Release notes and version history

## License

Apache 2.0 - See [LICENSE](https://github.com/tyler-technologies-oss/forge-extended/blob/main/LICENSE) for details.
