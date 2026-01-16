import { Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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
    "Building & Structural Works",
    "Renovation & Maintenance",
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
    <footer className="bg-foreground">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">J</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-background">Joshagy</span>
                <span className="block text-xs text-background/60 -mt-1">Company Limited</span>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Reliable Construction & Contracting Services in Tarkwa, Western Region of Ghana. 
              Building excellence, one project at a time.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1" />
                <a href="tel:+233244655948" className="text-background/70 text-sm hover:text-accent transition-colors">
                  024 465 5948
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-background/70 text-sm">
                  WT 0006, 9848 Stadium Ave,<br />
                  Tarkwa, Western Region, Ghana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-1" />
                <span className="text-background/70 text-sm">Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Joshagy Company Limited. All rights reserved.
            </p>
            <p className="text-background/40 text-xs">
              General Contractor • Tarkwa, Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;