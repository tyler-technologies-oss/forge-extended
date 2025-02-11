function transformComponentName(value) {
  return value.trim();
}

function validateComponentName(value) {
  if (/\S+/.test(value)) {
    return true;
  }
  return 'Component name is required';
}

export default function (plop) {
  // Scaffold out the file structure for a new component
  plop.setGenerator('component', {
    description: 'Create a new extended component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        transform: transformComponentName,
        validate: validateComponentName
      },
      {
        type: 'confirm',
        name: 'hasDemo',
        message: 'Do you want to create a demo page?',
        default: true
      },
      {
        type: 'confirm',
        name: 'hasStorybook',
        message: 'Do you want to create a Storybook page?',
        default: true
      }
    ],
    actions: function (answers) {
      const actions = [
        {
          type: 'addMany',
          destination: 'src/lib/{{dashCase name}}',
          base: 'templates/component',
          templateFiles: 'templates/component/**'
        },
        {
          type: 'modify',
          path: 'src/lib/index.ts',
          pattern: /(\/\/ -- EXPORTS PLACEHOLDER --)/g,
          template: "export * from './{{dashCase name}}';\n$1"
        }
      ];

      if (answers.hasDemo) {
        actions.push({
          type: 'addMany',
          destination: 'src/pages/demo/{{dashCase name}}',
          base: 'templates/demo',
          templateFiles: 'templates/demo/**'
        });
      }

      if (answers.hasStorybook) {
        actions.push({
          type: 'addMany',
          destination: 'src/stories/components/{{dashCase name}}',
          base: 'templates/storybook',
          templateFiles: 'templates/storybook/**'
        });
      }

      return actions;
    }
  });

  // Scaffold out a new demo page for a component
  plop.setGenerator('demo', {
    description: 'Create a new demo page for a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        transform: transformComponentName,
        validate: validateComponentName
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/dev/pages/{{dashCase name}}',
        base: 'templates/demo',
        templateFiles: 'templates/demo/**'
      }
    ]
  });

  // Scaffold out a new storybook page for a component
  plop.setGenerator('story', {
    description: 'Create a new Storybook page for a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        transform: transformComponentName,
        validate: validateComponentName
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/stories/components/{{dashCase name}}',
        base: 'templates/storybook',
        templateFiles: 'templates/storybook/**'
      }
    ]
  });
}
