import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Send, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isQuoteRequest, setIsQuoteRequest] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "General Construction",
    message: "",
  });

  // Listener for the "Get a Quote" buttons from other sections
  useEffect(() => {
    const handleOpenQuote = () => setIsQuoteRequest(true);
    window.addEventListener('openQuoteForm', handleOpenQuote);
    return () => window.removeEventListener('openQuoteForm', handleOpenQuote);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ownerPhone = "233244655948";

    // 1. Determine the Header based on the toggle state
    const header = isQuoteRequest ? "*NEW PROJECT QUOTE REQUEST*" : "*GENERAL CUSTOMER INQUIRY*";

    // 2. Build the message string
    let message = `${header}%0A%0A` +
      `*Client Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || "Not provided"}%0A`;

    // 3. Add Project Type only if it's a quote request
    if (isQuoteRequest) {
      message += `*Project Category:* ${formData.projectType}%0A`;
    }

    message += `%0A*Message:*%0A${formData.message}`;

    // 4. Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${message}`;

    // 5. Execution & Feedback
    toast.success("Opening WhatsApp...");
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "General Construction",
        message: "",
      });
    }, 800);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+233 24 465 5948",
      href: "tel:+233244655948",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "joshuagyecompany@gmail.com",
      href: "mailto:joshuagyecompany@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Stadium Ave, Tarkwa, GH",
      href: "https://maps.google.com/?q=Joshagy+Company+Limited+Tarkwa",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Get In <span className="text-orange-600">Touch</span>
              </h2>
              <p className="text-slate-600 text-base mb-8">
                Ready to start? Contact us for a free consultation or a detailed
                project quote.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.title === "Office" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-orange-600 flex items-center justify-center transition-colors shadow-lg">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {info.title}
                    </h4>
                    <p className="text-slate-900 font-bold text-sm sm:text-base">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Compact Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 h-48 md:h-64 shadow-inner relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.197368531742!2d-1.9950561242337773!3d5.303011035659756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb6f1e2e39e4d5%3A0x2258e67099f4a8b2!2sJOSHAGY%20COMPANY%20LIMITED!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                className="w-full h-full transition-all duration-500 group-hover:grayscale-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200 shadow-sm pointer-events-none">
                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Head Office</p>
                <p className="text-xs font-black text-slate-900">Stadium Ave, Tarkwa</p>
              </div>
            </div>
          </div>

          {/* Right: The Dynamic Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-slate-100 relative">
              
              {/* Toggle Buttons */}
              <div className="flex p-1 bg-slate-100 rounded-2xl mb-10 max-w-sm mx-auto md:mx-0">
                <button
                  type="button"
                  onClick={() => setIsQuoteRequest(false)}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                    !isQuoteRequest ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                  }`}
                >
                  General Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setIsQuoteRequest(true)}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                    isQuoteRequest ? "bg-orange-600 text-white shadow-lg" : "text-slate-500"
                  }`}
                >
                  Get a Quote
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                      placeholder="+233..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email (Optional)</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {isQuoteRequest && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Type *</label>
                    <select
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none appearance-none"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option>General Construction</option>
                      <option>Mining Support</option>
                      <option>Civil Works</option>
                      <option>Renovation</option>
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none"
                    placeholder={isQuoteRequest ? "Describe project location and requirements..." : "How can we help?"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl ${
                    isQuoteRequest ? "bg-orange-600 hover:bg-orange-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {isQuoteRequest ? "Submit Quote via WhatsApp" : "Send WhatsApp Message"}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;