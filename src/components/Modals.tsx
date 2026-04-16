import { X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'enroll' | 'brochure';
}

export default function Modal({ isOpen, onClose, title, type }: ModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      if (!document.getElementById("ghl-form-script")) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        script.id = "ghl-form-script";
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 sm:p-8">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary">{title}</h3>
                <button onClick={onClose} className="text-outline hover:text-primary transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="w-full h-[550px] relative">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                    <p className="text-sm font-medium text-outline">Loading secure form...</p>
                  </div>
                )}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/J4MWsZl7IrxrNbibFudJ"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "12px",
                  }}
                  id="ghl-form-J4MWsZl7IrxrNbibFudJ"
                  title="AI Engineering — Neshama Training"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
