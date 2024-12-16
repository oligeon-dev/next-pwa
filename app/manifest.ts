import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/142.png',
        sizes: '142x142',
        type: 'image/png',
      },
      {
        src: '/144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
