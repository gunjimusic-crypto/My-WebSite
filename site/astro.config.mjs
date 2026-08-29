import { defineConfig } from 'astro/config';

// Static site. Language routing is handled manually via /src/pages/[lang]/,
// with the root (/) doing a client-side redirect based on the visitor's browser language.
export default defineConfig({
  site: 'https://nari-aki.com',
  build: { format: 'directory' }
});
