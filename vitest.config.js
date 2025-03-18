import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.{js,ts,vue}'],
    coverage: {
      reporter: ['html', 'lcov', 'text-summary'],
      threshold: {
        global: {
          statements: 30,  // Exigir 80% de cobertura de declarações
          branches: 30,    // Exigir 80% de cobertura de branches
          functions: 30,   // Exigir 80% de cobertura de funções
          lines: 30,       // Exigir 80% de cobertura de linhas
        },
      },
    },
    exclude: ['node_modules'],
  },
});


