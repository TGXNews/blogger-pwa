import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'TGX News',
  shortName: 'TGXNews',
  description: 'Good News From Trenggalek',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'About',
      shortName: 'About',
      description: 'Pelajari tentang kami',
      url: 'https://www.tgxnews.com/p/tentang-kami.html',
    },
    {
      name: 'Contact',
      shortName: 'Contact',
      description: 'Hubuungi Kami.',
      url: 'https://www.tgxnews.com/p/kontak.html',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'e279635a-5310-4095-adfa-98c5629d17ab',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
