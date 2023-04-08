import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/tasks-lister-vue/" : "/",
};


export default defineConfig({
  plugins: [vue()],
});
