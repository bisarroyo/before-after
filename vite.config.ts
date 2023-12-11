// vite.config.ts
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'before-to-after'
    },
    rollupOptions: {
      output: {
        // Mantén el formato ES para el módulo
        format: 'es',
        // Agrega la generación de un archivo CommonJS
        exports: 'named',
        dir: 'dist',
        entryFileNames: 'index.js',
        sourcemap: true
      }
    }
  }
})
