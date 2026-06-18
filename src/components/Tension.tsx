import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface TensionRef {
  update: (progress: number) => void;
}

const Tension = forwardRef<TensionRef, {}>((_, ref) => {
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useImperativeHandle(ref, () => ({
    update(p: number) {
      const lines = lineRefs.current;
      const n = lines.length;
      lines.forEach((el, i) => {
        if (!el || !el.parentElement) return;
        const seg = Math.max(0, Math.min(1, p * (n + 0.5) - i));
        const e = 1 - Math.pow(1 - seg, 3);
        el.parentElement.style.transform = `translateY(${(1 - e) * 110}%)`;
        el.parentElement.style.opacity = String(0.15 + e * 0.85);
      });
    }
  }));

  return (
    <section 
      id="tension" 
      className="pin" 
      data-idx="Vision" 
      data-fluid='{"CURL":7,"SPLAT_FORCE":2400,"BLOOM_INTENSITY":0.4,"DENSITY_DISSIPATION":0.9,"palette":"ash"}' 
      style={{ height: '280vh' }}
    >
      <div className="pinStick">
        <div className="wrap">
          <div className="big" data-scrub-lines="true">
            <div className="ln" style={{ overflow: 'hidden' }}>
              <span ref={(el) => { lineRefs.current[0] = el; }} className="dim">We Help You</span>
            </div>
            <div className="ln" style={{ overflow: 'hidden' }}>
              <span ref={(el) => { lineRefs.current[1] = el; }} className="dim">Plan &amp;</span>
            </div>
            <div className="ln" style={{ overflow: 'hidden' }}>
              <span ref={(el) => { lineRefs.current[2] = el; }} className="s">Execute Ideas.</span>
            </div>
            <div className="ln" style={{ overflow: 'hidden', marginTop: '0.4em' }}>
              <span ref={(el) => { lineRefs.current[3] = el; }} className="g">Curated for Growth.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Tension.displayName = 'Tension';

export default Tension;
