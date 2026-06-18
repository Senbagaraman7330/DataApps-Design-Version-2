import { useEffect, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (preRef.current) preRef.current.classList.add('gone');
      onComplete();
      return;
    }

    let p = 0;
    const start = performance.now();
    const dur = 2100;
    let frameId = 0;

    function tick(now: number) {
      const t = Math.max(0, Math.min(1, (now - start) / dur));
      const e = 1 - Math.pow(1 - t, 2.2);
      p = Math.round(e * 100);

      if (countRef.current) {
        countRef.current.textContent = String(p);
      }
      if (barRef.current) {
        barRef.current.style.width = (e * 100) + '%';
      }

      if (t < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          if (preRef.current) {
            preRef.current.classList.add('gone');
          }
          onComplete();
        }, 260);
      }
    }

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [onComplete]);

  return (
    <div id="pre" ref={preRef}>
      <div id="preCount" ref={countRef}>0</div>
      <div id="preWord">Real-time<br />Rendered live</div>
      <div id="preBar"><i ref={barRef}></i></div>
    </div>
  );
}
