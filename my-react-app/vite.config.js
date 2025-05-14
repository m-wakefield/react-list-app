import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-list-app/',  // 👈 exact name of your GitHub repo
  plugins: [react()],
});
