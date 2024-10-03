export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 100],
    'footer-max-line-length': [0, 'always', 100],
    'lit-plugin.rules.no-complex-attribute-binding': 'off',
    'lit-plugin.rules.no-incompatible-type-binding': 'off'
  }
};
