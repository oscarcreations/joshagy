import {
  Building2,
  Hammer,
  RefreshCcw,
  HardHat,
  Wrench,
  ArrowRight,
  DoorOpen,
  Armchair,
  Lock,
  ShieldCheck,
  Stethoscope,
  Monitor
} from "lucide-react";

// Personal Image Imports
import wheelChair from "@/assets/wheelchair.jpg";
import safeLock from "@/assets/safelock.jpeg";
import door from "@/assets/door2.jpg";
import construction from "@/assets/hero-construction.jpg";
import civil from "@/assets/civil.jpg";
import office from "@/assets/office.jpg";
import hospital from "@/assets/hospital.jpg";

const scrollToQuote = () => {
  const element = document.getElementById("contact");
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

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
      title: "General Construction",
      description: "Complete building solutions from foundation to finishing for residential and commercial projects.",
      image: construction,
      icon: Building2,
    },
    {
      title: "Hospital Equipment Repairs",
      description: "Specialized maintenance of hospital beds, dental chairs, and medical furniture to ensure healthcare safety.",
      image: hospital,
      icon: Stethoscope,
      highlight: true,
    },
    {
      title: "Office Tech & AC Service",
      description: "Expert repairs for office equipment, air conditioning units, and industrial cooling systems.",
      image: office,
      icon: Monitor,
    },
    {
      title: "Chair & Furniture Fixing",
      description: "Restoration and repair for Office, Church, and Home chairs. We handle frames, upholstery, and mechanics.",
      image: wheelChair,
      icon: Armchair,
      highlight: true,
    },
    {
      title: "Safe Locks & Security",
      description: "Specialized servicing, installation, and unlocking of high-security safes and industrial lock systems.",
      image: safeLock,
      icon: Lock,
    },
    {
      title: "Civil Works",
      description: "Infrastructure projects including drainage systems, roads, and site preparation across Ghana.",
      image: civil,
      icon: HardHat,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-sm font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-100/50 rounded-full">
            Our Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Building, Repairs <br className="hidden md:block" /> & <span className="text-orange-600">Specialist</span> Services
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            From heavy infrastructure to high-precision medical and office equipment maintenance, 
            Joshagy is the trusted name in technical solutions.
          </p>
        </div>

        {/* FEATURED: DOOR REFURBISHMENT (Split Layout) */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl group">
            <div className="grid lg:grid-cols-2 items-stretch">
              
              {/* Left Content */}
              <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/30">
                    <DoorOpen className="text-white" size={24} />
                  </div>
                  <span className="text-orange-400 font-bold uppercase tracking-widest text-xs">Premium Service</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Professional <span className="text-orange-500">Door</span> Refurbishment
                </h3>
                
                <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-xl">
                  Restore the strength and beauty of your existing doors. We specialize in 
                  repairs, repainting, and structural reinforcement for homes, hospitals, and offices.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={scrollToQuote}
                    className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-orange-600/20 active:scale-95"
                  >
                    Book Door Service <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-72 lg:h-auto min-h-[450px] overflow-hidden">
                <img 
                  src={door} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Door Refurbishment Service"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-slate-900/60"></div>
              </div>

            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image Box */}
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                
                {service.highlight && (
                   <div className="absolute top-5 right-5 bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Highly Requested
                   </div>
                )}
              </div>

              {/* Content Box */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  <service.icon size={26} />
                </div>

                <h3 className="font-black text-xl text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <button 
                  onClick={scrollToQuote}
                  className="w-full py-4 border-2 border-slate-100 group-hover:border-orange-600 group-hover:bg-orange-600 text-slate-900 group-hover:text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  Request Quote <ShieldCheck size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;