# Forge Schematics

A collection of Angular Schematics for working with @tylertech/forge and Web Components in general:

* The [custom-elements](./src/custom-elements) schematic generates Angular components that act as proxies to native web components, but eliminate the need to use `CUSTOM_ELEMENTS_SCHEMA`, restoring type-safety and IntelliSense to your Angular templates.

## Development

To test the schematics in this repository, first install the Schematics CLI:

```sh
npm install -g @angular-devkit/schematics-cli
```

Execute `npm run build` to ensure the latest version of the code is built.  Then use the Schematics CLI to run the desired schematic (e.g. `custom-elements`) and pass any desired arguments.

```sh
schematics .:custom-elements --manifest="..."
```

Pass `--debug=false` in order to actually create files, otherwise the command will do a dry run and just output which files would be modified or created.

Functionality should also be unit tested, and the tests can be run using `npm test`.