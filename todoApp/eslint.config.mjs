export default [
  {
    ignores: ["node_modules", "dist"], // Ignore build files
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "strict": ["error", "global"], // Enforce strict mode
      "no-var": "error", // Disallow var
      "prefer-const": "error", // Prefer const when possible
      "no-unused-vars": "error", // No unused variables
      "semi": ["error", "always"], // Require semicolons
      "indent": ["error", 2], // Enforce 2-space indentation
      "no-console": ["error", { "allow": ["warn", "error"] }], // Disallow console.log in production
      "eqeqeq": ["error", "always"], // Require strict equality === !==
      "curly": "error", // Require curly braces in if, for, while
      "quotes": ["error", "single"], // Use single quotes
      "comma-dangle": ["error", "never"], // No trailing commas
      "object-curly-spacing": ["error", "always"], // Space inside curly braces
      "arrow-spacing": ["error", { "before": true, "after": true }], // Spacing around =>
      "max-len": ["error", { "code": 100 }], // Limit line length
      "no-debugger": "error" // Disallow debugger
    }
  }
];
