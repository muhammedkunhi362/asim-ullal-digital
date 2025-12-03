import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/practice-areas", label: "Practice Areas" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/adv-asim-ullal-031b10341", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/adv.asim_ullal", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1Apnn5XBGU/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/asim_ullal", label: "X" },
  ];

  return (
    <footer className="bg-primary border-t border-primary">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 mb-3 group w-fit">
              <Logo className="text-primary-foreground group-hover:scale-105 transition-transform" />
              <span className="text-lg font-bold text-primary-foreground">Adv. Asim Ullal</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Legal & Business Consultant
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-primary-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground text-primary-foreground hover:text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mb-6">
          <div className="h-px bg-primary-foreground/20" />
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-primary-foreground/80"
        >
          <p>&copy; {new Date().getFullYear()} Adv. Asim Ullal. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
