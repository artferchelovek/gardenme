import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: false,
      registerType: 'autoUpdate',
      manifest: {
        name: 'GardenMe — телеметрия сада',
        short_name: 'GardenMe',
        description: 'Влажность почвы с ESP32-датчиков и дневник поливов, в кармане',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f9faf2',
        theme_color: '#f9faf2',
        lang: 'ru',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icon-mask.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
        ],
        shortcuts: [
          {
            name: 'Добавить растение',
            short_name: 'Добавить',
            url: '/?action=add-plant',
          },
        ],
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
})
