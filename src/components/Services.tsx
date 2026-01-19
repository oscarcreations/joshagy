import {
  Building2,
  Hammer,
  RefreshCcw,
  HardHat,
  Briefcase,
  Wrench,
  ArrowRight,
  DoorOpen,
} from "lucide-react";

const scrollToQuote = () => {
  const element = document.getElementById("contact");
  if (element) {
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    window.dispatchEvent(new CustomEvent("openQuoteForm"));
  }
};

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "General Construction",
      description:
        "Complete building solutions from foundation to finishing for residential and commercial projects.",
    },
    {
      icon: Hammer,
      title: "Structural Works",
      description:
        "Expert structural works ensuring durability, safety, and compliance with Ghana standards.",
    },
    {
      icon: RefreshCcw,
      title: "Renovation & Maintenance",
      description:
        "Professional renovation services to modernize and maintain properties efficiently.",
    },
    {
      icon: HardHat,
      title: "Civil Works",
      description:
        "Infrastructure projects including drainage systems, roads, and site preparation.",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description:
        "Complete project supervision to ensure quality delivery on time and within budget.",
    },
    {
      icon: Wrench,
      title: "Specialized Engineering Services",
      description:
        "Tailored engineering and industrial support services for unique project needs.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-sm font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-100/50 rounded-full">
            Our Core Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Building, Construction <br className="sm:hidden" /> & Refurbishment
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Reliable construction and refurbishment services designed to improve
            value, safety, and durability.
          </p>
        </div>

        {/* FEATURED SERVICE */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-600 to-orange-500 p-10 md:p-14 shadow-2xl">
            <DoorOpen className="absolute -right-6 -bottom-6 w-40 h-40 text-white/10" />

            <div className="relative z-10 max-w-3xl">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6">
                <DoorOpen className="w-8 h-8 text-orange-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Door Refurbishment & Finishing
              </h3>

              <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                We specialize in professional door refurbishment, repairs, and
                finishing for residential, commercial, and industrial buildings.
                Restore strength, security, and appearance without full
                replacement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToQuote}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-orange-50 transition-all"
                >
                  Request Door Service <ArrowRight size={18} />
                </button>
                <a
                  href="tel:+233244655948"
                  className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              <service.icon className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 group-hover:text-orange-50 transition-colors duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-orange-600">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
