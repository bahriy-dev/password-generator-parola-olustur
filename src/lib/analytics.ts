/**
 * Third-party measurement, configured by environment variables at build time. Nothing is loaded unless an ID
 * is set AND the visitor accepts in the consent banner. Tool inputs and results are never sent: no events
 * carry them, URLs never contain them, and Meta's automatic event/field collection is switched off.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
/** When set, GA4 is loaded through this Tag Manager container (which holds the GA4 tag) instead of gtag.js directly. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';
/**
 * First-party usage analytics in DevControl (the owner's monitoring panel). The key is public (it only lets the
 * collector accept events for this site); the tracker sends nothing before consent and stores no cookies.
 */
export const DEVCONTROL_KEY = process.env.NEXT_PUBLIC_DEVCONTROL_KEY ?? '';
export const DEVCONTROL_ORIGIN = (process.env.NEXT_PUBLIC_DEVCONTROL_ORIGIN ?? 'https://devcontrol.up.railway.app').replace(/\/$/, '');
export const ANALYTICS_ENABLED = Boolean(GA_ID || GTM_ID || META_PIXEL_ID || DEVCONTROL_KEY);

export const CONSENT_KEY = 'parola_consent';
export type Consent = 'granted' | 'denied';

/** Extra CSP sources the trackers need; empty when none is configured. */
export function trackerCsp(): { script: string; connect: string; img: string } {
  const script: string[] = [], connect: string[] = [], img: string[] = [];
  if (GA_ID || GTM_ID) {
    script.push('https://www.googletagmanager.com');
    connect.push('https://*.google-analytics.com', 'https://*.analytics.google.com', 'https://*.googletagmanager.com');
    img.push('https://*.google-analytics.com', 'https://*.googletagmanager.com');
  }
  if (META_PIXEL_ID) {
    script.push('https://connect.facebook.net');
    connect.push('https://www.facebook.com', 'https://connect.facebook.net');
    img.push('https://www.facebook.com');
  }
  if (DEVCONTROL_KEY) {
    script.push(DEVCONTROL_ORIGIN);
    connect.push(DEVCONTROL_ORIGIN);
  }
  const join = (list: string[]) => (list.length ? ' ' + list.join(' ') : '');
  return { script: join(script), connect: join(connect), img: join(img) };
}
