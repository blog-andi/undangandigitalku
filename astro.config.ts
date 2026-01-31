import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://undangandigitalpekanbaru.web.id',
  output: 'static',

  // PERBAIKAN DI SINI: Kita pakai adapter cloudflare standar tanpa memaksa imageService eksternal
  adapter: cloudflare(),

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template', 'gallery', 'approval', 'document', 'advertising',
          'currency-exchange', 'voice-presentation', 'business-contact',
          'database',
        ],
      },
    }),
    compress({
      CSS: true,
      HTML: { 'html-minifier-terser': { removeAttributeQuotes: false } },
      Image: false, // Biarkan Astro yang urus gambar
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({ config: './src/config.yaml' }),
  ],

  image: {
    // PERBAIKAN DI SINI: Gunakan 'sharp' (standar Astro) agar gambar diproses saat build, bukan saat runtime
    service: { entrypoint: 'astro/assets/services/sharp' },
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});