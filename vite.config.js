import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000, // Set to a value that suits your application
    rollupOptions: {
      output: {
        manualChunks: {
         
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
