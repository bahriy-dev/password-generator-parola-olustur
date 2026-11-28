'use client';
/**
 * DevControl usage analytics: page views plus a few product events (generate → copy). Events carry only settings
 * such as mode and length — never a password, passphrase, PIN or any tool input or result.
 * Nothing loads or is sent until the visitor accepts in the consent banner; withdrawing stops it immediately.
 */
import { DEVCONTROL_KEY, DEVCONTROL_ORIGIN } from '@/lib/analytics';

type Dca = (...args: unknown[]) => void;
declare global { interface Window { dca?: Dca; dcq?: unknown[] } }

export function loadDevControl() {
  if (!DEVCONTROL_KEY || typeof window === 'undefined') return;
  if (!window.dca) {
    window.dcq = window.dcq || [];
    window.dca = function dca(...args: unknown[]) { window.dcq!.push(args); };
    const script = document.createElement('script');
    script.async = true;
    script.src = `${DEVCONTROL_ORIGIN}/a/t.js`;
    script.dataset.key = DEVCONTROL_KEY;
    script.dataset.endpoint = `${DEVCONTROL_ORIGIN}/api/a/collect`;
    document.head.appendChild(script);
  }
  window.dca('consent', true);
}

/** Withdraws consent: the tracker stops, drops its unsent queue and forgets its session id. */
export function stopDevControl() {
  window.dca?.('consent', false);
}

/** Sends a product event if analytics is active; a no-op otherwise. Never throws. */
export function track(name: string, props?: Record<string, string | number | boolean>) {
  try { window.dca?.('track', name, props ?? {}); } catch { /* analytics must never break the tool */ }
}
