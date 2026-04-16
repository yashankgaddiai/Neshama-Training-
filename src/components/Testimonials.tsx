import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      text: "Built a RAG chatbot and landed a ₹1.2L freelance AI project.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBKJ3KCNpCHxFO2vDmdP6NtCjOvAvCBKAOQ0yclt-bcqm2nb8gFEajrOZF1L9FI8twjyfd79Z6zP3VQRSY79T05CY6j0W1BmT2POsGSS7NheADtoC50MREnl5AL2qd4-vFp7piMN0FeuPu8LPLKEOMK-kZ-IRO0hHmHNqTrp0nKNU6kt8UntxBQGP-Gd5WOwTSD2BZbUMCvOS-YfV-SgFZKd_ZqnNP405dKYKK_GxHZ0b62M8N23Hl3_5jtsRnTLYHYQdK2MTGdcc"
    },
    {
      name: "Arjun Mehta",
      location: "Bengaluru",
      text: "Improved productivity using AI-assisted development tools.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO1m0qMU5Na94VgAMi00GcmH-ppXQSzmebzmN8zPssvbFEid-oMBRDwkgipE-uPIHmwAL5f5viif_4Jv6Mgwg2-t5ER7Co2ebR_GMLDTl1WNod3KwkYZS_bqzoZ3aw59f96RXq8Y-mN7XOg4RI1cJJ5ROfNaamcU-a7Z-yzSi_uslalNLkHLeeiQnOtJ7v77zX-dsqKTkrq3qIgLbDQzyOOSX87TwIUGM2nkSoYUMu-5Xj5d1nl8Ikg_ftMNSs4UUytTDklZSlKJQ"
    },
    {
      name: "Fatima Khan",
      location: "Mumbai",
      text: "Built a portfolio with AI apps and impressed interviewers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdzP1p1mPqpWq956lZMm6avqOWaY0ZqM3u3Wcfcjz2V3D0V7UcGxxeeQiPQ9B89HSVuYY-zUmtm2OGsBEc1X64_7S0fg7fWAg4cpPwuKUsR3zprdesycaGQeSdEUkR-EXnCficWNovhGeed8JqfYczJUqjyOuGeybyTu6s1vbUJ8f1P-U26LDaEQYkdVQA-yW8v7Nlfny6uZU0zn7ITYwYn5jOxaPkKtRvN9VAux52MgWbnHI0GXxfkkRlsJHMLX6y3T-_7VbZ7sk"
    }
  ];

  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            💬 Student Stories
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary">Success Stories</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white shadow-soft flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-secondary/20">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex text-secondary mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <h4 className="text-xl font-bold text-primary mb-1">{testimonial.name}</h4>
              <p className="text-xs font-bold text-outline uppercase tracking-widest mb-4">{testimonial.location}</p>
              <p className="text-on-surface-variant font-medium italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
