import { Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "General Construction",
    "Structural Works",
    "Renovations",
    "Civil Works",
    "Project Management",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 pt-16 md:pt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-900/20">
                <span className="text-white font-black text-xl">J</span>
              </div>
              <div className="leading-none">
                <span className="font-black text-xl text-white tracking-tighter uppercase">Joshagy</span>
                <span className="block text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase">Company Ltd</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Excellence in civil engineering and mining support. Delivering high-quality 
              construction solutions across the Western Region of Ghana.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/joshagy", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/joshagy", label: "Twitter" },
                { Icon: Instagram, href: "https://instagram.com/joshagy", label: "Instagram" },
                { Icon: Linkedin, href: "https://linkedin.com/company/joshagy", label: "LinkedIn" },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all duration-300 border border-white/10 hover:border-orange-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-orange-500 text-sm transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-orange-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Our Expertise</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-slate-400 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600/40" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Direct Contact</h4>
            <div className="space-y-4">
              <a href="tel:+233244655948" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                   <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Phone</p>
                  <p className="text-slate-200 text-sm font-bold mt-0.5">024 465 5948</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">
                   <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Head Office</p>
                  <p className="text-slate-200 text-sm font-bold mt-0.5 leading-relaxed">
                    Stadium Ave, Tarkwa<br />Western Region, GH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm font-medium">
              © {currentYear} <span className="text-slate-300">Joshagy Company Limited</span>. 
            </p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mt-1">
              General Contractor & Mining Support Specialists
            </p>
          </div>
          
          {/* Mini Footer: Developer Credit */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Digital Solutions by</p>
            <a 
              href="https://mildaxtechnology.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors font-bold text-sm"
            >
              Mildax Technology
              <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;