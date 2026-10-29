const RAZORPAY_LINK = "https://razorpay.me/@neshamatrainingandservicespri";
const WHATSAPP_MESSAGE =
  "Hello, I have paid the ₹5,000 advance amount for my course enrollment at Neshama Training and Services Private Limited. Please find my payment details attached and confirm my enrollment.";
const WHATSAPP_LINK = `https://wa.me/918143459888?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const bankDetails = [
  { label: "Account Name", value: "Neshama Training and Services Private Limited" },
  { label: "Account Number", value: "127461900001170" },
  { label: "IFSC Code", value: "YESB0001274" },
  { label: "Bank", value: "YES Bank" },
  { label: "Branch", value: "Vanasthali Puram" },
];

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex justify-between items-center h-18 py-3">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Neshama Training Logo" className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0" />
            <span className="text-lg sm:text-xl font-black tracking-tight text-primary leading-tight">Neshama Training</span>
          </a>
          <a href="/" className="text-sm font-bold text-primary hover:text-on-surface-variant transition-colors">
            Back to Course
          </a>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            Enrollment and Payment
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary mb-6">
            Confirm Your Enrollment
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
            To confirm your enrollment, kindly pay an advance amount of{" "}
            <strong className="text-primary">₹5,000</strong>.
          </p>

          <section className="bg-white rounded-3xl shadow-soft border border-outline-variant/30 p-6 sm:p-10 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Payment via Razorpay</h2>
            <p className="text-on-surface-variant mb-6">You can make the payment using the link below:</p>
            <a
              href={RAZORPAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block w-full sm:w-auto text-center bg-primary text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-xl transition-all"
            >
              Pay ₹5,000 Now
            </a>
            <a
              href={RAZORPAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-sm text-primary underline underline-offset-4 break-all"
            >
              {RAZORPAY_LINK}
            </a>
          </section>

          <section className="bg-white rounded-3xl shadow-soft border border-outline-variant/30 p-6 sm:p-10 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Alternative Payment Method: Bank Transfer</h2>
            <p className="text-on-surface-variant mb-6">
              If the Razorpay payment link is unavailable, you can transfer the advance amount using the following bank details:
            </p>
            <dl className="rounded-2xl border border-outline-variant/40 divide-y divide-outline-variant/30 overflow-hidden">
              {bankDetails.map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 px-4 sm:px-5 py-3.5 bg-surface-container-low">
                  <dt className="text-xs font-bold uppercase tracking-wider text-outline sm:w-44 shrink-0">{row.label}</dt>
                  <dd className="font-semibold text-primary break-words">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="bg-white rounded-3xl shadow-soft border border-outline-variant/30 p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Payment Confirmation</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              After completing the payment, please share your payment screenshot or transaction details via WhatsApp at{" "}
              <strong className="text-primary">+91 81434 59888</strong> for enrollment confirmation. Your enrollment is
              confirmed only after your payment has been verified.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block w-full sm:w-auto text-center border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-primary hover:text-white transition-all"
            >
              Confirm Payment on WhatsApp
            </a>
          </section>
        </div>
      </main>

      <footer className="px-4 sm:px-8 py-8 text-center text-sm text-outline border-t border-outline-variant/30">
        Neshama Training and Services Private Limited
      </footer>
    </div>
  );
}
