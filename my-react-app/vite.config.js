import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repo-name' with the GitHub repo name (exact match)
export default defineConfig({
  base: '/react-list-app/',
  plugins: [react()],
});
