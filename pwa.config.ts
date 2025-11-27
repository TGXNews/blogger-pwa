import type { Config } from './types';

export default {
  id: '/',
  name: 'TGX News',
  shortName: 'TGX',
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
      description: 'Halaman tentang kami',
      url: 'https://www.tgxnews.com/p/tentang-kami.html',
    },
    {
      name: 'Kontak',
      shortName: 'Kontak',
      description: 'Hubungi kami',
      url: 'https://www.tgxnews.com/p/kontak.html',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: true, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: '7e7c0c56-24e6-404a-97cc-60aeb46f3deb', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
