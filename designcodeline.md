<section class="bg-background text-slate-200 overflow-x-hidden antialiased selection:bg-indigo-500/30 font-sans min-h-screen relative flex flex-col justify-center">
<div class="fixed inset-0 pointer-events-none z-50" style="background: radial-gradient(circle at center, transparent 30%, rgba(3, 5, 12, 0.8) 100%);"></div>

<div class="absolute inset-0 pointer-events-none flex justify-center overflow-hidden z-0" style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);">
        
        <!-- Deep atmospheric bloom -->
        <div class="absolute top-[-20%] w-[1000px] h-[800px] rounded-[100%] opacity-40" style="background: radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 0%, rgba(30, 58, 138, 0.2) 40%, transparent 70%); filter: blur(100px); transform: scaleX(1.5);"></div>

        <!-- The main sweeping beam shape -->
        <svg class="absolute top-0 w-full max-w-[1200px] h-[800px] opacity-90" viewBox="0 0 1000 800" preserveAspectRatio="none">
            <defs>
                <linearGradient id="flare-core" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"></stop>
                    <stop offset="30%" stop-color="#818cf8" stop-opacity="0.5"></stop>
                    <stop offset="80%" stop-color="#312e81" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="flare-edge" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stop-color="#e0e7ff" stop-opacity="0.6"></stop>
                    <stop offset="50%" stop-color="#4f46e5" stop-opacity="0.3"></stop>
                    <stop offset="100%" stop-color="#020617" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
            
            <!-- Outer flared edge -->
            <path id="beam-outer" d="M480,0 Q480,300 0,800 L1000,800 Q520,300 520,0 Z" fill="url(#flare-edge)" style="filter: blur(40px);"></path>
            
            <!-- Inner concentrated core -->
            <path id="beam-inner" d="M495,0 Q495,200 250,800 L750,800 Q505,200 505,0 Z" fill="url(#flare-core)" style="filter: blur(20px);"></path>
        </svg>

        <!-- Vertical light streaks within beam -->
        <div class="absolute top-0 w-[2px] h-[500px] opacity-60" style="background: linear-gradient(to bottom, #ffffff, transparent); filter: blur(1px);"></div>
        <div class="absolute top-0 ml-[-40px] w-[1px] h-[400px] opacity-30" style="background: linear-gradient(to bottom, #a5b4fc, transparent); filter: blur(2px);"></div>
        <div class="absolute top-0 ml-[40px] w-[1px] h-[450px] opacity-30" style="background: linear-gradient(to bottom, #c7d2fe, transparent); filter: blur(2px);"></div>
    </div>

<div id="particle-container" class="absolute inset-0 pointer-events-none z-0"></div>

