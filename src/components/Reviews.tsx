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
      content: "Very good company. Their attention to detail and commitment to quality is outstanding. Will work with them again.",
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
  ];

  return (
    <section id="reviews" className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Reviews</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-primary-foreground mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Our commitment to quality and customer satisfaction has earned us a 4.0 star rating
          </p>
          
          {/* Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-6 h-6 text-accent fill-accent" />
              ))}
              <Star className="w-6 h-6 text-accent/50" />
            </div>
            <span className="text-2xl font-heading font-bold text-primary-foreground ml-2">4.0</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
            >
              <Quote className="w-10 h-10 text-accent/50 mb-4" />
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-primary-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-accent fill-accent"
                          : "text-primary-foreground/30"
                      }`}
                    />
                  ))}
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