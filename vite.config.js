import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import apiMiddlewarePlugin from './vite-plugins/apiMiddleware.js'

export default defineConfig(({ mode }) => {
  // Loads .env.local (and friends) into process.env so the dev-only API
  // middleware can read secret keys server-side — these are never bundled
  // into client code since only VITE_-prefixed vars reach the browser.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), apiMiddlewarePlugin()],
  }
})
