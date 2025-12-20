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
      'process.env.API_KEY': JSON.stringify("AIzaSyDg-kZcBOTaR1f2AbdSqOpEQJ0K0CWNrtE"),
      'process.env.GEMINI_API_KEY': JSON.stringify("AIzaSyDg-kZcBOTaR1f2AbdSqOpEQJ0K0CWNrtE")
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
