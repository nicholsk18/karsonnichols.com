/// <reference types="astro/client" />

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  trackEvent: (eventName: string, eventParams?: Record<string, unknown>) => void;
}
