import { useEffect, useRef } from 'react';

export default function CTA() {
  const btn1Ref = useRef<HTMLAnchorElement | null>(null);
  const btn2Ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const coarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches;
    if (coarse) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });

    let animId = 0;
    const updateMagnets = () => {
      [btn1Ref.current, btn2Ref.current].forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const ddx = mx - cx;
        const ddy = my - cy;
        const dist = Math.hypot(ddx, ddy);

        if (dist < r.width * 0.9) {
          el.style.transform = `translate(${ddx * 0.26}px, ${ddy * 0.36}px)`;
        } else {
          el.style.transform = '';
        }
      });
      animId = requestAnimationFrame(updateMagnets);
    };

    animId = requestAnimationFrame(updateMagnets);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="cta"
      data-idx="Consult"
      data-fluid='{"CURL":24,"SPLAT_FORCE":5000,"BLOOM_INTENSITY":1.15,"DENSITY_DISSIPATION":0.72,"palette":"ink"}'
    >
      <div className="wrap">
        {/* <div className="eyebrow reveal" style={{ justifyContent: 'center', marginBottom: '28px' }}>
          Build with Data Apps
        </div> */}
        <h2>
          <span className="mask">
            <span style={{ '--d': '0s' } as any}>Let's Build Something</span>
          </span>
          <span className="mask">
            <span style={{ '--d': '0.07s' } as any}>
              Meaningful <span className="d">Together.</span>
            </span>
          </span>
        </h2>
        <div className="btns reveal">
          <a href="#touch" className="btn" ref={btn1Ref} data-magnetic="true">
            <span>Get in touch</span>
          </a>
          <a href="#reveal" className="btn ghost" ref={btn2Ref} data-magnetic="true">
            <span>Explore services</span>
          </a>
        </div>
      </div>
    </section>
  );
}
