import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuración del proxy para redireccionar las solicitudes a la URL correspondiente
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' ? process.env.VITE_REACT_APP_VERCELBACK : process.env.VITE_REACT_APP_LOCALBACK,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
