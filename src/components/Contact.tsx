import { useState } from "react";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "024 465 5948",
      href: "tel:+233244655948",
      action: "Call Now",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "WT 0006, 9848 Stadium Ave, Tarkwa, Western Region, Ghana",
      href: "https://maps.google.com/?q=Tarkwa,Ghana",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Open 24 Hours",
      href: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contact Us</span>
          <h2 className="section-title mt-2">
            Get in Touch
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to start your construction project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {info.content}
                    </p>
                    {info.href && (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        {info.action} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Embed */}
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31765.442481543!2d-1.9966!3d5.3052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe69e6c6e53a3c7%3A0x4b8d1c8d1f5a6c8!2sTarkwa%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Joshagy Company Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 lg:p-8 shadow-sm">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
              Send us a Message
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="+233 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="w-full btn-primary-construction">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;