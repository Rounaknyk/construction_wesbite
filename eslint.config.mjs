import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // ① keep the Next.js preset
  ...compat.extends("next/core-web-vitals"),

  // ② add your overrides
  {
    rules: {
      // turn the rule off  ──►  0 = off, 1 = warn, 2 = error
      "react/no-unescaped-entities": 0
    }
  }
];
