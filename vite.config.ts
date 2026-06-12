import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Plugin to copy _headers file to dist
function copyHeadersPlugin() {
  return {
    name: 'copy-headers',
    writeBundle() {
      const source = path.resolve(__dirname, 'public/_headers');
      const dest = path.resolve(__dirname, 'dist/_headers');
      if (fs.existsSync(source)) {
        fs.copyFileSync(source, dest);
      }
    }
  };
}

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    server: {
      port: 9000,
      host: '0.0.0.0',
    },
    plugins: [react(), copyHeadersPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@components': path.resolve(__dirname, './components'),
        '@lib': path.resolve(__dirname, './lib'),
        '@styles': path.resolve(__dirname, './styles'),
      }
    },
    build: {
      // Output directory
      outDir: 'dist',
      // Generate source maps for production debugging
      sourcemap: isProduction ? false : true,
      // Minify
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
        },
      },
      // Chunk splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['lucide-react'],
            'motion-vendor': ['motion'],
          },
          // Asset naming for better caching
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            if (name.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      // Chunk size warning limit (increased for modern apps)
      chunkSizeWarningLimit: 1000,
      // CSS code splitting
      cssCodeSplit: true,
    },
    // Headers for proper caching
    headers: {
      '/*.js': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.css': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.png': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.jpg': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.jpeg': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.svg': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.webp': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/*.ico': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      '/index.html': {
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'motion'],
    },
    // Asset handling
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp', '**/*.ico'],
  };
});
