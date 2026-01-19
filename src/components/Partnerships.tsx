import { useState } from "react";
import { Handshake, Building, Truck, DollarSign, Send, CheckCircle2, Key } from "lucide-react";
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
    const ownerPhone = "233244655948";

    const message = `*NEW PARTNERSHIP/PROPERTY INQUIRY* %0A%0A` +
      `*Name:* ${formData.name} %0A` +
      `*Company:* ${formData.company || "N/A"} %0A` +
      `*Email:* ${formData.email} %0A` +
      `*Phone:* ${formData.phone} %0A` +
      `*Type:* ${formData.partnershipType} %0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${message}`;

    toast.success("Opening WhatsApp...");
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        partnershipType: "",
        message: "",
      });
    }, 1000);
  };

  const partnerTypes = [
    {
      icon: Key,
      title: "Property Sellers",
      description: "Have land or a building to sell? We help you find the right buyers or develop it.",
      highlight: true,
    },
    {
      icon: DollarSign,
      title: "Investors",
      description: "Join us in building Ghana's infrastructure with promising returns.",
    },
    {
      icon: Building,
      title: "Developers",
      description: "Collaborate on large-scale residential and commercial projects.",
    },
    {
      icon: Handshake,
      title: "Sub-Contractors",
      description: "Opportunities for specialized engineering and maintenance services.",
    },
  ];

  return (
    <section id="partnerships" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-50 rounded-full">
              Growth & Collaboration
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Let's Build <span className="text-orange-600">Together</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Joshagy Company Limited is expanding. Whether you are an investor, a supplier, or 
              looking to **sell your property**, we provide the professional platform for success.
            </p>

            {/* Partner Types Grid */}
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {partnerTypes.map((type, index) => (
                <div key={index} className={`group p-5 rounded-2xl border transition-all hover:bg-white hover:shadow-xl ${type.highlight ? 'border-orange-200 bg-orange-50/30' : 'border-slate-100 bg-slate-50'}`}>
                  <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-200">
                    <type.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{type.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 opacity-50">
               <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 size={20}/> Professional Valuation</div>
               <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 size={20}/> Fast Processing</div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="relative bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl border border-slate-100">
              <h3 className="font-bold text-2xl text-slate-900 mb-8">Work With Us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-orange-500 outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-orange-500 outline-none"
                  />
                </div>

                <select
                  required
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-orange-500 outline-none"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="Property Seller">I want to Sell a Property</option>
                  <option value="Investor">Investor Opportunity</option>
                  <option value="Developer">Real Estate Development</option>
                  <option value="Sub-Contractor">Sub-Contractor / Supplier</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us more about your property or proposal..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-orange-500 outline-none resize-none"
                />

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;