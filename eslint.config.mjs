import globals from "globals";

export default [
  // For regular JavaScript files treated as modules
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module", // Change this to 'module' to support import/export
      globals: globals.browser
    }
  }
];
