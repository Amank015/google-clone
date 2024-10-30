import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [react(),
    nodePolyfills({
      process: true,
      buffer: true,
    }),
  ],
  define: {
    'process.env': {},  // Optional if you want to avoid using `process.env`
  },
})
