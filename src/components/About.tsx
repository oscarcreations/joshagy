import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We deliver exceptional construction quality in every project, no matter the size.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2">
              Building Ghana's Future, One Project at a Time
            </h2>
            <p className="section-subtitle mb-6">
              Joshagy Company Limited is a trusted general contractor based in Tarkwa, 
              Western Region of Ghana. We specialize in delivering quality construction 
              solutions with professionalism, reliability, and a commitment to excellence.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver quality, reliable, and timely construction solutions that exceed 
                    client expectations while maintaining the highest standards of safety and professionalism.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become Ghana's most trusted construction partner, known for excellence, 
                    innovation, and sustainable building practices across the nation.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="card-construction">
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats Side */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                  Why Choose Joshagy?
                </h3>
                <p className="text-primary-foreground/70">
                  We're committed to building lasting relationships through exceptional work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-primary-foreground/80">Commitment</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-primary-foreground/80">Availability</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">Ghana</div>
                  <div className="text-sm text-primary-foreground/80">Nationwide</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">4.0★</div>
                  <div className="text-sm text-primary-foreground/80">Rated</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;