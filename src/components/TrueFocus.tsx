import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
}

export default function TrueFocus({
  sentence = "Real-time. Reactive. Alive.",
  manualMode = false,
  blurAmount = 5,
  borderColor = 'var(--blue)',
  glowColor = 'rgba(15, 117, 188, 0.4)'
}: TrueFocusProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = sentence.split(' ');
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Determine active target index based on hover override
  let targetIndex = activeIndex;
  const manual = hoveredIndex !== null;

  if (hoveredIndex !== null) {
    targetIndex = hoveredIndex;
  }

  const place = (i: number) => {
    const el = spansRef.current[i];
    const c = containerRef.current;
    const frame = frameRef.current;
    if (!el || !c || !frame) return;

    const pr = c.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    frame.style.transform = `translate(${r.left - pr.left}px, ${r.top - pr.top}px)`;
    frame.style.width = r.width + 'px';
    frame.style.height = r.height + 'px';
    frame.style.opacity = '1';
  };

  // Keep targetIndex placed after React finishes layout
  useLayoutEffect(() => {
    place(targetIndex);
  }, [targetIndex, words.length]);

  // Keep targetIndex placed when resizing or loading fonts
  useEffect(() => {
    const handleResize = () => {
      place(targetIndex);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        place(targetIndex);
      });
    }

    // Double-check with timeouts for layout transitions
    const t1 = setTimeout(() => place(targetIndex), 100);
    const t2 = setTimeout(() => place(targetIndex), 400);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [targetIndex, words.length]);

  // Handle intersection observer and auto-cycling interval
  useEffect(() => {
    let isIntersecting = false;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            place(targetIndex);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const interval = setInterval(() => {
      if (!isIntersecting || manual || manualMode) return;
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 1900);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [manual, manualMode, words.length, targetIndex]);

  const cornerStyle = {
    borderColor: borderColor,
    filter: `drop-shadow(0 0 6px ${glowColor})`
  };

  return (
    <section 
      id="focus" 
      data-idx="Focus" 
      data-fluid='{"CURL":10,"SPLAT_FORCE":2400,"BLOOM_INTENSITY":0.5,"DENSITY_DISSIPATION":0.82,"palette":"ash"}'
    >
      <div className="wrap">
        <div 
          className="focus-container" 
          id="trueFocus" 
          ref={containerRef}
          data-words={sentence}
        >
          <div className="focus-frame" ref={frameRef}>
            <span className="corner tlc" style={cornerStyle}></span>
            <span className="corner trc" style={cornerStyle}></span>
            <span className="corner blc" style={cornerStyle}></span>
            <span className="corner brc" style={cornerStyle}></span>
          </div>
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { spansRef.current[i] = el; }}
              className={`focus-word ${i === targetIndex ? 'active' : ''}`}
              style={{
                filter: i === targetIndex ? 'blur(0)' : `blur(${blurAmount}px)`
              }}
              onMouseEnter={() => {
                setHoveredIndex(i);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              {word}
            </span>
          ))}
        </div>
        
        <div className="sublabel reveal">Three words. One engine.</div>
      </div>
    </section>
  );
}
