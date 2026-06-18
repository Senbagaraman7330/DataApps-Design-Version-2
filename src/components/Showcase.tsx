import SplineScene from './SplineScene';
import BorderGlow from './BorderGlow';
import TextInertia from './TextInertia';

export default function Showcase() {
  return (
    <section
      id="showcase"
      data-idx="About"
      data-fluid='{"CURL":15,"SPLAT_FORCE":3400,"BLOOM_INTENSITY":0.9,"DENSITY_DISSIPATION":0.74,"palette":"ink"}'
      className="py-20 bg-white"
    >
      <div className="wrap">
        <div className="secHead mb-12">
          <div>
            {/* <div className="eyebrow reveal">What We Do</div> */}
            <h2 className="reveal mt-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#102B72] leading-[1.05]">
              We Help You <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent">Plan &amp; Execute</span> Ideas.
            </h2>
          </div>
          <TextInertia
            text="We offer consultation, design, development, testing and support for your digital projects. We operate with our core values of integrity, dedication, and innovation."
            className="lead reveal secHead-lead mt-4 text-left justify-start"
            style={{ color: 'var(--muted)', maxWidth: '45ch', fontSize: '16px' }}
          />

        </div>

        <div className="showStage">
          <div className="window showWin reveal clipUp" style={{ height: 'auto' }}>
            <div className="winbar">
              <span className="dotr" style={{ background: '#ff5f57' }}></span>
              <span className="dotr" style={{ background: '#febc2e' }}></span>
              <span className="dotr" style={{ background: '#28c840' }}></span>
              <span className="url">dataapps.com / vision-mission</span>
            </div>
            <div className="winbody grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-slate-50/80 backdrop-blur-md relative h-full">
              <div className="scan"></div>
              <div className="wgrid"></div>

              {/* Left Column: 3D Spline Scene (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[480px] rounded-2xl overflow-hidden bg-white/40 border border-[#102B72]/8 shadow-sm flex flex-col justify-between p-4 z-10">
                <div className="absolute inset-0 z-0">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
                <div className="z-10 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#102B72]/8 text-[9px] font-mono text-[#102B72] shadow-sm w-fit">
                  Data Apps
                </div>
                <div className="z-10 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#102B72]/8 text-[9px] font-mono text-[#0f75bc] shadow-sm w-fit self-end animate-pulse">
                  Drag / Rotate to Interact
                </div>
              </div>

              {/* Right Column: Vision, Mission & Core Values (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6 z-10 justify-between">
                {/* Vision & Mission side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Vision Card */}
                  <BorderGlow
                    glowColor="207 90 54"
                    colors={['#3b82f6', '#0f75bc', '#60a5fa']}
                    borderRadius={16}
                    glowRadius={30}
                    glowIntensity={0.8}
                    backgroundColor="rgba(255, 255, 255, 0.7)"
                    className="hover:shadow-md transition-all duration-300 border-none shadow-sm"
                  >
                    <div className="p-5 h-full w-full">
                      <h3 className="text-base font-bold text-[#0f75bc] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
                        Our Vision
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        To be a highly respected technology services company, renowned for our exceptional technical team and impeccable project deliveries.
                      </p>
                    </div>
                  </BorderGlow>

                  {/* Mission Card */}
                  <BorderGlow
                    glowColor="174 60 50"
                    colors={['#14b8a6', '#35b0a2', '#2dd4bf']}
                    borderRadius={16}
                    glowRadius={30}
                    glowIntensity={0.8}
                    backgroundColor="rgba(255, 255, 255, 0.7)"
                    className="hover:shadow-md transition-all duration-300 border-none shadow-sm"
                  >
                    <div className="p-5 h-full w-full">
                      <h3 className="text-base font-bold text-[#35b0a2] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        Our Mission
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        To achieve our goals through effective communication, integrity, and respect towards our team, clients, and partners.
                      </p>
                    </div>
                  </BorderGlow>
                </div>

                {/* Core Values / Details Cards */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3.5 p-4 rounded-xl bg-white/60 border border-[#102B72]/5 hover:border-[#102B72]/15 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#0f75bc]/10 flex items-center justify-center text-[#0f75bc] shrink-0 font-bold text-xs">01</div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Core Values: Integrity &amp; Dedication</h4>
                      <p className="text-slate-500 text-[11px] mt-0.5">Every line of code crafted with absolute transparency and commitment.</p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 p-4 rounded-xl bg-white/60 border border-[#102B72]/5 hover:border-[#102B72]/15 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#35b0a2]/10 flex items-center justify-center text-[#35b0a2] shrink-0 font-bold text-xs">02</div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Innovation: Modern Architectures</h4>
                      <p className="text-slate-500 text-[11px] mt-0.5">Harnessing half-float calculations, AI models, and custom WebGL solvers.</p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 p-4 rounded-xl bg-white/60 border border-[#102B72]/5 hover:border-[#102B72]/15 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#e25b83]/10 flex items-center justify-center text-[#e25b83] shrink-0 font-bold text-xs">03</div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Deliveries: Impeccable &amp; Timely</h4>
                      <p className="text-slate-500 text-[11px] mt-0.5">Renowned for our technical skill and consistent track records.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
