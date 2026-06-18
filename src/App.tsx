import { useEffect, useRef, useState } from 'react';
import GlowBackground from './components/GlowBackground';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import TrueFocus from './components/TrueFocus';
import Tension from './components/Tension';
import type { TensionRef } from './components/Tension';
import Pipeline from './components/Pipeline';
import type { PipelineRef } from './components/Pipeline';
import Specs from './components/Specs';
import GlassUI from './components/GlassUI';
import DirectEngine from './components/DirectEngine';
import type { DirectEngineRef } from './components/DirectEngine';
import Embed from './components/Embed';
import Touch from './components/Touch';
// import Manifesto from './components/Manifesto';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
  const [activeIndex, setActiveIndex] = useState('');
  const [hideIndex, setHideIndex] = useState(false);

  const tensionRef = useRef<TensionRef | null>(null);
  const pipelineRef = useRef<PipelineRef | null>(null);
  const directEngineRef = useRef<DirectEngineRef | null>(null);

  const progRef = useRef<HTMLDivElement | null>(null);

  // Preloader complete handler
  const handlePreloaderComplete = () => {
    // Trigger hero entrance reveals (faster timing)
    const heroElements = document.querySelectorAll('#hero .reveal, #hero .fade, #hero .mask, #hero .clipUp');
    heroElements.forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 40 + i * 35);
    });

    const heroSection = document.getElementById('hero');
    if (heroSection) heroSection.classList.add('huddle');
  };

  useEffect(() => {
    // Generate navigation rail index items
    const sectionsWithIdx = Array.from(document.querySelectorAll('section[data-idx]')).map((s) => ({
      id: s.id,
      label: s.getAttribute('data-idx') || '',
    })).filter((s) => s.label);

    setSections(sectionsWithIdx);

    // Stagger delays for words inside manifesto and CTA h2
    const lines = document.querySelectorAll('#manifesto .line, #cta h2');
    lines.forEach((line) => {
      const words = line.querySelectorAll('.word');
      words.forEach((w, i) => {
        (w as HTMLElement).style.setProperty('--d', i * 0.07 + 's');
      });
    });

    // Reveal on scroll elements list
    let revealEls = Array.from(
      document.querySelectorAll('.reveal, .fade, .clipUp, .mask, .word')
    ).filter((el) => !el.closest('#hero'));

    function revealStep() {
      if (!revealEls.length) return;
      const trigger = window.innerHeight * 0.86;
      revealEls = revealEls.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < trigger && r.bottom > 0) {
          el.classList.add('in');
          return false;
        }
        return true;
      });
    }

    const pins = {
      tension: document.getElementById('tension'),
      reveal: document.getElementById('reveal'),
      direct: document.getElementById('direct'),
    };

    function pinProgress(sec: HTMLElement | null) {
      if (!sec) return 0;
      const r = sec.getBoundingClientRect();
      const progress = -r.top / (r.height - window.innerHeight);
      return Math.max(0, Math.min(1, progress));
    }

    let isRunning = true;
    function tick() {
      if (!isRunning) return;

      revealStep();

      const sy = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      // Update scroll progress bar
      if (progRef.current) {
        const pct = Math.max(0, Math.min(1, sy / (docH || 1))) * 100;
        progRef.current.style.width = pct + '%';
      }

      // Update pinned sections scroll animations
      if (tensionRef.current) {
        tensionRef.current.update(pinProgress(pins.tension));
      }

      const rP = pinProgress(pins.reveal);
      if (pipelineRef.current) {
        pipelineRef.current.update(rP);
      }

      // Hide index rail during the horizontal stage layout pin to prevent overlaps
      setHideIndex(rP > 0.01 && rP < 0.99);

      const dP = pinProgress(pins.direct);
      if (directEngineRef.current) {
        directEngineRef.current.update(dP);
      }

      // Determine active section for nav index rail
      const center = window.innerHeight / 2;
      let activeSec: HTMLElement | null = null;
      let best = 1e9;

      const idxSections = Array.from(document.querySelectorAll('section[data-idx]')) as HTMLElement[];
      idxSections.forEach((s) => {
        const r = s.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const d = Math.abs(c - center);
        if (r.top < center && r.bottom > center) {
          if (d < best) {
            best = d;
            activeSec = s;
          }
        }
      });

      if (activeSec) {
        setActiveIndex((activeSec as HTMLElement).id);
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    const handleResize = () => {
      if (pipelineRef.current && pins.reveal) {
        pipelineRef.current.update(pinProgress(pins.reveal));
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isRunning = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-[#102B72] antialiased">
      {/* Moving Custom Gradient Mesh Background */}
      <GlowBackground />

      {/* Progress & Index */}
      <div id="prog" ref={progRef}></div>
      <div id="idx" className={`${hideIndex ? 'hide' : ''}`}>
        {sections.map((sec) => (
          <div
            key={sec.id}
            className={`it ${activeIndex === sec.id ? 'on' : ''}`}
            onClick={() => {
              const el = document.getElementById(sec.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="lab">{sec.label}</span>
            <span className="pip"></span>
          </div>
        ))}
      </div>

      {/* Loader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Showcase />
        <TrueFocus sentence="Real-time. Reactive. Alive." />
        <Tension ref={tensionRef} />
        <Pipeline ref={pipelineRef} />
        <Specs />
        <GlassUI />
        <DirectEngine ref={directEngineRef} />
        <Embed />
        <Touch />

        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
