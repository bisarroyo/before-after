// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import css from 'rollup-plugin-css-only'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    css({
      output: 'css/bundle.css'
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'beforeAfterEffect',
      // the proper extensions will be added
      fileName: 'before-to-after',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    cssCodeSplit: true
  }
})
