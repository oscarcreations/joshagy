import {
  Building2,
  Hammer,
  RefreshCcw,
  HardHat,
  Briefcase,
  Wrench,
  ArrowRight,
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

    // Custom Event to tell the Contact form to switch to "Quote" mode
    window.dispatchEvent(new CustomEvent("openQuoteForm"));
  }
};

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "General Construction",
      description:
        "Complete building solutions from foundation to finishing, delivering quality structures for residential and commercial needs.",
    },
    {
      icon: Hammer,
      title: "Structural Works",
      description:
        "Expert structural engineering and building works ensuring safety, durability, and compliance with Ghana standards.",
    },
    {
      icon: RefreshCcw,
      title: "Renovation",
      description:
        "Modernize and maintain your properties with our professional renovation and industrial maintenance services.",
    },
    {
      icon: HardHat,
      title: "Civil Works",
      description:
        "Infrastructure development including roads, drainage systems, and public works projects across the Western Region.",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description:
        "End-to-end management ensuring your construction projects are delivered on time and within budget.",
    },
    {
      icon: Wrench,
      title: "Specialized Services",
      description:
        "Customized mining support and engineering solutions tailored to meet your unique project specifications.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-sm font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-100/50 rounded-full">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Comprehensive <br className="sm:hidden" /> Construction Solutions
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            From industrial mining support to residential developments, we
            provide expert engineering services across Tarkwa and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <service.icon className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 group-hover:text-orange-50 transition-colors duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-500 shadow-lg shadow-slate-200 group-hover:shadow-orange-200">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA Box */}
        <div className="mt-16 md:mt-24 p-8 md:p-12 rounded-[2rem] bg-slate-900 relative overflow-hidden text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a custom solution for your project?
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Whether it's a small renovation or a large-scale mining project,
              Joshagy is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+233244655948"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-orange-900/40"
              >
                Discuss Your Project
              </a>
              <button
                onClick={scrollToQuote}
                className="w-full sm:w-auto text-white border border-white/20 hover:bg-white/5 px-10 py-4 rounded-xl font-bold transition-all"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
