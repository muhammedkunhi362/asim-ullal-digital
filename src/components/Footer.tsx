import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import DiacriticOrnament from "./DiacriticOrnament";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/practice-areas", label: "Practice Areas" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Wordmark & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <DiacriticOrnament className="text-accent w-5 h-5" variant="curl" />
              <div className="flex items-baseline gap-1 font-serif text-xl">
                <span className="text-brand-lime font-semibold">Of</span>
                <span className="text-brand-green font-bold">ArCr</span>
                <span className="text-brand-aqua font-semibold">Ino</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-serif italic">
              Building lawful solutions for business, life, and society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3 text-primary">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center gap-4 mb-6">
          <DiacriticOrnament className="text-accent/50" variant="accent" />
          <div className="flex-1 h-px bg-border" />
          <DiacriticOrnament className="text-accent/50" variant="dot" />
          <div className="flex-1 h-px bg-border" />
          <DiacriticOrnament className="text-accent/50" variant="accent" />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adv. Asim Ullal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
