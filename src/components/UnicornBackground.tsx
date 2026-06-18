import { useEffect } from 'react';

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export default function UnicornBackground() {
  useEffect(() => {
    const initUnicorn = () => {
      if (window.UnicornStudio) {
        try {
          window.UnicornStudio.init();
        } catch (e) {
          console.warn("UnicornStudio init warning:", e);
        }
      }
    };

    if (!window.UnicornStudio) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = initUnicorn;
      document.head.appendChild(script);
    } else {
      initUnicorn();
    }
  }, []);

  return (
    <div 
      className="pointer-events-none absolute inset-0 z-0 w-full h-full overflow-hidden saturate-150 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-none" 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)',
        maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'
      }}
    >
      <div 
        data-us-project="bcBYZIStYXwiogchBNHO" 
        className="absolute inset-0 z-0 w-full h-full" 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          filter: 'invert(1) hue-rotate(185deg) saturate(0.8)',
          opacity: 0.25
        }}
      />
    </div>
  );
}
