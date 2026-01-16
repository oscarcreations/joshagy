import { Phone, FileText, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Joshagy Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Open 24 Hours</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Reliable Construction & Contracting Services in{" "}
            <span className="text-gradient-gold">Tarkwa, Ghana</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Joshagy Company Limited delivers quality, reliable, and timely construction solutions. 
            Your trusted partner for building excellence in the Western Region and beyond.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="tel:+233244655948" className="btn-accent-construction">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button 
              onClick={() => scrollToSection("#contact")}
              className="btn-construction bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20"
            >
              <FileText className="w-5 h-5" />
              Request a Quote
            </button>
            <button 
              onClick={() => scrollToSection("#partnerships")}
              className="btn-construction bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20"
            >
              <Handshake className="w-5 h-5" />
              Partner With Us
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">24/7</div>
              <div className="text-sm text-primary-foreground/70">Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">4.0</div>
              <div className="text-sm text-primary-foreground/70">Star Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">Ghana</div>
              <div className="text-sm text-primary-foreground/70">Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;