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
    // Enable source maps for development, disable for production
    sourcemap: process.env.NODE_ENV === 'development',
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-core': ['react', 'react-dom'],
          // Router
          'router': ['@redwoodjs/router'],
          // Analytics (loaded separately)
          'analytics': ['@vercel/analytics', '@vercel/speed-insights'],
          // RedwoodJS core
          'redwood-core': ['@redwoodjs/web'],
          // Vendor libraries
          'vendor': ['prop-types'],
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash].[ext]`
          }
          return `assets/[name]-[hash].[ext]`
        }
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 2000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@redwoodjs/router',
      '@redwoodjs/web',
      'prop-types'
    ],
    // Force pre-bundling of dependencies
    force: true,
    // Exclude problematic dependencies
    exclude: ['@vercel/analytics', '@vercel/speed-insights']
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
