/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Countdown from './components/Countdown';
import Learn from './components/Learn';
import Outcomes from './components/Outcomes';
import Audience from './components/Audience';
import Curriculum from './components/Curriculum';
import Tools from './components/Tools';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyFooter from './components/StickyFooter';
import Footer from './components/Footer';
import Modal from './components/Modals';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openEnroll = () => setIsEnrollModalOpen(true);
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
    </div>
  );
}
