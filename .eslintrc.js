const defineConfig = require("eslint-define-config");

module.exports = defineConfig({
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["isaacscript", "import"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
});
