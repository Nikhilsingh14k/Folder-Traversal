import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0
    port: 3000, // Use Render's PORT environment variable
  },
  preview: {
    host: '0.0.0.0', // Bind the preview server to 0.0.0.0
    port: 3000,
  },
});
