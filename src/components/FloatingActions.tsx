import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const phoneNumber = "+233244655948";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in Joshagy Company's construction services.");

  return (
    <div className="floating-action">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-[#25D366] text-white hover:shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="floating-btn bg-primary text-primary-foreground hover:shadow-lg"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;