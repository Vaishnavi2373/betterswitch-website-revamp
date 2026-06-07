import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial, Statistic } from '../types';

const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds

const testimonialData: { content: Testimonial; stats: Statistic[] }[] = [
  {
    content: {
      id: 0,
      quote: "Anchored upon core principles of tech-stack, BetterSwitch payment infrastructure enabled us to run on a unified platform.",
      author: "Ayush Agarwal",
      role: "CPTO, Dodo Payments",
      image: "/ayush_dodo.jpeg"
    },
    stats: [
      { val: "Unified", lbl: "Platform" },
      { val: "Scalable", lbl: "Tech Stack" },
      { val: "Seamless", lbl: "Integration" }
    ]
  },
  {
    content: {
      id: 1,
      quote: "They delivered a production-ready connector implementation within days which boosted us with a surge in TPS and ensured 99.9% uptime.",
      author: "Chris Munyasya",
      role: "Founder, Pesaswap East Africa Limited",
      image: "/Chris_PS.jpg"
    },
    stats: [
      { val: "Days", lbl: "To Production" },
      { val: "High", lbl: "TPS Surge" },
      { val: "99.9%", lbl: "Uptime" }
    ]
  },
  {
    content: {
      id: 2,
      quote: "Quite excited with their customised payment solution. Our customers loved BetterSwitch's user-friendly payment experience.",
      author: "Steinar Atli Skarphéðinsson",
      role: "CoFounder, Vaultera",
      image: "/Steinar_vaultera.jpg"
    },
    stats: [
      { val: "Custom", lbl: "Solution" },
      { val: "Loved", lbl: "User Experience" },
      { val: "Easy", lbl: "Integration" }
    ]
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [activeStats, setActiveStats] = useState(testimonialData[0].stats);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    const next = (current + 1) % testimonialData.length;
    setAnimating(true);
    setActiveStats(testimonialData[next].stats);
    // Use requestAnimationFrame for smoother animation timing
    requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrent(next);
        requestAnimationFrame(() => {
          setAnimating(false);
        });
      }, 50);
    });
  }, [current]);

  const goToPrev = useCallback(() => {
    const prev = current === 0 ? testimonialData.length - 1 : current - 1;
    setAnimating(true);
    setActiveStats(testimonialData[prev].stats);
    requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrent(prev);
        requestAnimationFrame(() => {
          setAnimating(false);
        });
      }, 50);
    });
  }, [current]);

  // Auto-scroll effect - use ref to avoid stale closure issues
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setAnimating(true);
      setCurrent(c => {
        const next = (c + 1) % testimonialData.length;
        setActiveStats(testimonialData[next].stats);
        return next;
      });
      requestAnimationFrame(() => {
        setTimeout(() => setAnimating(false), 50);
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    // Clear existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setIsPaused(true);
    goToNext();
    // Resume auto-scroll after 10 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  };

  const handlePrev = () => {
    // Clear existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setIsPaused(true);
    goToPrev();
    // Resume auto-scroll after 10 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  };

  // Cleanup pause timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Testimonials Carousel */}
      <section id="customers" className="py-32 bg-obsidian text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <div className="relative w-full min-h-[300px]">
                   {testimonialData.map((item, idx) => (
                     <div
                        key={item.content.id}
                        className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out flex flex-col justify-center ${idx === current ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none -z-10'}`}
                        style={{ willChange: 'opacity, transform' }}
                     >
                       <h2 className="text-4xl font-semibold tracking-tighter mb-8">
                         "{item.content.quote}"
                       </h2>
                       <div className="flex items-center gap-4">
                          <img src={item.content.image} alt={item.content.author} className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" loading="lazy" fetchpriority="low" />
                          <div>
                             <div className="font-medium text-white">{item.content.author}</div>
                             <div className="text-sm text-white/50">{item.content.role}</div>
                          </div>
                       </div>
                     </div>
                   ))}
                </div>

                <div className="flex items-center gap-3 mt-10">
                   <button onClick={handlePrev} aria-label="Previous testimonial" className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                      <ChevronLeft size={18} />
                   </button>
                   <button onClick={handleNext} aria-label="Next testimonial" className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                      <ChevronRight size={18} />
                   </button>
                   {/* Progress dots */}
                   <div className="flex items-center gap-1 ml-4" role="navigation" aria-label="Testimonial pagination">
                     {testimonialData.map((_, idx) => (
                       <div key={idx} className="p-4 cursor-pointer">
                         <div
                           role="button"
                           tabIndex={0}
                           aria-label={`Go to testimonial ${idx + 1} ${idx === current ? '(current)' : ''}`}
                           aria-current={idx === current ? 'true' : undefined}
                           className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-white' : 'bg-white/30'}`}
                           onClick={() => setCurrent(idx)}
                           onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
                             if (e.key === 'Enter' || e.key === ' ') {
                               setCurrent(idx);
                             }
                           }}
                         />
                       </div>
                     ))}
                   </div>
                </div>
             </div>

             <div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
                {activeStats.map((stat, i) => (
                  <div key={i}>
                     <div className={`text-3xl font-bold mb-1 transition-all duration-300 ease-out ${animating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
                       {stat.val}
                     </div>
                     <div className={`text-sm text-white/50 transition-opacity duration-300 ease-out ${animating ? 'opacity-0' : 'opacity-100'}`}>
                       {stat.lbl}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