<main class="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center">
        
        <!-- Skill Directive: Border Gradients (Badge) -->
        <div class="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8" style="background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(99,102,241,0.5) 50%, rgba(255,255,255,0.1) 100%);">
            <div class="bg-slate-950/80 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <div class="w-1.5 h-1.5 rounded-full bg-indigo-400" style="box-shadow: 0 0 8px #818cf8;"></div>
                <span class="text-xs font-medium tracking-wide text-slate-200">Networked intelligence, enhanced</span>
            </div>
        </div>

        <!-- Headline (Target for Masked Reveal) -->
        <h1 id="hero-heading" class="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white text-center max-w-4xl leading-[1.1]">
            Transform fragmented thoughts into an active system
        </h1>

        <!-- Paragraph -->
        <p class="mt-6 text-lg md:text-xl text-slate-400 text-center max-w-2xl font-normal leading-relaxed opacity-0" id="hero-sub">
            Record insights, map connections, and create a dynamic workspace that scales with your intelligence.
        </p>

        <!-- Lower Visual Area: Schema Map & List UI -->
        <div class="mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" id="hero-visuals">
            
            <!-- Left Side: Node Schema Visualization -->
            <div class="relative w-full aspect-[4/3] max-w-lg mx-auto flex items-center justify-center">
                
                <!-- SVG Connecting Lines -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400" id="schema-svg">
                    <defs>
                        <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#4f46e5" stop-opacity="0"></stop>
                            <stop offset="50%" stop-color="#818cf8" stop-opacity="0.8"></stop>
                            <stop offset="100%" stop-color="#c084fc" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <!-- Paths connecting center (250,200) to satellite nodes -->
                    <path class="schema-line" d="M250,200 C150,200 150,100 80,120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"></path>
                    <path class="schema-line-glow" d="M250,200 C150,200 150,100 80,120" fill="none" stroke="url(#line-glow)" stroke-width="2" style="opacity: 0;"></path>
                    
                    <path class="schema-line" d="M250,200 C200,300 100,250 90,320" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"></path>
                    <path class="schema-line-glow" d="M250,200 C200,300 100,250 90,320" fill="none" stroke="url(#line-glow)" stroke-width="2" style="opacity: 0;"></path>
                    
                    <path class="schema-line" d="M250,200 C350,200 350,100 420,130" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"></path>
                    <path class="schema-line-glow" d="M250,200 C350,200 350,100 420,130" fill="none" stroke="url(#line-glow)" stroke-width="2" style="opacity: 0;"></path>
                    
                    <path class="schema-line" d="M250,200 C350,300 350,350 400,340" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"></path>
                    <path class="schema-line-glow" d="M250,200 C350,300 350,350 400,340" fill="none" stroke="url(#line-glow)" stroke-width="2" style="opacity: 0;"></path>
                </svg>

                <!-- Central Node Background Field Rings -->
                <div class="absolute w-64 h-64 rounded-full border border-indigo-500/10 scale-0 origin-center" id="ring-1" style="left: calc(50% - 128px); top: calc(50% - 128px);"></div>
                <div class="absolute w-48 h-48 rounded-full border border-indigo-400/20 scale-0 origin-center" id="ring-2" style="left: calc(50% - 96px); top: calc(50% - 96px);"></div>

                <!-- Central Node (Anchor) -->
                <div class="absolute z-20 node-group cursor-pointer" style="left: 50%; top: 50%; transform: translate(-50%, -50%);">
                    <div class="relative w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center transition-transform duration-500 hover:scale-110" style="box-shadow: 0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.2);">
                        <div class="w-6 h-6 rounded-full" style="background: radial-gradient(circle, #818cf8 0%, #4f46e5 100%); box-shadow: 0 0 15px #818cf8;"></div>
                    </div>
                    <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-200 whitespace-nowrap schema-label opacity-0">
                        Central Core
                    </div>
                </div>

                <!-- Satellite Nodes -->
                <!-- Top Left -->
                <div class="absolute z-10 node-group cursor-pointer float-node" style="left: 16%; top: 30%; transform: translate(-50%, -50%);">
                    <div class="relative w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center transition-transform duration-500 hover:scale-110" style="box-shadow: 0 0 25px rgba(236, 72, 153, 0.2);">
                        <div class="w-3 h-3 rounded-full" style="background: radial-gradient(circle, #f472b6 0%, #db2777 100%); box-shadow: 0 0 10px #f472b6;"></div>
                    </div>
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/5 text-[10px] text-slate-400 whitespace-nowrap schema-label opacity-0">
                        Behavioral Insights
                    </div>
                </div>

                <!-- Bottom Left -->
                <div class="absolute z-10 node-group cursor-pointer float-node" style="left: 18%; top: 80%; transform: translate(-50%, -50%); animation-delay: 1s;">
                    <div class="relative w-12 h-12 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center transition-transform duration-500 hover:scale-110" style="box-shadow: 0 0 25px rgba(45, 212, 191, 0.2);">
                        <div class="w-4 h-4 rounded-full" style="background: radial-gradient(circle, #5eead4 0%, #0d9488 100%); box-shadow: 0 0 10px #5eead4;"></div>
                    </div>
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/5 text-[10px] text-slate-400 whitespace-nowrap schema-label opacity-0">
                        Network Architecture
                    </div>
                </div>

                <!-- Top Right -->
                <div class="absolute z-10 node-group cursor-pointer float-node" style="left: 84%; top: 32%; transform: translate(-50%, -50%); animation-delay: 0.5s;">
                    <div class="relative w-11 h-11 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center transition-transform duration-500 hover:scale-110" style="box-shadow: 0 0 25px rgba(245, 158, 11, 0.2);">
                        <div class="w-3.5 h-3.5 rounded-full" style="background: radial-gradient(circle, #fbbf24 0%, #d97706 100%); box-shadow: 0 0 10px #fbbf24;"></div>
                    </div>
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/5 text-[10px] text-slate-400 whitespace-nowrap schema-label opacity-0">
                        Component Patterns
                    </div>
                </div>

                <!-- Bottom Right -->
                <div class="absolute z-10 node-group cursor-pointer float-node" style="left: 80%; top: 85%; transform: translate(-50%, -50%); animation-delay: 1.5s;">
                    <div class="relative w-9 h-9 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center transition-transform duration-500 hover:scale-110" style="box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);">
                        <div class="w-2.5 h-2.5 rounded-full" style="background: radial-gradient(circle, #c084fc 0%, #9333ea 100%); box-shadow: 0 0 10px #c084fc;"></div>
                    </div>
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/5 text-[10px] text-slate-400 whitespace-nowrap schema-label opacity-0">
                        GraphQL Endpoints
                    </div>
                </div>
            </div>

            <!-- Right Side: Translucent List Structure -->
            <div class="relative w-full max-w-sm mx-auto h-[350px] flex flex-col justify-center gap-3 pl-4 lg:pl-12" style="mask-image: radial-gradient(circle at center left, black 20%, transparent 95%);">
                
                <!-- Glowing Orb behind list -->
                <div class="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 pointer-events-none" style="background: radial-gradient(circle, #818cf8 0%, transparent 70%); filter: blur(20px);"></div>

                <!-- List Items (Glass Panels) -->
                <div class="relative flex items-center gap-4 p-3 pr-8 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm transform transition-all hover:bg-white/[0.03] cursor-default float-list-item">
                    <div class="w-8 h-8 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-500">
                        <iconify-icon icon="solar:folder-with-files-linear" width="16"></iconify-icon>
                    </div>
                    <div class="flex-1">
                        <div class="text-sm text-slate-300 font-medium">Semantic Analysis</div>
                        <div class="text-xs text-slate-600 mt-0.5">Updated 2 mins ago</div>
                    </div>
                </div>

                <!-- Active/Highlighted Item -->
                <div class="relative flex items-center gap-4 p-3.5 pr-8 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03] backdrop-blur-md transform scale-105 z-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] float-list-item" style="animation-delay: 0.2s;">
                    <!-- Skill Directive: Subtly glowing active state -->
                    <div class="absolute inset-0 rounded-xl pointer-events-none" style="box-shadow: inset 0 0 20px rgba(99,102,241,0.05);"></div>
                    
                    <div class="relative flex items-center justify-center w-8 h-8">
                        <div class="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping" style="animation-duration: 3s;"></div>
                        <div class="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"></div>
                    </div>
                    <div class="flex-1 relative">
                        <div class="text-sm text-white font-medium drop-shadow-sm">Predictive ML Models</div>
                        <div class="text-xs text-indigo-300/70 mt-0.5">8 linked dependencies</div>
                    </div>
                </div>

                <div class="relative flex items-center gap-4 p-3 pr-8 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm transform transition-all hover:bg-white/[0.03] cursor-default float-list-item" style="animation-delay: 0.4s;">
                    <div class="w-8 h-8 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-500">
                        <iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
                    </div>
                    <div class="flex-1">
                        <div class="text-sm text-slate-400 font-medium">Database Vector Sync</div>
                        <div class="text-xs text-slate-600 mt-0.5">Pending validation</div>
                    </div>
                </div>
                
                <div class="relative flex items-center gap-4 p-3 pr-8 rounded-xl border border-white/[0.02] bg-white/[0.005] backdrop-blur-sm transform transition-all cursor-default float-list-item opacity-60" style="animation-delay: 0.6s;">
                    <div class="w-8 h-8 rounded-full bg-slate-800/30 border border-white/5 flex items-center justify-center text-slate-600">
                        <iconify-icon icon="solar:graph-linear" width="16"></iconify-icon>
                    </div>
                    <div class="flex-1">
                        <div class="text-sm text-slate-500 font-medium">Temporal Analytics</div>
                        <div class="text-xs text-slate-700 mt-0.5">Archived</div>
                    </div>
                </div>

            </div>
        </div>
    </main>

