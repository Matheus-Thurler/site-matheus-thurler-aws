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
    provider: 'v8',
    include: ['tests/**/*.{js,ts,vue}'],
    coverage: {
      reporter: ['html', 'lcov', 'text-summary'],
    },
    exclude: ['node_modules'],
  },
});


