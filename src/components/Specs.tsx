import { useEffect, useRef, useState } from 'react';
import { Globe, CheckCircle, Users } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function Specs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState({ locations: 0, projects: 0, staffing: 0 });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            triggerCountUps();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    function triggerCountUps() {
      const start = performance.now();
      const dur = 1400;

      function tick(now: number) {
        const k = Math.max(0, Math.min(1, (now - start) / dur));
        const e = 1 - Math.pow(1 - k, 3);
        setCounts({
          locations: Math.round(e * 1),
          projects: Math.round(e * 10),
          staffing: Math.round(e * 19)
        });

        if (k < 1) {
          animId = requestAnimationFrame(tick);
        }
      }
      animId = requestAnimationFrame(tick);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="spec"
      data-idx="Metrics"
      ref={containerRef}
      data-fluid='{"CURL":15,"SPLAT_FORCE":3200,"BLOOM_INTENSITY":0.7,"DENSITY_DISSIPATION":0.76,"palette":"steel"}'
    >
      <div className="wrap">
        {/* <div className="eyebrow reveal in hidden" style={{ marginBottom: '24px' }}>Our metrics</div> */}
        <h2 className="reveal in text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#102B72] leading-[1.05] mt-4 mb-12">
          Proven <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent">Track Record</span>
        </h2>

        <div className="metrics-grid">
          {/* Card 1: Global Locations */}
          <BorderGlow
            glowColor="207 90 54"
            colors={['#3b82f6', '#60a5fa', '#0f75bc']}
            borderRadius={24}
            glowRadius={35}
            glowIntensity={0.8}
            backgroundColor="rgba(255, 255, 255, 0.45)"
            className={`metric-card card-blue ${inView ? 'in' : ''}`}
          >
            <div className="card-header">
              <div className="card-icon">
                <Globe size={20} />
              </div>
              <span className="status-dot animate-pulse"></span>
            </div>
            <div className="num">
              {counts.locations}<span className="u">+</span>
            </div>
            <div className="cap">Global Locations</div>
            <p className="card-desc">Deploying distributed cluster solutions and serverless logic setups across global regions.</p>
            <div className="barwrap"><i></i></div>
          </BorderGlow>

          {/* Card 2: Successful Projects */}
          <BorderGlow
            glowColor="174 60 50"
            colors={['#14b8a6', '#2dd4bf', '#35b0a2']}
            borderRadius={24}
            glowRadius={35}
            glowIntensity={0.8}
            backgroundColor="rgba(255, 255, 255, 0.45)"
            className={`metric-card card-teal ${inView ? 'in' : ''}`}
          >
            <div className="card-header">
              <div className="card-icon">
                <CheckCircle size={20} />
              </div>
              <span className="status-dot animate-pulse"></span>
            </div>
            <div className="num">
              {counts.projects}<span className="u">+</span>
            </div>
            <div className="cap">Successful Projects</div>
            <p className="card-desc">Delivering high-load analytics dashboards, custom platforms, and robust enterprise applications.</p>
            <div className="barwrap"><i></i></div>
          </BorderGlow>

          {/* Card 3: Skilled IT Professionals */}
          <BorderGlow
            glowColor="340 75 60"
            colors={['#ec4899', '#f472b6', '#e25b83']}
            borderRadius={24}
            glowRadius={35}
            glowIntensity={0.8}
            backgroundColor="rgba(255, 255, 255, 0.45)"
            className={`metric-card card-magenta ${inView ? 'in' : ''}`}
          >
            <div className="card-header">
              <div className="card-icon">
                <Users size={20} />
              </div>
              <span className="status-dot animate-pulse"></span>
            </div>
            <div className="num">
              {counts.staffing}<span className="u">+</span>
            </div>
            <div className="cap">Skilled IT Professionals</div>
            <p className="card-desc">Staffed with senior architects, React designers, and dedicated DevOps integration engineers.</p>
            <div className="barwrap"><i></i></div>
          </BorderGlow>
        </div>
      </div>

      <div className="marq-container">
        <div className="marq">
          <div className="track">
            <span>
              DATA APPS <span className="o">&middot;</span> Innovative Apps and Analytics <span className="o">&middot;</span> Custom Web Development <span className="o">&middot;</span> Enterprise Solutions <span className="o">&middot;</span> DevOps Engineers <span className="o">&middot;</span> UX/UI Design <span className="o">&middot;</span> AI Development <span className="o">&middot;</span>&nbsp;
            </span>
            <span>
              DATA APPS <span className="o">&middot;</span> Innovative Apps and Analytics <span className="o">&middot;</span> Custom Web Development <span className="o">&middot;</span> Enterprise Solutions <span className="o">&middot;</span> DevOps Engineers <span className="o">&middot;</span> UX/UI Design <span className="o">&middot;</span> AI Development <span className="o">&middot;</span>&nbsp;
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
