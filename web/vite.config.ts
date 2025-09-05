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
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
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
