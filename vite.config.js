import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'esm' // Ensure ES modules output
      }
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext' // Also set for esbuild
    }
  }
});

