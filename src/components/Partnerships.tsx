import { useState } from "react";
import { Handshake, Building, Truck, DollarSign, Send, CheckCircle2 } from "lucide-react";
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

    // 1. Business owner's phone number
    const ownerPhone = "233244655948";

    // 2. Format the WhatsApp message with bold headers and line breaks
    const message = `*NEW PARTNERSHIP INQUIRY* %0A%0A` +
      `*Name:* ${formData.name} %0A` +
      `*Company:* ${formData.company || "N/A"} %0A` +
      `*Email:* ${formData.email} %0A` +
      `*Phone:* ${formData.phone} %0A` +
      `*Type:* ${formData.partnershipType} %0A` +
      `*Message:* ${formData.message}`;

    // 3. Create URL
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${message}`;

    // 4. Feedback and Execution
    toast.success("Redirecting to WhatsApp...");
    
    // Small delay to let the toast show before the tab opens
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      
      // Reset form
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
      icon: DollarSign,
      title: "Investors",
      description: "Join us in building Ghana's infrastructure with promising returns.",
    },
    {
      icon: Truck,
      title: "Suppliers",
      description: "Partner with us as a trusted material or equipment supplier.",
    },
    {
      icon: Building,
      title: "Developers",
      description: "Collaborate on large-scale residential and commercial projects.",
    },
    {
      icon: Handshake,
      title: "Contractors",
      description: "Sub-contracting opportunities for specialized engineering services.",
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
              Joshagy Company Limited is actively seeking partnerships with investors, 
              suppliers, and developers. Together, we can contribute to Ghana's growth 
              while achieving mutual success.
            </p>

            {/* Partner Types Grid */}
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {partnerTypes.map((type, index) => (
                <div key={index} className="group p-5 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:shadow-xl hover:border-orange-200">
                  <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-200">
                    <type.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{type.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 size={20}/> Certified</div>
               <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 size={20}/> Professional</div>
               <div className="flex items-center gap-2 font-bold text-slate-400"><CheckCircle2 size={20}/> Reliable</div>
            </div>
          </div>

          {/* Partnership Form Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-slate-900 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl border border-slate-100">
              <h3 className="font-bold text-2xl text-slate-900 mb-8 flex items-center gap-3">
                <Send className="text-orange-600" size={24} />
                Partner With Us
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      placeholder="e.g. Mining Solutions Ltd"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      placeholder="+233..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Partnership Type *</label>
                  <select
                    required
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="investor">Investor</option>
                    <option value="supplier">Supplier</option>
                    <option value="developer">Developer</option>
                    <option value="contractor">Sub-Contractor</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                    placeholder="How can we work together?"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
                >
                  Send Inquiry <Send size={18} />
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