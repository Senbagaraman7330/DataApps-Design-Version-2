import { useEffect, useRef, useState } from 'react';

export default function TechRhythm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 52, y: 0, z: -30 });

  const [metrics, setMetrics] = useState({
    successRate: 99.98,
    responseTime: 124,
    availability: 99.9,
    throughput: 842,
    status: 'OPTIMAL'
  });

  // Smooth mouse tilt parallax
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let reqId: number;
    let cx = 52;
    let cy = 0;
    let cz = -30;
    let tx = 52;
    let tz = -30;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      // Map mouse coordinates to 3D rotation limits
      tx = 52 - y * 28; // tilt X
      tz = -30 + x * 28; // spin Z
    };

    const handleMouseLeave = () => {
      tx = 52;
      tz = -30;
    };

    const animate = () => {
      cx += (tx - cx) * 0.1;
      cz += (tz - cz) * 0.1;
      setRotate({ x: cx, y: cy, z: cz });
      reqId = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(reqId);
    };
  }, []);

  // Telemetry updates for custom software & database metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(() => ({
        successRate: parseFloat((99.94 + Math.random() * 0.05).toFixed(2)),
        responseTime: Math.floor(115 + Math.random() * 18),
        availability: 99.9,
        throughput: Math.floor(810 + Math.random() * 55),
        status: Math.random() > 0.85 ? 'DEPLOYING' : 'OPTIMAL'
      }));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[340px] sm:h-[450px] md:h-[620px] max-w-[560px] overflow-visible flex items-center justify-center select-none"
      style={{ perspective: '1400px' }}
    >
      {/* Scale container based on viewport width to prevent mobile overflow */}
      <div className="tech-rhythm-scale flex items-center justify-center w-[270px] h-[270px] sm:w-[410px] sm:h-[410px]">
        {/* 3D Transform Wrapper */}
        <div
          className="relative w-[410px] h-[410px] transition-transform duration-100 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg)`
          }}
        >
          
          {/* Layer 0: Glowing Isometric Grid Base */}
          <div 
            className="absolute inset-0 rounded-[32px] border-2 border-[#35b0a2]/30 flex items-center justify-center"
            style={{
              transform: 'translateZ(-90px)',
              background: 'radial-gradient(circle, rgba(53,176,162,0.08) 10%, transparent 80%)',
              boxShadow: '0 0 50px rgba(53,176,162,0.15), inset 0 0 40px rgba(53,176,162,0.06)'
            }}
          >
            {/* Isometric grid texture overlay */}
            <div 
              className="absolute inset-4 rounded-[24px] opacity-25"
              style={{
                backgroundImage: 'linear-gradient(rgba(53,176,162,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(53,176,162,0.4) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
            {/* Animated data pipeline connection ring */}
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#35b0a2]/30 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute w-44 h-44 rounded-full border border-[#35b0a2]/15" />
          </div>
  
          {/* Laser Pipeline Connector Columns (Vertical lines passing through layers) */}
          <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            {/* Main vertical data conduit */}
            <div 
              className="absolute left-[25%] top-[25%] w-[1.8px] h-[280px] bg-gradient-to-t from-blue-500/0 via-blue-500/80 to-teal-400/0"
              style={{ transform: 'rotateX(-90deg) translateZ(140px)' }}
            />
            <div 
              className="absolute right-[22%] top-[22%] w-[1.8px] h-[280px] bg-gradient-to-t from-magenta-500/0 via-[#e25b83]/80 to-purple-500/0"
              style={{ transform: 'rotateX(-90deg) translateZ(140px)' }}
            />
            <div 
              className="absolute left-[52%] bottom-[25%] w-[1.8px] h-[280px] bg-gradient-to-t from-teal-500/0 via-[#35b0a2]/80 to-blue-500/0"
              style={{ transform: 'rotateX(-90deg) translateZ(140px)' }}
            />
          </div>
  
          {/* Layer 1: Bottom Card - Systems Architecture Nodes */}
          <div
            className="absolute inset-0 rounded-[32px] bg-white/75 border border-[#102B72]/8 backdrop-blur-md p-6 flex flex-col justify-between"
            style={{
              transform: 'translateZ(-30px)',
              boxShadow: '0 15px 45px rgba(16,43,114,0.05), inset 0 1px 1px rgba(255,255,255,0.85)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Layer 01 // SYSTEM ARCHITECTURE</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            </div>
            
            {/* Service connections mapping */}
            <div className="relative w-full h-28 bg-[#102B72]/[0.02] rounded-2xl border border-[#102B72]/5 overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full opacity-85 px-4" viewBox="0 0 240 80">
                {/* Connection paths */}
                <path d="M30 20 L100 40" fill="none" stroke="rgba(15, 117, 188, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M30 40 L100 40" fill="none" stroke="rgba(53, 176, 162, 0.25)" strokeWidth="1.5" />
                <path d="M30 60 L100 40" fill="none" stroke="rgba(226, 91, 131, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M100 40 L180 25" fill="none" stroke="rgba(15, 117, 188, 0.4)" strokeWidth="2" />
                <path d="M100 40 L180 55" fill="none" stroke="rgba(53, 176, 162, 0.4)" strokeWidth="2" />
                
                {/* Channel nodes */}
                <circle cx="30" cy="20" r="4" fill="#0f75bc" />
                <text x="38" y="23" fontSize="8" fill="#102B72" fontWeight="bold">Web Apps</text>
                
                <circle cx="30" cy="40" r="4" fill="#35b0a2" />
                <text x="38" y="43" fontSize="8" fill="#102B72" fontWeight="bold">Mobile App</text>
                
                <circle cx="30" cy="60" r="4" fill="#e25b83" />
                <text x="38" y="63" fontSize="8" fill="#102B72" fontWeight="bold">AI Engine</text>
                
                <circle cx="100" cy="40" r="6" fill="#102B72" />
                <text x="88" y="54" fontSize="8" fill="#102B72" fontWeight="bold">Cloud DB</text>
                
                {/* Outcome nodes */}
                <circle cx="180" cy="25" r="5" fill="#0f75bc" />
                <text x="190" y="28" fontSize="8" fill="#102B72">APIs</text>
                
                <circle cx="180" cy="55" r="5" fill="#35b0a2" />
                <text x="190" y="58" fontSize="8" fill="#102B72">Data Systems</text>
              </svg>
            </div>
  
            <div className="flex justify-between items-end text-[10px] font-mono text-slate-500">
              <span>ACTIVE PIPELINES: 12/12</span>
              <span className="text-[#35b0a2] font-bold">CONNECTED</span>
            </div>
          </div>
  
          {/* Layer 2: Middle Card - Realtime Performance Analytics Chart */}
          <div
            className="absolute inset-5 rounded-[32px] bg-white/80 border border-[#102B72]/10 backdrop-blur-md p-6 flex flex-col justify-between"
            style={{
              transform: 'translateZ(40px)',
              boxShadow: '0 20px 50px rgba(16,43,114,0.07), inset 0 1px 1px rgba(255,255,255,0.95)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Layer 02 // ENGINE PERFORMANCE</span>
              <span className="text-[9px] font-bold font-mono px-2.5 py-0.5 bg-[#e25b83]/10 border border-[#e25b83]/20 rounded-md text-[#e25b83]">REALTIME</span>
            </div>
  
            {/* Bar Chart Mockup representing API requests/queries load */}
            <div className="flex items-end justify-between gap-2 h-20 px-2">
              {[45, 62, 55, 70, 50, 90, 65, 80, 55, 75].map((val, idx) => (
                <div key={idx} className="flex-1 bg-[#102B72]/5 rounded-sm overflow-hidden h-full flex items-end">
                  <div 
                    className="w-full bg-gradient-to-t from-[#0f75bc] to-[#35b0a2] rounded-sm transition-all duration-1000"
                    style={{ 
                      height: `${val}%`,
                      animation: `pulseHeight 3s ease-in-out infinite alternate`,
                      animationDelay: `${idx * 0.15}s`
                    }} 
                  />
                </div>
              ))}
            </div>
  
            {/* Key Metric Inline */}
            <div className="flex justify-between items-center border-t border-slate-100 pt-2.5 text-[10px] font-mono text-slate-500">
              <span>AVG RESPONSE</span>
              <span className="text-[#0f75bc] font-bold">{metrics.responseTime} ms</span>
            </div>
          </div>
  
          {/* Layer 3: Top Card (Smallest, Floating HUD Panel) */}
          <div
            className="absolute left-10 right-10 top-10 bottom-10 rounded-[32px] bg-white/85 border border-[#102B72]/15 backdrop-blur-lg p-6 flex flex-col justify-between"
            style={{
              transform: 'translateZ(110px)',
              boxShadow: '0 30px 60px rgba(16,43,114,0.09), inset 0 1px 1.5px rgba(255,255,255,0.95)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Hub badge header */}
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono tracking-widest text-[#102B72] font-bold uppercase">SYSTEM STATUS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
  
            {/* Telemetry data readouts for Custom Software / Systems */}
            <div className="flex flex-col gap-3 my-1">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-mono text-slate-500">BUILD SUCCESS</span>
                <span className="text-base font-extrabold font-mono tracking-tight text-[#102B72]">{metrics.successRate}%</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-mono text-slate-500">THROUGHPUT</span>
                <span className="text-base font-extrabold font-mono tracking-tight text-[#35b0a2]">{metrics.throughput} <span className="text-[10px] font-normal text-slate-400">MB/s</span></span>
              </div>
            </div>
  
            {/* Footer Status */}
            <div className="flex justify-between items-center border-t border-slate-100 pt-2.5 text-[10px] font-mono">
              <span className="text-slate-500">ENGINE STATUS</span>
              <span className="text-emerald-600 font-bold tracking-wider">{metrics.status}</span>
            </div>
          </div>
  
        </div>
      </div>

      {/* Embedded CSS for height keyframe animations */}
      <style>{`
        @keyframes pulseHeight {
          0% { transform: scaleY(0.92); }
          100% { transform: scaleY(1.08); }
        }
      `}</style>
    </div>
  );
}
