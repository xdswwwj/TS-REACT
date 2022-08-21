module.exports = {
  parser: "@typescript-eslint/parser", // ESLint parser를 지정한다.
  extends: [
    "plugin:react/recommended", // eslint-plugin-react의 권장 규칙을 사용한다.
    "plugin:@typescript-eslint/recommended", // @typescript-eslint/eslint-plugin의 권장 규칙을 사용한다.
    // "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // 최신 ECMAScript 기능의 구문 분석 허용
    sourceType: "module", // import 사용 허용
    ecmaFeatures: {
      jsx: true, // JSX의 구문 분석을 허용
    },
  },
  rules: {},
  settings: {
    react: {
      version: "detect", // 사용할 react 버전을 자동으로 감지하도록 eslint-plugin-react에 지시한다.
    },
  },
};
