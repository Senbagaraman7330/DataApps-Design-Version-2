import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import strategyImg from '../assets/workflow/Strategy.jpg';
import designImg from '../assets/workflow/Design copy.jpg';
import buildImg from '../assets/workflow/build copy.jpg';
import launchImg from '../assets/workflow/launch copy.jpg';

export interface DirectEngineRef {
  update: (progress: number) => void;
}

const workflowStates = [
  { name: 'Strategy', val1: 95, val2: 85, val3: 20, val4: 10, desc: 'Tight research, market intelligence, stakeholder alignment, and product scope mapping.', image: strategyImg },
  { name: 'Design', val1: 80, val2: 95, val3: 88, val4: 30, desc: 'High-fidelity layouts, interactive prototypes, component architectures, and UX research sprints.', image: designImg },
  { name: 'Build', val1: 45, val2: 60, val3: 98, val4: 85, desc: 'Clean React code development, backend API integrations, and robust automated regression testing.', image: buildImg },
  { name: 'Launch', val1: 15, val2: 30, val3: 90, val4: 98, desc: 'DevOps cloud delivery, continuous integration pipelines, and real-time performance analytics.', image: launchImg },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const DirectEngine = forwardRef<DirectEngineRef, {}>((_, ref) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const barIRef = useRef<HTMLElement | null>(null);

  const mCurlRef = useRef<HTMLSpanElement | null>(null);
  const mForceRef = useRef<HTMLSpanElement | null>(null);
  const mBloomRef = useRef<HTMLSpanElement | null>(null);
  const mFadeRef = useRef<HTMLSpanElement | null>(null);

  const bCurlRef = useRef<HTMLElement | null>(null);
  const bForceRef = useRef<HTMLElement | null>(null);
  const bBloomRef = useRef<HTMLElement | null>(null);
  const bFadeRef = useRef<HTMLElement | null>(null);

  const lastStateIdxRef = useRef<number>(0);

  function swapWord(idx: number) {
    const directWord = wordRef.current;
    if (!directWord) return;
    directWord.classList.add('out');
    setTimeout(() => {
      directWord.textContent = workflowStates[idx].name;
      directWord.classList.remove('out');
      directWord.classList.add('inq');
      void directWord.offsetWidth;
      directWord.classList.remove('inq');
    }, 260);
  }

  useImperativeHandle(ref, () => ({
    update(p: number) {
      const n = workflowStates.length;
      const sf = clamp(p, 0, 1) * (n - 1);
      const i0 = Math.floor(sf);
      const i1 = Math.min(i0 + 1, n - 1);
      const f = sf - i0;

      const a = workflowStates[i0];
      const b = workflowStates[i1];

      const val1 = lerp(a.val1, b.val1, f);
      const val2 = lerp(a.val2, b.val2, f);
      const val3 = lerp(a.val3, b.val3, f);
      const val4 = lerp(a.val4, b.val4, f);

      const stateIdx = Math.round(sf);

      if (mCurlRef.current) mCurlRef.current.textContent = Math.round(val1) + '%';
      if (mForceRef.current) mForceRef.current.textContent = Math.round(val2) + '%';
      if (mBloomRef.current) mBloomRef.current.textContent = Math.round(val3) + '%';
      if (mFadeRef.current) mFadeRef.current.textContent = Math.round(val4) + '%';

      if (bCurlRef.current) bCurlRef.current.style.width = clamp(val1, 2, 100) + '%';
      if (bForceRef.current) bForceRef.current.style.width = clamp(val2, 2, 100) + '%';
      if (bBloomRef.current) bBloomRef.current.style.width = clamp(val3, 2, 100) + '%';
      if (bFadeRef.current) bFadeRef.current.style.width = clamp(val4, 2, 100) + '%';

      if (stateIdx !== lastStateIdxRef.current) {
        swapWord(stateIdx);
        if (descRef.current) descRef.current.innerHTML = workflowStates[stateIdx].desc;
        setActiveIdx(stateIdx);
        lastStateIdxRef.current = stateIdx;
      }

      if (barIRef.current) {
        barIRef.current.style.width = clamp(p, 0, 1) * 100 + '%';
      }
    },
  }));

  return (
    <section id="direct" className="pin" data-idx="Workflow" style={{ height: '440vh' }}>
      <div className="pinStick">
        <div className="wrap w-full max-w-[1440px] px-6 lg:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center w-full">
            {/* Left Column: Workflow Labels and Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* <div className="eyebrow" style={{ marginBottom: '20px' }}>
                Our Workflow
              </div> */}
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#102B72] leading-[1.05] mt-2 lg:mt-4 mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent" ref={wordRef}>Strategy</span>
              </h2>
              <div id="directDesc" ref={descRef} className="text-sm sm:text-base">
                Tight research, market intelligence, stakeholder alignment, and product scope mapping.
              </div>
              <div id="directPanel" className="glass w-full mt-3 lg:mt-8 p-3 sm:p-4 lg:p-5">
                <div className="pr">
                  <div className="top">
                    <span>RESEARCH &amp; PLANNING</span>
                    <span className="kv" ref={mCurlRef}>
                      95%
                    </span>
                  </div>
                  <div className="bar">
                    <i ref={bCurlRef}></i>
                  </div>
                </div>
                <div className="pr">
                  <div className="top">
                    <span>INTERFACE DESIGN</span>
                    <span className="kv" ref={mForceRef}>
                      85%
                    </span>
                  </div>
                  <div className="bar">
                    <i ref={bForceRef}></i>
                  </div>
                </div>
                <div className="pr">
                  <div className="top">
                    <span>SYSTEM ARCHITECTURE</span>
                    <span className="kv" ref={mBloomRef}>
                      20%
                    </span>
                  </div>
                  <div className="bar">
                    <i ref={bBloomRef}></i>
                  </div>
                </div>
                <div className="pr" style={{ marginBottom: 0 }}>
                  <div className="top">
                    <span>SCALE &amp; DEPLOY</span>
                    <span className="kv" ref={mFadeRef}>
                      10%
                    </span>
                  </div>
                  <div className="bar">
                    <i ref={bFadeRef}></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Workflow Stage Image Card */}
            <div className="lg:col-span-7 lg:col-start-6 w-full flex justify-center items-center">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-w-[360px] sm:max-w-[680px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(16,43,114,0.15)] border border-[#102B72]/10 bg-slate-50/50 backdrop-blur-sm">
                {workflowStates.map((state, idx) => (
                  <img
                    key={idx}
                    src={state.image}
                    alt={state.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${activeIdx === idx ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <div id="directBar">
          <i ref={barIRef}></i>
        </div>
      </div>
    </section>
  );
});

DirectEngine.displayName = 'DirectEngine';

export default DirectEngine;
