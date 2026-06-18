import { useState, useEffect, useRef } from 'react';
import { Settings, MapPin, Calendar, Layers, ArrowRight, ShieldCheck, Heart, Sparkles, Database } from 'lucide-react';
import TextInertia from './TextInertia';


export default function GlassUI() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    const sec = sectionRef.current;
    if (!card || !sec) return;

    const coarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches;
    if (coarse) return;

    const handleMouseMove = (e: MouseEvent) => {
      const r = sec.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        const mx = e.clientX;
        const my = e.clientY;
        const ox = (mx - window.innerWidth / 2) / window.innerWidth;
        const oy = (my - window.innerHeight / 2) / window.innerHeight;
        card.style.transform = `translate(${ox * 12}px, ${oy * 10}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const solutions = [
    {
      name: 'DataHealth',
      desc: 'Powerful digital health management solution.',
      tag: 'HEALTHCARE',
      color: '#35b0a2', // Teal
      bgLight: 'rgba(53, 176, 162, 0.08)',
      icon: <Heart size={20} />,
      metric: '99.8% Diagnosis Accuracy',
      features: ['Real-time vitals monitoring', 'Predictive risk assessment alerts', 'EHR HL7 interoperability'],
      visual: (
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#35b0a2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#35b0a2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 60 L 40 60 L 55 20 L 70 85 L 85 55 L 100 62 L 115 15 L 130 90 L 145 60 L 200 60" fill="none" stroke="#35b0a2" strokeWidth="2.5" />
          <path d="M 0 60 L 40 60 L 55 20 L 70 85 L 85 55 L 100 62 L 115 15 L 130 90 L 145 60 L 200 60 L 200 100 L 0 100 Z" fill="url(#tealGrad)" />
          <circle cx="115" cy="15" r="4" fill="#35b0a2" className="animate-ping" />
        </svg>
      )
    },
    {
      name: 'AutoCare 360',
      desc: 'Smart digital platform built for garages.',
      tag: 'AUTOMOTIVE',
      color: '#0f75bc', // Blue
      bgLight: 'rgba(15, 117, 188, 0.08)',
      icon: <Settings size={20} />,
      metric: '14.2x Booking Speedup',
      features: ['OBD2 diagnostic synchronization', 'Automated mechanic dispatching', 'Dynamic parts inventory levels'],
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-dashed border-[#0f75bc]/30 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
            <Settings size={32} className="text-[#0f75bc]" />
          </div>
          <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-[#0f75bc] animate-ping" />
        </div>
      )
    },
    {
      name: 'ParkEazy',
      desc: 'Smart parking management solution.',
      tag: 'SMART CITY',
      color: '#e25b83', // Magenta
      bgLight: 'rgba(226, 91, 131, 0.08)',
      icon: <MapPin size={20} />,
      metric: '99.4% Spot Occupancy Sync',
      features: ['Automated license recognition', 'Real-time sensor map feeds', 'Instant digital wallet payout'],
      visual: (
        <div className="w-full h-full grid grid-cols-3 gap-2 p-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`rounded border flex flex-col items-center justify-center p-1.5 transition-all duration-300 ${i === 3 || i === 5 ? 'border-emerald-200 bg-emerald-50 text-emerald-600' : 'border-rose-200 bg-rose-50 text-rose-600'}`}>
              <span className="text-[10px] font-bold">P{i}</span>
              <span className="text-[8px] uppercase tracking-wider">{i === 3 || i === 5 ? 'Free' : 'Busy'}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      name: 'Attendix',
      desc: 'Smart attendance management solution.',
      tag: 'ENTERPRISE',
      color: '#7c3aed', // Purple
      bgLight: 'rgba(124, 58, 237, 0.08)',
      icon: <Calendar size={20} />,
      metric: '100% Payroll Compliance',
      features: ['Biometric checkin interface', 'Geo-fencing boundary guard', 'Shift rotation patterns planner'],
      visual: (
        <div className="w-full h-full flex flex-col gap-2 p-3 justify-center">
          <div className="flex justify-between items-center bg-white/60 p-2 rounded border border-purple-100">
            <span className="text-xs font-bold text-slate-700">Sarah Connor</span>
            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">CHECKED IN</span>
          </div>
          <div className="flex justify-between items-center bg-white/60 p-2 rounded border border-purple-100">
            <span className="text-xs font-bold text-slate-700">John Miller</span>
            <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">ON LEAVE</span>
          </div>
        </div>
      )
    },
    {
      name: 'AssetPro',
      desc: 'Next-generation Asset Management system.',
      tag: 'FINANCIALS',
      color: '#f97316', // Orange
      bgLight: 'rgba(249, 115, 22, 0.08)',
      icon: <Layers size={20} />,
      metric: '$4.2M Assets tracked',
      features: ['Zero-friction depreciation calculations', 'Real-time location tags', 'Preventive hardware audit planner'],
      visual: (
        <div className="w-full h-full flex items-center justify-center gap-3 p-3">
          <div className="flex flex-col items-center bg-orange-50 border border-orange-200 rounded p-2 min-w-[70px]">
            <Database size={16} className="text-orange-500" />
            <span className="text-[9px] text-slate-400 mt-1">Servers</span>
            <span className="text-xs font-bold text-orange-600">2,400</span>
          </div>
          <div className="flex flex-col items-center bg-indigo-50 border border-indigo-200 rounded p-2 min-w-[70px]">
            <Sparkles size={16} className="text-indigo-500" />
            <span className="text-[9px] text-slate-400 mt-1">Devices</span>
            <span className="text-xs font-bold text-indigo-600">9,820</span>
          </div>
        </div>
      )
    },
  ];

  return (
    <section
      id="glass"
      ref={sectionRef}
      data-idx="Solutions"
      data-fluid='{"CURL":13,"SPLAT_FORCE":3000,"BLOOM_INTENSITY":0.85,"DENSITY_DISSIPATION":0.78,"palette":"steel"}'
      className="py-24 bg-gradient-to-b from-[#EFF6FF]/40 to-[#F8FAFC]"
    >
      <div className="wrap">
        <div className="glassCard reveal w-full overflow-hidden" id="glassCard" ref={cardRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Column: Solutions List */}
            <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0">
              <div>
                {/* <div className="eyebrow">Our Solutions</div> */}
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#102B72] leading-[1.05] mt-4 mb-6">
                  Curated for{' '}
                  <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent">
                    Your Growth
                  </span>
                </h2>
                <TextInertia
                  text="We design, build, and deploy custom products that resolve operational friction. Select a solution to explore metrics:"
                  className="text-slate-500 text-sm sm:text-base mt-3 mb-6 text-left justify-start"
                />

                {/* Vertical interactive list */}
                <div className="flex flex-col gap-3.5">
                  {solutions.map((sol, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveIdx(idx)}
                        className={`group p-4 rounded-xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${isActive ? 'bg-[#102B72]/5 border-[#102B72]/20 shadow-sm translate-x-1' : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white shadow-md' : 'bg-slate-100 group-hover:bg-white shadow-none'}`} style={{ color: sol.color }}>
                            {sol.icon}
                          </div>
                          <div>
                            <div className="font-bold text-sm sm:text-base text-[#102B72]">{sol.name}</div>
                            <TextInertia text={sol.desc} className="text-xs text-slate-400 mt-0.5 text-left justify-start" />
                          </div>
                        </div>
                        <ArrowRight size={16} className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-[#102B72]' : 'opacity-0 -translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Interactive Glass Details Card */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center relative py-4 pl-0 lg:pl-4">
              <div className="w-full h-full min-h-[380px] bg-white/70 border border-white/60 shadow-[0_20px_50px_rgba(16,43,114,0.06)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 hover:shadow-[0_25px_60px_rgba(16,43,114,0.1)]">
                <div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-bold tracking-widest text-white px-2.5 py-1 rounded-full uppercase" style={{ backgroundColor: solutions[activeIdx].color }}>
                      {solutions[activeIdx].tag}
                    </span>
                    <span className="text-xs font-bold font-mono" style={{ color: solutions[activeIdx].color }}>
                      {solutions[activeIdx].metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-5 text-[#102B72] tracking-tight">{solutions[activeIdx].name}</h3>
                  <TextInertia text={solutions[activeIdx].desc} className="text-slate-500 text-xs mt-2.5 leading-relaxed text-left justify-start" />

                  <div className="mt-5 space-y-2.5">
                    {solutions[activeIdx].features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2.5">
                        <ShieldCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Visual Showcase Area */}
                <div className="mt-6 border border-slate-100/80 rounded-xl bg-slate-50/50 w-full h-[120px] overflow-hidden flex items-center justify-center">
                  {solutions[activeIdx].visual}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
