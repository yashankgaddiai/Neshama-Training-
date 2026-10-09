import React, { useState, useEffect, useRef, useCallback, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  Download, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  FileText,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface BrochureSlideshowProps {
  onEnroll?: () => void;
}

export interface SlideItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export const BROCHURE_SLIDES: SlideItem[] = [
  {
    id: 1,
    image: '/brochure/page-01.jpg',
    title: 'Cover Page',
    subtitle: 'Neshama AI Engineering Masterclass & Program Deck'
  },
  {
    id: 2,
    image: '/brochure/page-02.jpg',
    title: 'Program Overview',
    subtitle: '3-Month Full-Stack AI Engineering Blueprint'
  },
  {
    id: 3,
    image: '/brochure/page-03.jpg',
    title: 'Market Opportunity',
    subtitle: 'Why AI Engineering in 2026 & Industry Demand'
  },
  {
    id: 4,
    image: '/brochure/page-04.jpg',
    title: 'Curriculum Architecture',
    subtitle: 'The 4-Pillar Engineering & Learning Framework'
  },
  {
    id: 5,
    image: '/brochure/page-05.jpg',
    title: 'Python & Full-Stack',
    subtitle: 'Module 01: Programming, Git & Engineering Foundations'
  },
  {
    id: 6,
    image: '/brochure/page-06.jpg',
    title: 'Generative AI & LLMs',
    subtitle: 'Module 02: Model APIs, Prompting & Embeddings'
  },
  {
    id: 7,
    image: '/brochure/page-07.jpg',
    title: 'Production RAG Systems',
    subtitle: 'Module 03: Vector Databases & Grounded Retrieval'
  },
  {
    id: 8,
    image: '/brochure/page-08.jpg',
    title: 'Autonomous AI Agents',
    subtitle: 'Module 04: Multi-Agent Workflows & MCP Protocol'
  },
  {
    id: 9,
    image: '/brochure/page-09.jpg',
    title: 'Capstone Project Portfolio',
    subtitle: '12 AI-Native Production Apps & Enterprise Systems'
  },
  {
    id: 10,
    image: '/brochure/page-10.jpg',
    title: 'Career Track from Week 1',
    subtitle: 'Resume, GitHub, Mock Interviews & Placement Mentorship'
  },
  {
    id: 11,
    image: '/brochure/page-11.jpg',
    title: 'Production Tech Stack',
    subtitle: 'Frameworks, Cloud Deployments, Docker & Model Ops'
  },
  {
    id: 12,
    image: '/brochure/page-12.jpg',
    title: 'Investment & Program Schedule',
    subtitle: 'Batch Timelines, Scholarships & Fee Options'
  },
  {
    id: 13,
    image: '/brochure/page-13.jpg',
    title: 'Certification & Enrolment',
    subtitle: 'Official Credentials, Community Access & Next Steps'
  }
];

const BROCHURE_DOWNLOAD_URL = "https://drive.google.com/uc?export=view&id=1u2bwNXjPORDy1XJcWH07nEoGmvp-8I88";
const BROCHURE_PREVIEW_URL = "https://drive.google.com/file/d/1u2bwNXjPORDy1XJcWH07nEoGmvp-8I88/view";

export default function BrochureSlideshow({ onEnroll }: BrochureSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const totalSlides = BROCHURE_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentSlide] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
    // Reset zoom on slide change
    setZoomLevel(1);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))));
  const zoomOut = () => setZoomLevel((z) => Math.max(1, Number((z - 0.25).toFixed(2))));
  const resetZoom = () => setZoomLevel(1);

  const current = BROCHURE_SLIDES[currentSlide];

  return (
    <section id="brochure" className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-low border-b border-outline-variant/30">
      <div className="max-w-6xl mx-auto">
        {/* Header Info */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Official Program Brochure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-4">
            Neshama AI Engineering Brochure
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Explore the complete 13-slide curriculum, tech stack, and career roadmap in this interactive slideshow view.
          </p>
        </div>

        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-surface rounded-2xl p-3 sm:p-4 border border-outline-variant/40 shadow-soft">
          {/* Slide Indicator & Title */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg">
              {currentSlide + 1} / {totalSlides}
            </span>
            <div className="text-left">
              <h3 className="text-sm sm:text-base font-bold text-primary truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {current.title}
              </h3>
              <p className="text-xs text-on-surface-variant hidden sm:block">
                {current.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                isPlaying 
                  ? 'bg-secondary text-primary font-black' 
                  : 'bg-surface-container-high text-primary hover:bg-outline-variant/20'
              }`}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Auto-Play'}</span>
            </button>

            <button
              onClick={toggleFullscreen}
              aria-label="View Fullscreen"
              className="p-2 rounded-xl bg-surface-container-high text-primary hover:bg-outline-variant/20 transition-colors"
              title="Fullscreen view"
            >
              <Maximize2 size={16} />
            </button>

            <a
              href={BROCHURE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:shadow-md transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Main Slide Presentation Stage */}
        <div 
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/40 select-none group aspect-[16/9] flex items-center justify-center"
        >
          {/* Main Slide Image */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <img 
                  src={current.image} 
                  alt={`Neshama AI Engineering Brochure Slide ${currentSlide + 1} - ${current.title}`}
                  className="w-full h-full object-contain"
                  loading="eager"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Overlay Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 active:scale-95 z-20"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 active:scale-95 z-20"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
          </button>

          {/* Bottom Slide Overlay Controls */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
            {/* Slide Pill */}
            <div className="pointer-events-auto bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold border border-white/10 shadow-md">
              {currentSlide + 1} of {totalSlides} · {current.title}
            </div>

            {/* In-Slide Zoom Controls */}
            <div className="pointer-events-auto flex items-center gap-1 bg-black/70 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-md">
              <button 
                onClick={zoomOut} 
                disabled={zoomLevel <= 1}
                aria-label="Zoom Out"
                className="p-1 text-white hover:text-secondary disabled:opacity-30 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={15} />
              </button>
              <span className="text-[11px] font-mono text-white/90 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button 
                onClick={zoomIn} 
                disabled={zoomLevel >= 2.5}
                aria-label="Zoom In"
                className="p-1 text-white hover:text-secondary disabled:opacity-30 transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={15} />
              </button>
              {zoomLevel > 1 && (
                <button 
                  onClick={resetZoom}
                  aria-label="Reset Zoom"
                  className="p-1 text-white hover:text-secondary transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-4">
          <div 
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5">
              <Layers size={14} />
              All 13 Slides Overview (Click to jump)
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
              <span>Use</span>
              <kbd className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-[10px] font-mono">←</kbd>
              <kbd className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-[10px] font-mono">→</kbd>
              <span>keys to navigate</span>
            </div>
          </div>

          <div 
            ref={thumbnailsRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-outline-variant/40"
          >
            {BROCHURE_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex-shrink-0 relative group rounded-xl overflow-hidden transition-all duration-200 border-2 aspect-[16/9] w-24 sm:w-32 bg-slate-900 ${
                    isActive 
                      ? 'border-primary ring-2 ring-primary/30 scale-105 shadow-md' 
                      : 'border-transparent opacity-65 hover:opacity-100 hover:border-outline-variant'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                >
                  <img 
                    src={slide.image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1">
                    <span className="text-[10px] font-bold text-white px-1 py-0.5 rounded bg-black/60">
                      {index + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-8 p-6 rounded-2xl bg-surface border border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">
                Need the offline PDF copy?
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Download the official 13-page Neshama AI Engineering brochure to review with your team or mentors.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={BROCHURE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-high hover:bg-outline-variant/30 text-primary font-bold text-xs sm:text-sm transition-colors border border-outline-variant/40"
            >
              <Download size={16} />
              <span>Direct PDF</span>
            </a>
            <a
              href={BROCHURE_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-high hover:bg-outline-variant/30 text-primary font-bold text-xs sm:text-sm transition-colors border border-outline-variant/40"
            >
              <ExternalLink size={16} />
              <span>Drive Viewer</span>
            </a>
            {onEnroll && (
              <button
                onClick={onEnroll}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-xs sm:text-sm hover:shadow-md transition-all"
              >
                <span>Apply Now</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal View */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-between p-3 sm:p-6 backdrop-blur-lg"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg">
                  Slide {currentSlide + 1} of {totalSlides}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="text-xs text-white/60 hidden sm:block">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    isPlaying 
                      ? 'bg-secondary text-primary font-black' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? 'Pause' : 'Auto-Play'}</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Exit Fullscreen"
                  title="Exit Fullscreen (Esc)"
                >
                  <Minimize2 size={18} />
                </button>
              </div>
            </div>

            {/* Modal Slide Area */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all z-30"
              >
                <ChevronLeft size={28} />
              </button>

              <div 
                className="w-full h-full flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all z-30"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Modal Footer Controls */}
            <div className="flex items-center justify-between text-white pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button 
                  onClick={zoomOut}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-xs font-mono text-white/80">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={zoomIn}
                  disabled={zoomLevel >= 2.5}
                  className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                >
                  <ZoomIn size={16} />
                </button>
                {zoomLevel > 1 && (
                  <button 
                    onClick={resetZoom}
                    className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 text-xs flex items-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={BROCHURE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:shadow-lg transition-all"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
