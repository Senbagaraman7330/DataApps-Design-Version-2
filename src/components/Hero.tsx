import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Database, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup Initial Schema States
      const baseLines = gsap.utils.toArray<SVGPathElement>('.schema-line');
      const glowLines = gsap.utils.toArray<SVGPathElement>('.schema-line-glow');

      baseLines.forEach(line => {
        const len = line.getTotalLength() || 300;
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.set('.node-group', { scale: 0, opacity: 0 });

      // Split text for heading animation
      if (headingRef.current) {
        const text = headingRef.current.innerText;
        headingRef.current.innerHTML = text.split(' ').map(word =>
          `<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1">
             <span class="reveal-word inline-block translate-y-full opacity-0">${word}</span>
           </span>`
        ).join(' ');
      }

      // Master Timeline triggered on Scroll
      const tlReveal = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero-heading',
          start: "top 85%",
        },
        defaults: { ease: "power4.out" }
      });

      // 1. Text & Layout Intro
      tlReveal.to('.reveal-word', {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.04, delay: 0.1
      })
        .to('#hero-sub', {
          opacity: 1, y: -10, duration: 1, ease: "power2.out"
        }, "-=0.8")
        .fromTo('#hero-visuals', {
          opacity: 0, y: 40
        }, {
          opacity: 1, y: 0, duration: 1.5, ease: "power3.out"
        }, "-=0.6")

        // 2. Schema Animation (Build Phase)
        .to('.node-group:not(.float-node)', {
          scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)"
        }, "-=0.2")
        .to(baseLines, {
          strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut", stagger: 0.15
        }, "-=0.4")
        .to('.float-node', {
          scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)", stagger: 0.1
        }, "-=0.8")
        .to('.schema-label', {
          opacity: 0.7, duration: 1, stagger: 0.1, ease: "power1.inOut"
        }, "-=0.4")

        // 3. Trigger Continuous Data Passing 
        .add(() => {
          glowLines.forEach((line, index) => {
            const len = line.getTotalLength() || 300;
            gsap.set(line, { strokeDasharray: `${len * 0.25} ${len}`, strokeDashoffset: 0, opacity: 0 });

            gsap.to(line, {
              strokeDashoffset: -len,
              opacity: 1,
              duration: 2.5,
              repeat: -1,
              delay: index * 0.4,
              ease: "power1.inOut"
            });
          });
        });

      // Particle System (Sparkles)
      if (particleContainerRef.current) {
        for (let i = 0; i < 45; i++) {
          const particle = document.createElement('div');
          particle.classList.add('absolute', 'rounded-full', 'bg-black');
          const size = Math.random() * 2.5 + 0.5;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 60 + 10}%`;
          if (Math.random() > 0.5) particle.style.filter = `blur(${Math.random() * 2}px)`;
          particleContainerRef.current.appendChild(particle);

          gsap.to(particle, {
            y: `-=${Math.random() * 150 + 50}`,
            x: `+=${(Math.random() - 0.5) * 50}`,
            opacity: 0,
            duration: Math.random() * 5 + 4,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "sine.inOut",
            onRepeat: () => {
              if (particle) {
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 60 + 20}%`;
              }
            }
          });

          gsap.to(particle, {
            opacity: Math.random() * 0.8 + 0.2, duration: Math.random() * 2 + 1, repeat: -1, yoyo: true, ease: "sine.inOut"
          });
        }
      }

      // Background Ambience
      gsap.to(['#beam-outer', '#beam-inner'], {
        opacity: () => gsap.utils.random(0.7, 1), duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.5
      });

      // Idle Hover Animations
      gsap.to('.float-node', {
        y: () => gsap.utils.random(-8, 8), x: () => gsap.utils.random(-4, 4), duration: () => gsap.utils.random(3, 5), repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2
      });
      gsap.to('.float-list-item', {
        y: () => gsap.utils.random(-3, 3), duration: () => gsap.utils.random(4, 6), repeat: -1, yoyo: true, ease: "sine.inOut"
      });
      gsap.to('#ring-1', {
        scale: 1, opacity: 0, duration: 4, repeat: -1, ease: "power1.out", delay: 1
      });
      gsap.to('#ring-2', {
        scale: 1, opacity: 0, duration: 4, delay: 3, repeat: -1, ease: "power1.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white text-slate-800 overflow-x-hidden antialiased font-sans min-h-screen relative flex flex-col justify-center">

      <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden z-0" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
        {/* Deep atmospheric bloom - Light mode adapted */}
        <div className="absolute top-[-20%] w-[1000px] h-[800px] rounded-[100%] opacity-20" style={{ background: 'radial-gradient(circle at center, rgba(15, 117, 188, 0.3) 0%, rgba(53, 176, 162, 0.1) 40%, transparent 70%)', filter: 'blur(100px)', transform: 'scaleX(1.5)' }}></div>

        {/* The main sweeping beam shape */}
        <svg className="absolute top-0 w-full max-w-[1200px] h-[800px] opacity-40" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flare-core" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#35b0a2" stopOpacity="0.4"></stop>
              <stop offset="30%" stopColor="#0f75bc" stopOpacity="0.2"></stop>
              <stop offset="80%" stopColor="#102B72" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="flare-edge" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="#0f75bc" stopOpacity="0.15"></stop>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>

          <path id="beam-outer" d="M480,0 Q480,300 0,800 L1000,800 Q520,300 520,0 Z" fill="url(#flare-edge)" style={{ filter: 'blur(40px)' }}></path>
          <path id="beam-inner" d="M495,0 Q495,200 250,800 L750,800 Q505,200 505,0 Z" fill="url(#flare-core)" style={{ filter: 'blur(20px)' }}></path>
        </svg>

        {/* Vertical light streaks within beam */}
        <div className="absolute top-0 w-[2px] h-[500px] opacity-30" style={{ background: 'linear-gradient(to bottom, #0f75bc, transparent)', filter: 'blur(1px)' }}></div>
        <div className="absolute top-0 ml-[-40px] w-[1px] h-[400px] opacity-15" style={{ background: 'linear-gradient(to bottom, #bae6fd, transparent)', filter: 'blur(2px)' }}></div>
        <div className="absolute top-0 ml-[40px] w-[1px] h-[450px] opacity-15" style={{ background: 'linear-gradient(to bottom, #7dd3fc, transparent)', filter: 'blur(2px)' }}></div>
      </div>

      <div id="particle-container" ref={particleContainerRef} className="absolute inset-0 pointer-events-none z-0"></div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center">
        {/* Badge */}
        <div className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8" style={{ background: 'linear-gradient(135deg, rgba(15, 117, 188, 0.3) 0%, rgba(15, 117, 188, 0.5) 50%, rgba(15, 117, 188, 0.1) 100%)' }}>
          <div className="bg-slate-50/90 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2 shadow-[0_0_20px_rgba(15,117,188,0.1)] border border-slate-200/50">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" style={{ boxShadow: '0 0 8px #2563eb' }}></div>
            <span className="text-xs font-medium tracking-wide text-slate-700">Networked intelligence, enhanced</span>
          </div>
        </div>

        {/* Headline */}
        <h1 id="hero-heading" ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#102B72] text-center max-w-4xl leading-[1.1]">
          Engineering Custom Software &amp; Advanced Analytics
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg md:text-xl text-slate-600 text-center max-w-2xl font-normal leading-relaxed opacity-0" id="hero-sub">
          We design, build, and scale high-performance enterprise applications, tailor-made software solutions, and intelligent data systems that drive business growth.
        </p>

        {/* Lower Visual Area: Schema Map & List UI */}
        <div className="mt-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" id="hero-visuals">

          {/* Left Side: Node Schema Visualization */}
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto flex items-center justify-center">

            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400" id="schema-svg">
              <defs>
                <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f75bc" stopOpacity="0"></stop>
                  <stop offset="50%" stopColor="#35b0a2" stopOpacity="0.8"></stop>
                  <stop offset="100%" stopColor="#102B72" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path className="schema-line" d="M250,200 C150,200 150,100 80,120" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5"></path>
              <path className="schema-line-glow" d="M250,200 C150,200 150,100 80,120" fill="none" stroke="url(#line-glow)" strokeWidth="2" style={{ opacity: 0 }}></path>

              <path className="schema-line" d="M250,200 C200,300 100,250 90,320" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5"></path>
              <path className="schema-line-glow" d="M250,200 C200,300 100,250 90,320" fill="none" stroke="url(#line-glow)" strokeWidth="2" style={{ opacity: 0 }}></path>

              <path className="schema-line" d="M250,200 C350,200 350,100 420,130" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5"></path>
              <path className="schema-line-glow" d="M250,200 C350,200 350,100 420,130" fill="none" stroke="url(#line-glow)" strokeWidth="2" style={{ opacity: 0 }}></path>

              <path className="schema-line" d="M250,200 C350,300 350,350 400,340" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5"></path>
              <path className="schema-line-glow" d="M250,200 C350,300 350,350 400,340" fill="none" stroke="url(#line-glow)" strokeWidth="2" style={{ opacity: 0 }}></path>
            </svg>

            {/* Central Node Background Field Rings */}
            <div className="absolute w-64 h-64 rounded-full border border-blue-500/5 scale-0 origin-center" id="ring-1" style={{ left: 'calc(50% - 128px)', top: 'calc(50% - 128px)' }}></div>
            <div className="absolute w-48 h-48 rounded-full border border-teal-400/10 scale-0 origin-center" id="ring-2" style={{ left: 'calc(50% - 96px)', top: 'calc(50% - 96px)' }}></div>

            {/* Central Node (Anchor) */}
            <div className="absolute z-20 node-group cursor-pointer" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="relative w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-500 hover:scale-110 shadow-lg shadow-blue-500/10">
                <div className="w-6 h-6 rounded-full" style={{ background: 'radial-gradient(circle, #35b0a2 0%, #0f75bc 100%)', boxShadow: '0 0 15px rgba(53, 176, 162, 0.4)' }}></div>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[11px] font-semibold text-slate-800 whitespace-nowrap schema-label opacity-0">
                Data Apps
              </div>
            </div>

            {/* Satellite Nodes */}
            {/* Top Left */}
            <div className="absolute z-10 node-group cursor-pointer float-node" style={{ left: '16%', top: '30%', transform: 'translate(-50%, -50%)' }}>
              <div className="relative w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-500 hover:scale-110 shadow-md">
                <div className="w-3 h-3 rounded-full" style={{ background: 'radial-gradient(circle, #5eead4 0%, #35b0a2 100%)', boxShadow: '0 0 10px rgba(94, 234, 212, 0.4)' }}></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[10px] text-slate-700 font-medium whitespace-nowrap schema-label opacity-0">
                UX/UI Design
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute z-10 node-group cursor-pointer float-node" style={{ left: '18%', top: '80%', transform: 'translate(-50%, -50%)', animationDelay: '1s' }}>
              <div className="relative w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-500 hover:scale-110 shadow-md">
                <div className="w-4 h-4 rounded-full" style={{ background: 'radial-gradient(circle, #38bdf8 0%, #0f75bc 100%)', boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)' }}></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[10px] text-slate-700 font-medium whitespace-nowrap schema-label opacity-0">
                Cloud DevOps
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute z-10 node-group cursor-pointer float-node" style={{ left: '84%', top: '32%', transform: 'translate(-50%, -50%)', animationDelay: '0.5s' }}>
              <div className="relative w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-500 hover:scale-110 shadow-md">
                <div className="w-3.5 h-3.5 rounded-full" style={{ background: 'radial-gradient(circle, #60a5fa 0%, #102B72 100%)', boxShadow: '0 0 10px rgba(96, 165, 250, 0.4)' }}></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[10px] text-slate-700 font-medium whitespace-nowrap schema-label opacity-0">
                Web App Dev
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute z-10 node-group cursor-pointer float-node" style={{ left: '80%', top: '85%', transform: 'translate(-50%, -50%)', animationDelay: '1.5s' }}>
              <div className="relative w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-500 hover:scale-110 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'radial-gradient(circle, #5eead4 0%, #35b0a2 100%)', boxShadow: '0 0 10px rgba(94, 234, 212, 0.4)' }}></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[10px] text-slate-700 font-medium whitespace-nowrap schema-label opacity-0">
                Mobile App Dev
              </div>
            </div>
          </div>

          {/* Right Side: Translucent List Structure */}
          <div className="relative w-full max-w-sm mx-auto h-[350px] flex flex-col justify-center gap-3 pl-4 lg:pl-12" style={{ WebkitMaskImage: 'radial-gradient(circle at center left, black 20%, transparent 95%)', maskImage: 'radial-gradient(circle at center left, black 20%, transparent 95%)' }}>

            {/* Glowing Orb behind list */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #0f75bc 0%, transparent 70%)', filter: 'blur(20px)' }}></div>

            {/* List Items (Glass Panels) */}
            <div className="relative flex items-center gap-4 p-3 pr-8 rounded-xl border border-slate-200/50 bg-slate-50/50 backdrop-blur-sm transform transition-all hover:bg-slate-100/50 cursor-default float-list-item shadow-sm">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <FileText size={16} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-800 font-semibold">Product Strategy</div>
                <div className="text-xs text-slate-500 mt-0.5">Updated 2 mins ago</div>
              </div>
            </div>

            {/* Active/Highlighted Item */}
            <div className="relative flex items-center gap-4 p-3.5 pr-8 rounded-xl border border-blue-200 bg-blue-50/80 backdrop-blur-md transform scale-105 z-10 shadow-md shadow-blue-500/5 float-list-item" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: 'inset 0 0 20px rgba(15,117,188,0.05)' }}></div>

              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
              </div>
              <div className="flex-1 relative">
                <div className="text-sm text-blue-900 font-bold drop-shadow-sm">UX/UI Prototyping</div>
                <div className="text-xs text-blue-600 mt-0.5">8 linked dependencies</div>
              </div>
            </div>

            <div className="relative flex items-center gap-4 p-3 pr-8 rounded-xl border border-slate-200/50 bg-slate-50/50 backdrop-blur-sm transform transition-all hover:bg-slate-100/50 cursor-default float-list-item shadow-sm" style={{ animationDelay: '0.4s' }}>
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <Database size={16} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-800 font-semibold">Full-Stack Development</div>
                <div className="text-xs text-slate-500 mt-0.5">Pending validation</div>
              </div>
            </div>

            <div className="relative flex items-center gap-4 p-3 pr-8 rounded-xl border border-slate-100/30 bg-slate-50/20 backdrop-blur-sm transform transition-all cursor-default float-list-item opacity-60 shadow-sm" style={{ animationDelay: '0.6s' }}>
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                <Activity size={16} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-600 font-semibold">Quality Assurance</div>
                <div className="text-xs text-slate-400 mt-0.5">Archived</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </section>
  );
}
