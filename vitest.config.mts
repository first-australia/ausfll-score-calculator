import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Source files import bare specifiers like `first-constants`, which resolve via
// tsconfig's `baseUrl: "src"`. Vitest needs the same mapping.
export default defineConfig({
  resolve: {
    alias: {
      'first-constants': resolve(__dirname, 'src/first-constants.ts'),
      'game-types': resolve(__dirname, 'src/game-types.ts'),
    },
  },
  test: {
    include: ['test/**/*.test.ts'],
  },
});
