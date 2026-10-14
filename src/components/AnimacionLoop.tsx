'use client';

import { useEffect, useRef } from 'react';

/**
 * Una animación del curso como video en loop. Los videos salen del grabador de
 * la app (`juego/reels/grabar.mjs --solo`); acá sólo se reproducen mientras se
 * ven, para no gastar datos ni batería con los que quedaron fuera de pantalla.
 */
export function AnimacionLoop({ id, titulo }: { id: string; titulo: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={`/videos/${id}.mp4`}
      poster={`/videos/${id}.jpg`}
      width={880}
      height={640}
      muted
      loop
      playsInline
      preload="none"
      aria-label={titulo}
      className="block w-full h-auto rounded-[24px]"
    />
  );
}
