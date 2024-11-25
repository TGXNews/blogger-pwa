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
  orientation: 'portrait',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Shortcut 1',
      shortName: 'Shortcut 1',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
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
