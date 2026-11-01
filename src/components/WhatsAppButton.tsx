const WHATSAPP_LINK =
  "https://wa.me/918143459888?text=" +
  encodeURIComponent("Hi, I'd like to know more about the Full-Stack AI Engineering program.");

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 sm:right-6 bottom-24 sm:bottom-24 z-40 bg-secondary text-primary px-5 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      WhatsApp
    </a>
  );
}
