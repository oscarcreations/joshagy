import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Kwame A.",
      role: "Property Developer",
      content: "Very very good company. Professional team, quality work, and they delivered on time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah M.",
      role: "Business Owner",
      content: "Very good company. Their attention to detail and commitment to quality is outstanding.",
      rating: 4,
    },
    {
      name: "Emmanuel K.",
      role: "Homeowner",
      content: "Joshagy handled our home renovation perfectly. Great communication throughout the project.",
      rating: 4,
    },
    {
      name: "Akua D.",
      role: "Project Manager",
      content: "Reliable and trustworthy. They understand the local construction needs and deliver accordingly.",
      rating: 4,
    },
    // ... rest of your data
  ];

  return (
    <section id="reviews" className="py-16 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        
        {/* Header - Tightened mb-8 on mobile, mb-16 on desktop */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-sm font-bold tracking-[0.2em] text-orange-500 uppercase bg-orange-500/10 rounded-full">
            Testimonials
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 md:mb-6">
            What Our Clients <span className="text-orange-500">Say</span>
          </h2>
          
          {/* Rating Card - Compact on mobile */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 flex flex-col items-center shadow-2xl">
             <div className="flex items-center gap-1 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={18} className="text-orange-500 fill-orange-500" />
                ))}
                <Star size={18} className="text-slate-600 fill-slate-600" />
             </div>
             <p className="text-white font-bold text-base md:text-lg">4.0 / 5.0 Rating</p>
          </div>
        </div>

        {/* Testimonials Grid - Reduced gap for mobile */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-2xl md:rounded-[2rem] p-6 md:p-8 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-orange-500/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-slate-700"}
                    />
                  ))}
                </div>

                <p className="text-slate-200 text-sm md:text-lg italic leading-relaxed mb-6 md:mb-8">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 border-t border-white/10 pt-5 md:pt-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center text-orange-500 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;