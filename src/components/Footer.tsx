
export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-28 sm:pb-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Neshama Training Logo" 
                className="w-10 h-10 object-contain brightness-110 drop-shadow" 
              />
              <h3 className="text-2xl font-black tracking-tight text-white">Neshama Training</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building industry-ready AI engineers who take ownership and deliver real outcomes.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm font-semibold">
              <a
                href="https://wa.me/918143459888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:neshamatraining.info@gmail.com"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Email
              </a>
              <a
                href="tel:+918143459888"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Call
              </a>
              <a
                href="https://www.facebook.com/share/1DemBKja8s/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@NeshamaTraining"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/neshama.training"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/neshamatraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Program</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#blueprint" className="hover:text-secondary transition-colors">Blueprint</a></li>
              <li><a href="#roadmap" className="hover:text-secondary transition-colors">12-Week Roadmap</a></li>
              <li><a href="#curriculum" className="hover:text-secondary transition-colors">Curriculum</a></li>
              <li><a href="#projects" className="hover:text-secondary transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Career Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Career</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#career" className="hover:text-secondary transition-colors">Career Track</a></li>
              <li><a href="#roles" className="hover:text-secondary transition-colors">Roles</a></li>
              <li><a href="#fees" className="hover:text-secondary transition-colors">Fees</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details & Address */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Contact</h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                
                <a href="tel:+918143459888" className="hover:text-secondary transition-colors">+91 81434 59888</a>
              </li>
              <li className="flex items-center gap-2.5">
                
                <a href="tel:+919550143619" className="hover:text-secondary transition-colors">+91 95501 43619</a>
              </li>
              <li className="flex items-center gap-2.5">
                
                <a href="mailto:neshamatraining.info@gmail.com" className="hover:text-secondary transition-colors">neshamatraining.info@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                
                <span className="hover:text-secondary transition-colors">www.neshamatraining.com</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                
                <span className="leading-relaxed text-xs text-white/60">
                  Neshama Training and Services Private Limited<br />
                  House No: 7-126/49, Plot No: 49, Ground Floor<br />
                  Near Sri Vashista Real Estate "Y" Junction<br />
                  Kuntloor Village, Abdullapurmet Mandal, Hayath Nagar<br />
                  Rangareddy District, Telangana - 501505
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Neshama Training and Services Private Limited. All rights reserved.</p>
          <p>Full-Stack AI Engineering · Python + MERN + GenAI</p>
        </div>
      </div>
    </footer>
  );
}
