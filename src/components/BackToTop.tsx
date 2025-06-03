
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 glass-card p-3 rounded-full text-slate-600 hover:text-lavender-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-lavender-200/40 animate-fade-in"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;
