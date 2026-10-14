'use client';

import { useEffect } from 'react';
import { APP_URL } from '@/lib/site';

/**
 * Lleva las UTM de la visita a los enlaces hacia la app. La app guarda por
 * dónde llegó cada alumno (su primera visita) para medir qué anuncio o canal
 * trae gente que se queda; sin esto, todo lo que entra por el landing llega a
 * la app como «landing» y se pierde la campaña.
 *
 * Si la visita no trae UTM, los enlaces llevan `utm_source=landing` para que
 * la app distinga a quien llegó desde acá.
 */
const CLAVE = 'tn-utm';

export function PasarUtm() {
  useEffect(() => {
    const aca = new URLSearchParams(window.location.search);
    let utm = new URLSearchParams();
    aca.forEach((v, k) => {
      if (k.startsWith('utm_')) utm.set(k, v);
    });
    // Las de la página de llegada valen para toda la visita, aunque después
    // pase por otras páginas del landing antes de ir a la app.
    try {
      if (utm.has('utm_source')) sessionStorage.setItem(CLAVE, utm.toString());
      else utm = new URLSearchParams(sessionStorage.getItem(CLAVE) ?? '');
    } catch {
      /* sin almacenamiento: se usan sólo las de esta página */
    }
    if (!utm.has('utm_source')) utm.set('utm_source', 'landing');
    document.querySelectorAll<HTMLAnchorElement>(`a[href^="${APP_URL}"]`).forEach((a) => {
      const url = new URL(a.href);
      utm.forEach((v, k) => {
        if (!url.searchParams.has(k)) url.searchParams.set(k, v);
      });
      a.href = url.toString();
    });
  }, []);
  return null;
}
