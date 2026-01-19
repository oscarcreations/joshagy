import { useState, useEffect } from "react";
import { Phone, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import jordan from "@/assets/jordan.png";
import doorBefore from "@/assets/door2.jpg";


// const doorAfter =
//   "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=500&q=80";

const reviews = [
  {
    name: "Jordan Asare",
    role: "Verified Client",
    text: "Professional work with amazing attention to detail.",
    image: jordan,
  },
  {
    name: "Sunny Low",
    role: "Project Partner",
    text: "Excellent door refurbishment and building work.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction Project"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-orange-500 mb-4 font-bold text-xs md:text-sm uppercase tracking-[0.25em]">
              <Clock size={16} className="animate-pulse" />
              Door Refurbishment Experts
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4">
              <span className="text-orange-500 underline decoration-orange-500/30">
                Door Refurbishment
              </span>{" "}
              & Construction
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-md lg:max-w-lg">
              Restoring, reinforcing, and refinishing doors for homes, offices, 
              and industrial buildings in Tarkwa.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="tel:+233244655948"
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-900/30"
              >
                Call Now <Phone size={20} />
              </a>
              <a
                href="#services"
                className="border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                View Services
              </a>
            </div>
          </div>

          {/* RIGHT VISUALS */}
          <div className="relative hidden lg:flex items-center justify-end">
            {/* Door Before/After Images */}
            <div className="absolute right-36 top-12 rotate-[-8deg] z-0">
              <img
                src={doorBefore}
                alt="Door before refurbishment"
                className="w-60 rounded-xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="absolute right-12 top-48 rotate-[6deg] z-0">
              <img
                // src={doorAfter}
                alt="Door after refurbishment"
                className="w-72 rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Review Card */}
            <div className="relative z-10 max-w-sm">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white text-base italic leading-relaxed mb-6">
                  "{reviews[currentReview].text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <p className="text-white font-bold text-sm">
                      {reviews[currentReview].name}
                    </p>
                    <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider">
                      {reviews[currentReview].role}
                    </p>
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
