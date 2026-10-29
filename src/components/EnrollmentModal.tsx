import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RAZORPAY_LINK = "https://razorpay.me/@neshamatrainingandservicespri";
const WHATSAPP_NUMBER = "918143459888";
const WHATSAPP_MESSAGE =
  "Hello Neshama Training, I would like to confirm my enrollment in the Full-Stack AI Engineering course. " +
  "I have made the advance payment of Rs. 5,000 and am sharing my payment details for verification.\n\n" +
  "Name:\nTransaction ID / Reference:";

const bankDetails = [
  { label: "Account Name", value: "Neshama Training and Services Private Limited" },
  { label: "Account Number", value: "127461900001170" },
  { label: "IFSC Code", value: "YESB0001274" },
  { label: "Bank", value: "YES Bank" },
  { label: "Branch", value: "Vanasthali Puram" },
];

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start gap-4 mb-6">
                <h3 id="enroll-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  Confirm Your Enrollment
                </h3>
                <button
                  onClick={onClose}
                  className="text-outline hover:text-primary transition-colors text-sm font-semibold shrink-0 pt-2"
                >
                  Close
                </button>
              </div>

              <p className="text-on-surface-variant leading-relaxed mb-8">
                To confirm your enrollment, kindly pay an advance amount of{" "}
                <strong className="text-primary">₹5,000</strong>.
              </p>

              <section className="mb-8">
                <h4 className="text-lg font-bold text-primary mb-2">Payment via Razorpay</h4>
                <p className="text-on-surface-variant mb-4">
                  You can make the payment securely using the link below:
                </p>
                <a
                  href={RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block text-center bg-primary text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Pay on Razorpay
                </a>
                <a
                  href={RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-sm text-primary underline underline-offset-4 break-all"
                >
                  {RAZORPAY_LINK}
                </a>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-bold text-primary mb-2">Alternative Payment Method: Bank Transfer</h4>
                <p className="text-on-surface-variant mb-4">
                  If the Razorpay payment link is unavailable, please use the following bank details:
                </p>
                <dl className="rounded-2xl border border-outline-variant/40 divide-y divide-outline-variant/30 overflow-hidden">
                  {bankDetails.map((row) => (
                    <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 px-4 py-3 bg-surface-container-low">
                      <dt className="text-xs font-bold uppercase tracking-wider text-outline sm:w-40 shrink-0">
                        {row.label}
                      </dt>
                      <dd className="font-semibold text-primary break-words">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h4 className="text-lg font-bold text-primary mb-2">Payment Confirmation</h4>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  After completing the payment, kindly share your payment screenshot or transaction details via
                  WhatsApp at <strong className="text-primary">+91 81434 59888</strong> to confirm your enrollment.
                  Your enrollment is confirmed only after we verify your payment.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block text-center border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                >
                  Confirm Payment on WhatsApp
                </a>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
