import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'enroll' | 'brochure';
}

export default function Modal({ isOpen, onClose, title, type }: ModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully! We will contact you soon.');
    onClose();
  };

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
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-primary">{title}</h3>
                <button onClick={onClose} className="text-outline hover:text-primary transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {type === 'enroll' ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Phone / WhatsApp</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+1 234 567 890" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Background</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                        <option>Beginner</option>
                        <option>Student</option>
                        <option>Professional</option>
                        <option>Developer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">City</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="New York" />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Phone</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+1 234 567 890" />
                    </div>
                  </>
                )}
                
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all mt-4">
                  {type === 'enroll' ? 'Submit Enrollment' : 'Download Brochure'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
