import { GodRays } from "@paper-design/shaders-react";

export default function GlowBackground() {
  return (
    <div 
      id="c" 
      className="overflow-hidden bg-white"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      {/* GodRays Background - Subtle gray/white shader on white backdrop */}
      <div className="absolute inset-0 pointer-events-none w-full h-full z-0">
        <GodRays
          colorBack="#00000000"
          colors={["#102B7218", "#0f75bc18", "#35b0a21c", "#e25b8314"]}
          colorBloom="#0f75bc"
          offsetX={0.85}
          offsetY={-1}
          intensity={0.5}
          spotty={0.45}
          midSize={10}
          midIntensity={0}
          density={0.38}
          bloom={0.3}
          speed={0.5}
          scale={1.6}
          frame={3332042.8159981333}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Film grain and scrim overlays for texture and contrast */}
      <div id="vig" className="z-[3]"></div>
      <div id="scrim" className="z-[3]"></div>
      <div id="grain" className="z-[3]"></div>
    </div>
  );
}
