import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';  // Importa o plugin JSX
import vueDevTools from 'vite-plugin-vue-devtools';  // Importa o plugin DevTools
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),          // Plugin para suporte ao Vue
    vueJsx(),       // Plugin para suporte a JSX
    vueDevTools(),  // Plugin para suporte a DevTools do Vue
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': 'node_modules/bootstrap',
    }
  }
})
