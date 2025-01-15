import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current directory and file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for ESLint compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname, // Required for resolving plugins and shared configurations
});

// Export the ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Use the Next.js core web vitals config
];

export default eslintConfig;
