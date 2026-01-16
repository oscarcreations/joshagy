import { useState, useEffect } from "react";
import { Phone, Star, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import jordan from "@/assets/jordan.png";

const reviews = [
  {
    name: "Jordan Asare",
    role: "Verified Client",
    text: "Very Good company. Highly recommended for any serious construction project in Ghana.",
    image: jordan,
  },
  {
    name: "Sunny Low",
    role: "Project Partner",
    text: "He is very very good. The attention to detail on our site clearing was impressive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image with stronger mobile overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Engineering Project"
          className="w-full h-full object-cover opacity-50 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/40 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 lg:slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 text-orange-500 mb-4 md:mb-6 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
              <Clock size={16} className="animate-pulse" />
              Serving Ghana 24/7
            </div>

            {/* Responsive Text: text-4xl for mobile, text-7xl for desktop */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-8">
              Constructing <br className="hidden sm:block" /> 
              <span className="text-orange-500 underline decoration-orange-500/30">With Integrity</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Based in Tarkwa, Western Region, Joshagy Company Ltd provides 
              world-class general contracting, mining support, and engineering 
              partnerships.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
              <a 
                href="tel:+233244655948" 
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-orange-900/20 w-full sm:w-auto"
              >
                Contact Now <Phone size={20} />
              </a>
              <button 
                onClick={() => scrollToSection('services')}
                className="border border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Side: Animated Review Carousel (Hidden on very small mobile, visible on tablet/desktop) */}
          <div className="hidden sm:flex flex-col items-center lg:items-end animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="relative group w-full max-w-[380px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>

                <div className="min-h-[100px] md:min-h-[110px]">
                  <p className="text-white text-base md:text-lg italic leading-relaxed" key={currentReview}>
                    "{reviews[currentReview].text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-orange-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${reviews[currentReview].name}&background=f97316&color=fff` }}
                  />
                  <div>
                    <p className="text-white font-bold text-sm md:text-base">{reviews[currentReview].name}</p>
                    <p className="text-orange-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider">{reviews[currentReview].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;