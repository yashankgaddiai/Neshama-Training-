import { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'enroll' | 'brochure';
}

const FORM_URL = "https://api.leadconnectorhq.com/widget/form/J4MWsZl7IrxrNbibFudJ";
const SCRIPT_ID = "ghl-form-script";

function loadFormScript() {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.src = "https://link.msgsndr.com/js/form_embed.js";
  script.async = true;
  script.id = SCRIPT_ID;
  document.body.appendChild(script);
}

export default function Modal({ isOpen, onClose, title }: ModalProps) {
  // The iframe is mounted in the background once the page is idle, and then kept
  // mounted (hidden) so opening the modal shows an already-loaded form.
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const openedAtRef = useRef(0);

  useEffect(() => {
    const start = () => {
      setShouldLoad(true);
      loadFormScript();
    };
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(start, { timeout: 3000 });
      } else {
        setTimeout(start, 1500);
      }
    };
    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
      return () => window.removeEventListener('load', schedule);
    }
  }, []);

  // If the user opens the modal before the idle preload has fired, load right away.
  useEffect(() => {
    if (isOpen) {
      openedAtRef.current = Date.now();
      setShouldLoad(true);
      loadFormScript();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!shouldLoad && !isOpen) return null;

  return (
    // Closed state must use display:none. The GHL embed script puts
    // `visibility: visible; pointer-events: auto` inline on its iframe, which
    // overrides an invisible/pointer-events-none parent and leaves an invisible
    // iframe over the page that swallows clicks. A display:none iframe still loads.
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-[100] items-center justify-center p-2 sm:p-8 select-none ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {/* Ignore the backdrop for a moment after opening so a quick second tap on the button does not close the form */}
      <div
        onClick={() => {
          if (Date.now() - openedAtRef.current > 600) onClose();
        }}
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
      >
        <div className="px-2 py-5 sm:p-10">
          <div className="flex justify-between items-center mb-4 sm:mb-6 px-3 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">{title}</h3>
            <button onClick={onClose} className="text-outline hover:text-primary transition-colors text-base font-semibold">
              Close
            </button>
          </div>

          {/* No fixed height: the GHL embed script resizes the iframe to fit the whole form */}
          <div className="w-full min-h-[400px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                <p className="text-sm font-medium text-outline">Loading secure form...</p>
              </div>
            )}
            <iframe
              src={FORM_URL}
              style={{
                width: "100%",
                height: "640px",
                border: "none",
                borderRadius: "12px",
              }}
              id="ghl-form-J4MWsZl7IrxrNbibFudJ"
              title="AI Engineering — Neshama Training"
              tabIndex={isOpen ? 0 : -1}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