<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                    colors: {
                        background: '#03050C',
                    }
                }
            }
        }
    </script>
<script>
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // --- Setup Initial Schema States ---
            const baseLines = document.querySelectorAll('.schema-line');
            const glowLines = document.querySelectorAll('.schema-line-glow');
            
            baseLines.forEach(line => {
                const len = line.getTotalLength() || 300;
                gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
            });
            gsap.set('.node-group', { scale: 0, opacity: 0 });

            // --- Skill Directive: Masked Reveal for Headline ---
            const heading = document.getElementById('hero-heading');
            const text = heading.innerText;
            heading.innerHTML = text.split(' ').map(word => 
                `<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1">
                    <span class="reveal-word inline-block translate-y-full opacity-0">${word}</span>
                </span>`
            ).join(' ');

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
                    // Define a short dash to act as a moving packet
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

            // --- Particle System (Sparkles) ---
            const particleContainer = document.getElementById('particle-container');
            for (let i = 0; i < 45; i++) {
                const particle = document.createElement('div');
                particle.classList.add('absolute', 'rounded-full', 'bg-white');
                const size = Math.random() * 2.5 + 0.5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 60 + 10}%`;
                if (Math.random() > 0.5) particle.style.filter = `blur(${Math.random() * 2}px)`;
                particleContainer.appendChild(particle);

                gsap.to(particle, {
                    y: `-=${Math.random() * 150 + 50}`,
                    x: `+=${(Math.random() - 0.5) * 50}`,
                    opacity: 0,
                    duration: Math.random() * 5 + 4,
                    repeat: -1,
                    delay: Math.random() * 5,
                    ease: "sine.inOut",
                    onRepeat: () => {
                        particle.style.left = `${Math.random() * 100}%`;
                        particle.style.top = `${Math.random() * 60 + 20}%`;
                    }
                });

                gsap.to(particle, {
                    opacity: Math.random() * 0.8 + 0.2, duration: Math.random() * 2 + 1, repeat: -1, yoyo: true, ease: "sine.inOut"
                });
            }

            // --- Background Ambience ---
            gsap.to(['#beam-outer', '#beam-inner'], {
                opacity: "random(0.7, 1)", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.5
            });

            // --- Idle Hover Animations ---
            gsap.to('.float-node', {
                y: "random(-8, 8)", x: "random(-4, 4)", duration: "random(3, 5)", repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2
            });
            gsap.to('.float-list-item', {
                y: "random(-3, 3)", duration: "random(4, 6)", repeat: -1, yoyo: true, ease: "sine.inOut"
            });
            gsap.to('#ring-1', {
                scale: 1, opacity: 0, duration: 4, repeat: -1, ease: "power1.out", delay: 1
            });
            gsap.to('#ring-2', {
                scale: 1, opacity: 0, duration: 4, delay: 3, repeat: -1, ease: "power1.out"
            });
        });
    </script>
</section>