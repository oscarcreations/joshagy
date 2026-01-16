import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const phoneNumber = "+233244655948";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in Joshagy Company's construction services. I would like to get more information.");

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999] items-end">
      {/* WhatsApp Button with Pulse Effect */}
      <div className="relative group">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <a
          href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          
          {/* Desktop Label (Hidden on Mobile) */}
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Phone Button */}
      <div className="group relative">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-14 h-14 bg-orange-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6 fill-current" />

          {/* Desktop Label (Hidden on Mobile) */}
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;