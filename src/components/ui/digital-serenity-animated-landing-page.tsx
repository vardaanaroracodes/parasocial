import React, { useState, useEffect, useRef } from 'react';

interface MouseGradientStyle {
  left: string;
  top: string;
  opacity: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const DigitalSerenity = () => {
  const [mouseGradientStyle, setMouseGradientStyle] = useState<MouseGradientStyle>({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const wordsRef = useRef<HTMLElement[]>([]); // Not strictly necessary if not directly manipulating post-initial animation
  const floatingElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delayAttr = word.getAttribute('data-delay');
        const delay = parseInt(delayAttr || '0') || 0;
        setTimeout(() => {
          if (word && word instanceof HTMLElement) {
            word.style.animation = 'word-appear 0.8s ease-out forwards';
          }
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  useEffect(() => {
    const wordElements = document.querySelectorAll('.word-animate');
    const handleMouseEnter = (e: Event) => { 
      if (e.target && e.target instanceof HTMLElement) {
        e.target.style.textShadow = '0 0 16px rgba(249, 115, 22, 0.5)'; // Orange-500 glow
      }
    };
    const handleMouseLeave = (e: Event) => { 
      if (e.target && e.target instanceof HTMLElement) {
        e.target.style.textShadow = 'none'; 
      }
    };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element-animate');
    floatingElementsRef.current = Array.from(elements) as HTMLElement[];
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = 'running';
              el.style.opacity = ''; 
            }
          }, (parseFloat(el.style.animationDelay || "0") * 1000) + index * 100);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const pageStyles = `
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px; /* rounded-full */
      background-image: radial-gradient(circle, rgba(234, 88, 12, 0.06), rgba(194, 65, 12, 0.04), transparent 70%); /* orange-600/6, orange-700/4 */
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
    @keyframes word-appear { 0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
    @keyframes grid-draw { 0% { stroke-dashoffset: 1000; opacity: 0; } 50% { opacity: 0.15; } 100% { stroke-dashoffset: 0; opacity: 0.08; } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.08; transform: scale(1); } 50% { opacity: 0.18; transform: scale(1.1); } }
    .word-animate { display: inline-block; opacity: 0; margin: 0 0.1em; transition: color 0.3s ease, transform 0.3s ease; }
    .word-animate:hover { color: #f97316; /* orange-500 */ transform: translateY(-2px); }
    .grid-line { stroke: #dc2626; /* red-600 */ stroke-width: 0.5; opacity: 0; stroke-dasharray: 5 5; stroke-dashoffset: 1000; animation: grid-draw 2s ease-out forwards; }
    .detail-dot { fill: #f97316; /* orange-500 */ opacity: 0; animation: pulse-glow 3s ease-in-out infinite; }
    .corner-element-animate { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(234, 88, 12, 0.18); opacity: 0; animation: word-appear 1s ease-out forwards; }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, #f97316, transparent); animation: underline-grow 2s ease-out forwards; animation-delay: 2s; }
    @keyframes underline-grow { to { width: 100%; } }
    .floating-element-animate { position: absolute; width: 2px; height: 2px; background: #f97316; border-radius: 50%; opacity: 0; animation: float 4s ease-in-out infinite; animation-play-state: paused; }
    @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; } 25% { transform: translateY(-10px) translateX(5px); opacity: 0.25; } 50% { transform: translateY(-5px) translateX(-3px); opacity: 0.18; } 75% { transform: translateY(-15px) translateX(7px); opacity: 0.3; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(234, 88, 12, 0.45); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-orange-950 text-orange-100 font-primary overflow-hidden relative">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(220, 38, 38, 0.06)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: '2.5s', opacity: '0.02' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: '3s', opacity: '0.02' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} />
        </svg>

        {/* Responsive Corner Elements */}
        <div className="corner-element-animate top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8" style={{ animationDelay: '4s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 opacity-20 rounded-full"></div>
        </div>
        <div className="corner-element-animate top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8" style={{ animationDelay: '4.2s' }}>
          <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 opacity-20 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8" style={{ animationDelay: '4.4s' }}>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-500 opacity-20 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8" style={{ animationDelay: '4.6s' }}>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 opacity-20 rounded-full"></div>
        </div>

        <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
        <div className="floating-element-animate" style={{ top: '40%', left: '10%', animationDelay: '1.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '75%', left: '90%', animationDelay: '2s' }}></div>

        {/* Responsive Main Content Padding */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-20">
          <div className="text-center mt-20 sm:mt-24 md:mt-28">
            <h2 className="text-xs sm:text-sm font-mono font-light text-orange-200 uppercase tracking-[0.2em] opacity-80">
              <span className="word-animate" data-delay="0">Fired </span>
              <span className="word-animate" data-delay="300">Within</span>
            </h2>
            <div className="mt-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto"></div>
          </div>

          <div className="text-center max-w-5xl mx-auto relative">
            {/* Responsive Main Heading Sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-orange-50 text-decoration-animate">
              <div className="mb-4 md:mb-6">
                <span className="word-animate" data-delay="700">Parasocial</span>
                {/* <span className="word-animate" data-delay="850">your</span>
                <span className="word-animate" data-delay="1000">center,</span> */}
              </div>
              {/* Responsive Secondary Heading Sizes & Added tracking-wide for letter spacing */}
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-orange-200 leading-relaxed tracking-wide">
                <span className="word-animate" data-delay="1400">Transforms</span>
                <span className="word-animate" data-delay="1550">Brand</span>
                <span className="word-animate" data-delay="1700">Whispers</span>
                <span className="word-animate" data-delay="1850">Into</span>
                <span className="word-animate" data-delay="2000">Global</span>
                <span className="word-animate" data-delay="2150">Talks</span>
                <span className="word-animate" data-delay="2300">within</span>
                <span className="word-animate" data-delay="2450">the</span>
                <span className="word-animate" data-delay="2600">soul.</span>
              </div>
            </h1>
            {/* Responsive Detail Line Offsets */}
            <div className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-orange-500 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '3.2s' }}></div>
            <div className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-orange-500 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '3.4s' }}></div>
          </div>

          <div className="text-center">
            <div className="mb-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto"></div>
            <h2 className="text-xs sm:text-sm font-mono font-light text-orange-200 uppercase tracking-[0.2em] opacity-80">
              <span className="word-animate" data-delay="3000">Analyze,</span>
              <span className="word-animate" data-delay="3200">Strategize,</span>
              <span className="word-animate" data-delay="3400">Go</span>
              <span className="word-animate" data-delay="3550">Social.</span>
            </h2>
            <div className="mt-6 flex justify-center space-x-4 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '4.2s' }}>
              <div className="w-1 h-1 bg-orange-500 rounded-full opacity-30"></div>
              <div className="w-1 h-1 bg-red-500 rounded-full opacity-45"></div>
              <div className="w-1 h-1 bg-orange-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Responsive Mouse Gradient Size & Blur */}
        <div 
          id="mouse-gradient-react"
          className="w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {ripples.map(ripple => (
          <div
             key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default DigitalSerenity;
