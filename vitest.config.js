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
    provider: 'istanbul',
    include: ['tests/unit/**/*.spec.js'],
    coverage: {
      reporter: ['html', 'lcov', 'text-summary'],
    },
  },
});


