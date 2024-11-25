/**
 * This is auto generated metadata file, generated at: Mon Nov 25 2024 07:47:19 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
    serviceWorker: {
      source: string;
      scope: string;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"TGXNews/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"e279635a-5310-4095-adfa-98c5629d17ab","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"SrheX4o41uQGc-s46i9Pr"}}',
) as Metadata;
