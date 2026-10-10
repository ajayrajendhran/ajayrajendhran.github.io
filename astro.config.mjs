import { defineConfig } from 'astro/config';

// SITE and BASE are set by the GitHub Actions workflow.
// For a repo named <username>.github.io, BASE stays "/".
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
});
