// vite.config.js

const { resolve } = require('path');
const { defineConfig } = require('vite');
const { createVuePlugin } = require('vite-plugin-vue');
const { viteAlias } = require('vite-plugin-alias');
console.log('vite.config.js');
module.exports = defineConfig({
  plugins: [
    createVuePlugin(),
    viteAlias({
      // Define your aliases here
      '@': resolve(__dirname, '/src'),
      '@components': resolve(__dirname, '/src/components'),
      '@views': resolve(__dirname, '/src/views'),
    }),
  ],
});
