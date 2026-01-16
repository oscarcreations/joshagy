import { useState } from "react";
import { Handshake, Building, Truck, DollarSign, Send } from "lucide-react";
import { toast } from "sonner";

const Partnerships = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Partnership inquiry submitted! We'll be in touch soon.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: "",
    });
  };

  const partnerTypes = [
    {
      icon: DollarSign,
      title: "Investors",
      description: "Join us in building Ghana's infrastructure with promising returns.",
    },
    {
      icon: Truck,
      title: "Suppliers",
      description: "Partner with us as a material or equipment supplier.",
    },
    {
      icon: Building,
      title: "Developers",
      description: "Collaborate on residential and commercial development projects.",
    },
    {
      icon: Handshake,
      title: "Contractors",
      description: "Sub-contracting opportunities for specialized services.",
    },
  ];

  return (
    <section id="partnerships" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Partnerships</span>
            <h2 className="section-title mt-2">
              Let's Build Together
            </h2>
            <p className="section-subtitle mb-8">
              Joshagy Company Limited is actively seeking partnerships with investors, 
              suppliers, developers, and fellow contractors. Together, we can achieve 
              greater success and contribute to Ghana's growth.
            </p>

            {/* Partner Types */}
            <div className="grid sm:grid-cols-2 gap-4">
              {partnerTypes.map((type, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <type.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">{type.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-construction-md">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Partnership Inquiry
            </h3>
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
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="ABC Construction Ltd"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="you@example.com"
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
                  Partnership Type *
                </label>
                <select
                  required
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <option value="">Select partnership type</option>
                  <option value="investor">Investor</option>
                  <option value="supplier">Supplier</option>
                  <option value="developer">Developer</option>
                  <option value="contractor">Contractor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Tell us about your partnership interest..."
                />
              </div>

              <button type="submit" className="w-full btn-accent-construction">
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;