
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-slate-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@yourname.com',
      color: 'hover:text-lavender-600'
    }
  ];

  return (
    <footer className="py-12 section-padding bg-gradient-to-r from-slate-50 to-lavender-50/50 border-t border-lavender-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Brand */}
          <div className="mb-6 md:mb-0">
            <div className="font-poppins font-bold text-xl gradient-text">
              Creative Developer
            </div>
            <p className="font-inter text-slate-600 text-sm mt-1">
              Crafting digital experiences with passion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-500 ${link.color} transition-all duration-300 hover:scale-110`}
                  aria-label={link.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-lavender-100">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p className="font-inter mb-4 md:mb-0">
              © {currentYear} Creative Developer. All rights reserved.
            </p>
            <p className="font-inter">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
