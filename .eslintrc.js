module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
    'eslint:recommended'
  ],
  rules: {
    "indent": ["error", 2],
    "import/no-unresolved": "off",
    "strict": "off",
    "no-console": "off",
    "no-extra-semi": "off",
    "no-underscore-dangle": "off",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always", {
      "omitLastInOneLineBlock": true
    }],
    "use-isnan": ["error"],
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "no-unused-vars": "off",
    "max-len": [
      "error",
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ]
  },
  parserOptions: {
    files: ['**/*.ts'],
    parser: '@typescript-eslint/parser'
  }
}
