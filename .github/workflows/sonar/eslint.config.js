export default [
    {
      ignores: ["node_modules", "dist","tests"]
    },
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "warn"
      }
    }
  ];
