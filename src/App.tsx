/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';

// Lazy load components below the fold
const VideoSection = lazy(() => import('./components/VideoSection'));
const Countdown = lazy(() => import('./components/Countdown'));
const Learn = lazy(() => import('./components/Learn'));
const Outcomes = lazy(() => import('./components/Outcomes'));
const Audience = lazy(() => import('./components/Audience'));
const Curriculum = lazy(() => import('./components/Curriculum'));
const Tools = lazy(() => import('./components/Tools'));
const Instructor = lazy(() => import('./components/Instructor'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const StickyFooter = lazy(() => import('./components/StickyFooter'));
const Footer = lazy(() => import('./components/Footer'));
const Modal = lazy(() => import('./components/Modals'));

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Eagerly load the form script to speed up first modal open
  useEffect(() => {
    const timer = setTimeout(() => {
      const scriptId = "ghl-form-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        script.id = scriptId;
        document.body.appendChild(script);
      }
    }, 2000); // 2 second delay to prioritize hero content
    return () => clearTimeout(timer);
  }, []);

  const openEnroll = () => setIsEnrollModalOpen(true);
  const openBrochure = () => setIsBrochureModalOpen(true);

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary selection:text-primary pb-24 sm:pb-20">
      <TopBanner onEnroll={openEnroll} />
      <main>
        <Hero onEnroll={openEnroll} onDownloadBrochure={openBrochure} />
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-outline">Loading...</div>}>
          <VideoSection />
          <Countdown />
          <Learn />
          <Outcomes />
          <Audience />
          <Curriculum />
          <Tools />
          <Instructor />
          <Testimonials />
          <FAQ />
          <FinalCTA onEnroll={openEnroll} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <StickyFooter onEnroll={openEnroll} />
        <Modal 
          isOpen={isEnrollModalOpen} 
          onClose={() => setIsEnrollModalOpen(false)} 
          title="Enrollment Form" 
          type="enroll" 
        />
        <Modal 
          isOpen={isBrochureModalOpen} 
          onClose={() => setIsBrochureModalOpen(false)} 
          title="Brochure Form" 
          type="brochure" 
        />
      </Suspense>
    </div>
  );
}
