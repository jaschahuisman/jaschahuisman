module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-undef": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "linebreak-style": ["error", "windows"],
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
};
