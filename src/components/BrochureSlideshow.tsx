import { useState, useEffect, useRef, useCallback, TouchEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface BrochureSlideshowProps {
  onEnroll?: () => void;
}

type Category = 'overview' | 'curriculum' | 'agentic' | 'portfolio' | 'career' | 'summary';

interface SlideData {
  title: string;
  category: Category;
}

// One entry per page of public/brochure/Neshama-AI-Engineering-Brochure.pdf.
// Page images live at /brochure/page-NN.jpg (thumbnails in /brochure/thumbs/).
// To update the brochure: re-render the PDF pages to those paths and edit this list.
const SLIDES: SlideData[] = [
  { title: "Neshama Agentic AI", category: "overview" },
  { title: "Beyond Technical Skills", category: "overview" },
  { title: "Program Blueprint", category: "overview" },
  { title: "12-Week Roadmap", category: "overview" },
  { title: "Module 01 · Python Foundations", category: "curriculum" },
  { title: "Module 02 · Web & MERN Foundations", category: "curriculum" },
  { title: "Module 03 · LLM Engineering", category: "curriculum" },
  { title: "Module 04 · RAG & Knowledge Engineering", category: "curriculum" },
  { title: "Module 05 · Full-Stack AI Product Engineering", category: "curriculum" },
  { title: "Module 06 · Agentic AI Engineering", category: "curriculum" },
  { title: "Module 07 · AI Coding Agents & MCP", category: "curriculum" },
  { title: "Module 08 · Production AI Engineering", category: "curriculum" },
  { title: "Agentic AI Deep Dive", category: "agentic" },
  { title: "AI Tools & Technology Stack", category: "agentic" },
  { title: "Career Track from Week 1", category: "career" },
  { title: "Project Portfolio · 01–06", category: "portfolio" },
  { title: "Project Portfolio · 07–12", category: "portfolio" },
  { title: "High-Signal Communication", category: "career" },
  { title: "Interview-Ready Roles", category: "career" },
  { title: "Mock Interviews & Corporate Readiness", category: "career" },
  { title: "What Students Finish With", category: "summary" },
  { title: "Program at a Glance", category: "summary" },
  { title: "Meet Your Course Lecturers", category: "summary" },
  { title: "Program Fees", category: "summary" },
];

const CATEGORY_LABELS: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'overview', label: 'Overview' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'agentic', label: 'Agentic & Stack' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'career', label: 'Career' },
  { id: 'summary', label: 'Summary & Fees' },
];

export const BROCHURE_PDF_URL = "/brochure/Neshama-AI-Engineering-Brochure.pdf";

const pageNum = (i: number) => String(i + 1).padStart(2, '0');
const pageSrc = (i: number) => `/brochure/page-${pageNum(i)}.jpg`;
const thumbSrc = (i: number) => `/brochure/thumbs/page-${pageNum(i)}.jpg`;

const MIN_ZOOM = 1;
const MAX_ZOOM = 2;

