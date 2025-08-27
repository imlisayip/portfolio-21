import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [redwood()],
  build: {
    // Enable source maps for production builds
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['@redwoodjs/router'],
          analytics: ['@vercel/analytics']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@redwoodjs/router']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
    // Enable CSS optimization only in production
  ...(process.env.NODE_ENV === 'production' && {
    css: {
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('cssnano')({
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
              normalizeWhitespace: true,
            }]
          })
        ]
      }
    }
  })
}

export default defineConfig(viteConfig)
