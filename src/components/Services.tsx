import { Building2, Hammer, RefreshCcw, HardHat, Briefcase, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "General Construction",
      description: "Complete building solutions from foundation to finishing, delivering quality structures for residential and commercial needs.",
    },
    {
      icon: Hammer,
      title: "Building & Structural Works",
      description: "Expert structural engineering and building works ensuring safety, durability, and compliance with standards.",
    },
    {
      icon: RefreshCcw,
      title: "Renovation & Maintenance",
      description: "Upgrade and maintain your properties with our professional renovation and maintenance services.",
    },
    {
      icon: HardHat,
      title: "Civil Works",
      description: "Infrastructure development including roads, drainage systems, and public works projects.",
    },
    {
      icon: Briefcase,
      title: "Contracting & Project Management",
      description: "End-to-end project management ensuring your construction projects are delivered on time and within budget.",
    },
    {
      icon: Wrench,
      title: "Specialized Services",
      description: "Customized construction solutions tailored to meet your unique project requirements and specifications.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-2">
            Comprehensive Construction Solutions
          </h2>
          <p className="section-subtitle mx-auto">
            From residential buildings to large-scale commercial projects, we provide 
            complete construction services across Tarkwa and the Western Region of Ghana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-construction hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your project?
          </p>
          <a href="tel:+233244655948" className="btn-primary-construction">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;