export default function BrochureSlideshow({ onEnroll }: BrochureSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeCategory, setActiveCategory] = useState<'all' | Category>('all');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const totalSlides = SLIDES.length;
  const current = SLIDES[currentSlide];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  // Keep the active thumbnail centred, reset zoom, and preload the next page.
  useEffect(() => {
    const strip = thumbnailsRef.current;
    if (strip) {
      // Scroll only the thumbnail strip. scrollIntoView() would also scroll the whole
      // page down to the slideshow on load and on every autoplay slide change.
      const activeThumb = strip.children[currentSlide] as HTMLElement;
      if (activeThumb) {
        const offset =
          activeThumb.getBoundingClientRect().left - strip.getBoundingClientRect().left;
        strip.scrollTo({
          left: strip.scrollLeft + offset - strip.clientWidth / 2 + activeThumb.clientWidth / 2,
          behavior: 'smooth'
        });
      }
    }
    setZoomLevel(1);
    const next = new Image();
    next.src = pageSrc((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null || zoomLevel > 1) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setZoomLevel(1);
  };

  const scrollThumbs = (dir: 1 | -1) => {
    const strip = thumbnailsRef.current;
    if (strip) strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: 'smooth' });
  };

  const zoomIn = () => setZoomLevel((z) => Math.min(MAX_ZOOM, Number((z + 0.25).toFixed(2))));
  const zoomOut = () => setZoomLevel((z) => Math.max(MIN_ZOOM, Number((z - 0.25).toFixed(2))));
  const resetZoom = () => setZoomLevel(1);

  const handleCategorySelect = (catId: 'all' | Category) => {
    setActiveCategory(catId);
    if (catId === 'all') return;
    const firstMatch = SLIDES.findIndex((s) => s.category === catId);
    if (firstMatch !== -1) setCurrentSlide(firstMatch);
  };

  // Page image; when zoomed it grows inside a scrollable box so it can be panned.
  const PageImage = ({ dark = false }: { dark?: boolean }) => (
    <div className={`w-full h-full ${zoomLevel > 1 ? 'overflow-auto' : 'overflow-hidden'} ${dark ? '' : 'bg-white'}`}>
      <img
        src={pageSrc(currentSlide)}
        alt={`Brochure page ${pageNum(currentSlide)}: ${current.title}`}
        draggable={false}
        className="block max-w-none h-auto mx-auto"
        style={{ width: `${zoomLevel * 100}%` }}
      />
    </div>
  );

  const ZoomControls = ({ dark = false }: { dark?: boolean }) => {
    const btn = dark
      ? 'px-2.5 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30'
      : 'px-2.5 py-1.5 rounded-lg bg-white border border-outline-variant/50 text-primary hover:border-primary disabled:opacity-40';
    return (
      <div className="flex items-center gap-1.5 text-xs font-bold">
        <button onClick={zoomOut} disabled={zoomLevel <= MIN_ZOOM} className={btn}>
          Zoom out
        </button>
        <span className={`font-mono px-1 ${dark ? 'text-white/80' : 'text-on-surface-variant'}`}>
          {Math.round(zoomLevel * 100)}%
        </span>
        <button onClick={zoomIn} disabled={zoomLevel >= MAX_ZOOM} className={btn}>
          Zoom in
        </button>
        {zoomLevel > 1 && (
          <button onClick={resetZoom} className={btn}>
            Reset
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="brochure" className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-low border-b border-outline-variant/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Official Program Brochure · {totalSlides} Pages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-4">
            Neshama Training Brochure
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Explore the complete {totalSlides}-page brochure: program blueprint, eight modules, 12 projects, the agentic AI track, career preparation, lecturers and fees.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 justify-start sm:justify-center">
          {CATEGORY_LABELS.map((cat) => {
            const count = cat.id === 'all' ? totalSlides : SLIDES.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-on-surface-variant hover:text-primary hover:bg-surface-container-high border border-outline-variant/30'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-surface rounded-2xl p-3 sm:p-4 border border-outline-variant/40 shadow-soft">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg shrink-0">
              {currentSlide + 1} / {totalSlides}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-primary truncate">
              {current.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                isPlaying
                  ? 'bg-primary text-white'
                  : 'bg-white border border-outline-variant/50 text-primary hover:border-primary'
              }`}
            >
              {isPlaying ? 'Pause' : 'Auto-Play'}
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-3 py-1.5 rounded-xl bg-surface-container-high text-primary text-xs font-bold hover:bg-outline-variant/20 transition-colors"
            >
              Fullscreen
            </button>
            <a
              href={BROCHURE_PDF_URL}
              download
              className="px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:shadow-md transition-all"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Slide Stage */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="bg-slate-900 rounded-2xl sm:rounded-3xl p-2 sm:p-5 shadow-2xl border border-outline-variant/40"
        >
          <div className="w-full aspect-[1600/899] rounded-xl sm:rounded-2xl overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full"
              >
                <PageImage />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Row */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={prevSlide}
            className="px-5 py-2.5 rounded-full bg-surface border border-outline-variant/40 text-primary text-sm font-bold hover:border-primary transition-colors"
          >
            Previous
          </button>
          <div className="order-last sm:order-none w-full sm:w-auto flex justify-center">
            <ZoomControls />
          </div>
          <button
            onClick={nextSlide}
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:shadow-md transition-all"
          >
            Next
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-4">
          <div
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8">
          <div className="flex items-end justify-between gap-4 mb-3">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-primary">Browse all pages</h4>
              <p className="text-xs text-on-surface-variant">
                {totalSlides} pages · select a page to open it
                <span className="hidden sm:inline"> · arrow keys also work</span>
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollThumbs(-1)}
                className="px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/50 text-primary text-xs font-bold hover:border-primary transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => scrollThumbs(1)}
                className="px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/50 text-primary text-xs font-bold hover:border-primary transition-colors"
              >
                More
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Edge fades hint that the strip scrolls */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-surface-container-low to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-surface-container-low to-transparent z-10" />

            <div
              ref={thumbnailsRef}
              className="no-scrollbar flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-proximity px-4 py-2"
              style={{ scrollbarWidth: 'none' }}
            >
              {SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-current={isActive ? 'true' : undefined}
                    aria-label={`Go to page ${index + 1}: ${slide.title}`}
                    className="group shrink-0 snap-start w-40 sm:w-48 text-left focus:outline-none"
                  >
                    <div
                      className={`relative rounded-[12px] overflow-hidden bg-white border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-primary ring-4 ring-primary/15 shadow-md'
                          : 'border-transparent shadow-sm group-hover:border-primary/40 group-hover:shadow-md group-focus-visible:border-primary'
                      }`}
                    >
                      <img
                        src={thumbSrc(index)}
                        alt=""
                        loading="lazy"
                        className={`w-full aspect-[1600/899] object-cover transition-opacity duration-200 ${
                          isActive ? '' : 'opacity-80 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-2 px-0.5 text-xs leading-snug line-clamp-2 min-h-[2rem] transition-colors ${
                        isActive ? 'font-bold text-primary' : 'font-semibold text-on-surface-variant group-hover:text-primary'
                      }`}
                    >
                      <span className={`mr-1.5 tabular-nums ${isActive ? 'text-primary' : 'text-outline'}`}>{pageNum(index)}</span>
                      {slide.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-8 p-6 rounded-2xl bg-surface border border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div>
            <h4 className="font-bold text-primary text-base">
              Download the official PDF brochure
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              The full {totalSlides}-page Neshama AI Engineering brochure, including curriculum, projects and fees.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={BROCHURE_PDF_URL}
              download
              className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-full bg-surface-container-high hover:bg-outline-variant/30 text-primary font-bold text-xs sm:text-sm transition-colors border border-outline-variant/40"
            >
              Download PDF
            </a>
            <a
              href={BROCHURE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-full bg-surface-container-high hover:bg-outline-variant/30 text-primary font-bold text-xs sm:text-sm transition-colors border border-outline-variant/40"
            >
              Open PDF
            </a>
            {onEnroll && (
              <button
                onClick={onEnroll}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-primary text-white font-bold text-xs sm:text-sm hover:shadow-md transition-all"
              >
                Enroll Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen View */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col p-3 sm:p-6"
          >
            <div className="flex items-center justify-between gap-3 text-white pb-3 border-b border-white/10">
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg shrink-0">
                  {currentSlide + 1} / {totalSlides}
                </span>
                <h3 className="text-sm sm:text-base font-bold truncate">{current.title}</h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    isPlaying ? 'bg-white text-primary' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {isPlaying ? 'Pause' : 'Auto-Play'}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  title="Exit fullscreen (Esc)"
                >
                  Close
                </button>
              </div>
            </div>

            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="flex-1 min-h-0 flex items-center justify-center my-3"
            >
              <div className="w-full max-w-[min(100%,calc((100vh-10rem)*1600/899))] aspect-[1600/899] rounded-xl overflow-hidden bg-white">
                <PageImage />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-white pt-3 border-t border-white/10">
              <button
                onClick={prevSlide}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-bold"
              >
                Previous
              </button>
              <div className="flex items-center gap-3">
                <ZoomControls dark />
                <a
                  href={BROCHURE_PDF_URL}
                  download
                  className="hidden sm:inline-block px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:shadow-lg transition-all"
                >
                  Download PDF
                </a>
              </div>
              <button
                onClick={nextSlide}
                className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-bold"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
