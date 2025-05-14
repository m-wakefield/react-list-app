import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace this with your GitHub repo name:
export default defineConfig({
  base: '/react-list-app/',
  plugins: [react()],
});
