/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Countdown from './components/Countdown';
import Learn from './components/Learn';
import Outcomes from './components/Outcomes';
import Audience from './components/Audience';
import Curriculum from './components/Curriculum';
import Tools from './components/Tools';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyFooter from './components/StickyFooter';
import Footer from './components/Footer';
import Modal from './components/Modals';

// Add type for GHL
declare global {
  interface Window {
    _ghl?: {
      openForm: (id: string) => void;
    };
  }
}

export default function App() {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Load GHL script once
  useEffect(() => {
    if (!document.getElementById("ghl-form-script")) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      script.id = "ghl-form-script";
      document.body.appendChild(script);
    }
  }, []);

  // Function to open GHL form safely
  const openEnroll = () => {
    const interval = setInterval(() => {
      if (window._ghl && window._ghl.openForm) {
        window._ghl.openForm("J4MWsZl7IrxrNbibFudJ");
        clearInterval(interval);
      }
    }, 200);
  };

  const openBrochure = () => setIsBrochureModalOpen(true);

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary selection:text-primary pb-24 sm:pb-20">
      <TopBanner onEnroll={openEnroll} />
      <main>
        <Hero onEnroll={openEnroll} onDownloadBrochure={openBrochure} />
        <VideoSection />
        <Countdown />
        <Learn />
        <Outcomes />
        <Audience />
        <Curriculum />
        <Tools />
        <FAQ />
        <FinalCTA onEnroll={openEnroll} />
      </main>
      <Footer />
      <StickyFooter onEnroll={openEnroll} />

      <Modal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        title="Brochure Form" 
        type="brochure" 
      />
    </div>
  );
}
