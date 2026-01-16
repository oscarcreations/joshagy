import { Target, Eye, Award, ShieldCheck, HardHat } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We deliver exceptional construction quality in every project.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Trust",
      description: "Strict safety protocols to protect our team and your investment.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-50 rounded-full">
              Establishment & Values
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.2] mb-6">
              Building Ghana's Future, <br className="hidden md:block" />
              <span className="text-orange-600">With Integrity</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Joshagy Company Limited is a premier general contractor based in **Tarkwa**. 
              We are partners in progress, specializing in civil engineering and 
              mining support with a reputation for unwavering reliability.
            </p>

            {/* Mission & Vision Cards - Stacked on Mobile */}
            <div className="grid gap-4 md:gap-6 mb-10 text-left">
              <div className="flex flex-col sm:flex-row gap-4 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-200 mx-auto sm:mx-0">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 text-center sm:text-left">Our Mission</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-snug text-center sm:text-left">
                    To provide high-quality, timely construction solutions that exceed 
                    expectations and safety standards.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-200 mx-auto sm:mx-0">
                  <Eye className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 text-center sm:text-left">Our Vision</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-snug text-center sm:text-left">
                    To be the gold standard of construction in Ghana, recognized for 
                    sustainable engineering innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Value Points - 2 columns on even small screens */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 text-left">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-orange-600">
                    <value.icon size={18} className="font-bold flex-shrink-0" />
                    <h4 className="font-bold text-slate-900 uppercase tracking-wide text-[10px] md:text-xs">{value.title}</h4>
                  </div>
                  <p className="text-[11px] md:text-sm text-slate-500 leading-tight">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Side - Responsive Grid inside the Dark Box */}
          <div className="relative order-1 lg:order-2 px-2 md:px-0">
            <div className="relative z-10 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="relative z-20">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                  <div className="hidden sm:block w-12 h-1 bg-orange-600" />
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">Why Joshagy?</h3>
                </div>

                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-5xl font-black text-orange-500 mb-1">100%</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Commitment</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-5xl font-black text-orange-500 mb-1">24/7</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Response</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-5xl font-black text-orange-500 mb-1">Base</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Tarkwa, GH</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-5xl font-black text-orange-500 mb-1">4.0★</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Client Rating</div>
                  </div>
                </div>

                <div className="mt-10 p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-2 md:p-3 bg-orange-600 rounded-lg shrink-0">
                      <HardHat className="text-white" size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm md:text-base leading-none">Licensed & Certified</p>
                      <p className="text-slate-400 text-[10px] md:text-xs mt-1">Professional Contractors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Design Accents - Hidden on small mobile to avoid horizontal scroll */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 bg-orange-100 rounded-3xl -z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;