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
const Projects = lazy(() => import('./components/Projects'));
const Tools = lazy(() => import('./components/Tools'));
const Instructor = lazy(() => import('./components/Instructor'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const StickyFooter = lazy(() => import('./components/StickyFooter'));
const Footer = lazy(() => import('./components/Footer'));
const Modal = lazy(() => import('./components/Modals'));
const EnrollmentModal = lazy(() => import('./components/EnrollmentModal'));

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

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

  const [isEnrollNowOpen, setIsEnrollNowOpen] = useState(false);

  const openEnroll = () => setIsEnrollModalOpen(true);
  const openEnrollNow = () => setIsEnrollNowOpen(true);
  const openBrochure = () => {
    const el = document.getElementById("brochure");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary selection:text-primary pb-24 sm:pb-20">
      <TopBanner onEnroll={openEnroll} />
      <main>
        <Hero onEnroll={openEnroll} onEnrollNow={openEnrollNow} onDownloadBrochure={openBrochure} />
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-outline">Loading...</div>}>
          <VideoSection onEnroll={openEnroll} />
          <Countdown />
          <Learn />
          <Outcomes />
          <Audience />
          <Curriculum />
          <Projects />
          <Tools />
          <Instructor />
          <FAQ />
          <FinalCTA onEnroll={openEnroll} onEnrollNow={openEnrollNow} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <StickyFooter onEnroll={openEnroll} onEnrollNow={openEnrollNow} />
        <EnrollmentModal isOpen={isEnrollNowOpen} onClose={() => setIsEnrollNowOpen(false)} />
        <Modal 
          isOpen={isEnrollModalOpen} 
          onClose={() => setIsEnrollModalOpen(false)} 
          title="Enrollment Form" 
          type="enroll" 
        />
      </Suspense>
    </div>
  );
}
