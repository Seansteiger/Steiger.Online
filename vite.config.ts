import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/JSH-Digital-Architects/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify("AIzaSyCJfcLquZ4zzWNU7SkH4oP20P6TUHqO5Mo"),
      'process.env.GEMINI_API_KEY': JSON.stringify("AIzaSyCJfcLquZ4zzWNU7SkH4oP20P6TUHqO5Mo")
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
