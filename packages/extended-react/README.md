# Tyler Forge™ Extended React Adapter

This repository contains the `@tylertech/forge-extended-react` adapter library for working with
Tyler Forge™ Extended components within a React application. This library contains React wrapper components,
hooks, and other utilities to improve the developer experience when building applications with Forge and
more specifically Forge extended.

> Note: The `@tylertech/forge-extended-react` package is not required when using Forge extended with React
> projects, but it will make the consumption of Forge extended seamless and feel more native to React developers.

## The problem

React doesn't pass data through the JavaScript API (properties) on HTML elements. This means that any Web
Components created with the Custom Elements API in the browser will suffer from the same issue when trying
to pass complex data types such as array, objects, and functions through to the underlying HTML element.

Another issue is how event bubbling works in React. Since React uses its own synthetic events system,
standard HTML event bubbling from custom elements doesn't work, nor does attaching event listeners to
these custom elements for any `CustomEvent` types.

This library provides proxy React component wrappers for all Forge components to ensure that the APIs
are properly consumed via the JavaScript API (HTML attributes are still usable as well), along with 
providing the ability to listen to custom events on the elements.

> **Note:** React now natively supports communication with custom elements as of React 19. You will now be able
> to use the standard Forge elements directly (without the React wrappers) in React 19+ going forward!

## Data binding

React by default will set values on custom elements through HTML attributes, so code like this will not
work as expected because `data` will get stringified:

```html
<forge-table data={data}></forge-table>
```

By using this library, you will use the React wrapper components instead to ensure this works as expected:

```html
<ForgeTable data={data} />
```

## Event binding

When working with events, you will use a specific convention to attach callbacks:

```html
<ForgeTable on-forge-table-sort={onSort} />
```

> Prefix the standard Forge event names with `on-*` syntax to add event listener callbacks just
> as you normally would in React.

## Using Forge Extended

This library provides React wrapper components for Forge extended, but it does **not** automatically register the corresponding Forge
components with the browser. To do so, you will need to import the Forge extended components in your React app individually.

You typically want to define the components as early as possible in the bootstrapping process of your application. The `index.tsx` is a great place to do so:

```ts
import '@tylertech/forge-extended/quantity-field';
```

You can also define the components by importing and calling their respective `define*Component` functions:

```ts
import { defineQuantityFieldComponent, defineBusyIndicatorComponent } from '@tylertech/forge-extended';

defineQuantityFieldComponent();
defineBusyIndicatorComponent();
```

> Note: depending on the structure of your application, it can be beneficial to register certain Forge extended components that are only used in a specific part
> of your app so that it is bundled only with the code that is using it. This is referred to as code splitting and can improve the performance of your app,
> especially when using lazy loading.

## Development

The demo application can be started by running `pnpm run start`.

To build the library, run the following: `pnpm run build`.

> The built npm package output will be placed in the `dist` directory.

## TypeScript

This library provides typings for all React wrappers and hooks for compatibility with TypeScript.
