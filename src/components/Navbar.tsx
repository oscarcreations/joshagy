import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Partnerships", href: "partnerships" },
    { name: "Reviews", href: "reviews" },
  ];

  // Professional Smooth Scroll Logic
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Accounting for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo - Clicks back to home */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                JOSHAGY
              </h1>
              <p className={`text-[10px] uppercase font-semibold ${isScrolled ? "text-orange-600" : "text-orange-400"}`}>
                Company Limited
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Call Action */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+233244655948"
              className="hidden md:flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-orange-900/20"
            >
              <Phone size={16} />
              024 465 5948
            </a>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-orange-500 p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-base font-bold text-slate-800 uppercase tracking-wide py-2 border-b border-gray-50 last:border-0 hover:text-orange-600"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+233244655948"
              className="flex items-center justify-center gap-2 bg-orange-600 text-white py-4 rounded-xl font-bold mt-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;