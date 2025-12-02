import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/practice-areas", label: "Practice Areas" },
    { to: "/book-consultation", label: "Book Consultation" },
    { to: "/ask-question", label: "Ask a Question" },
    { to: "/ibizlaw", label: "iBizlaw" },
    { to: "/contact", label: "Contact" },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item, index) => (
        <motion.div
          key={item.to}
          initial={mobile ? { opacity: 0, x: -20 } : false}
          animate={mobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <NavLink
            to={item.to}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/5 relative group"
            activeClassName="text-primary font-semibold bg-primary/5"
          >
            {item.label}
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </NavLink>
        </motion.div>
      ))}
    </>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{ 
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'auto'
      }}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-primary"
            >
              <Logo className="text-primary" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/5 flex-shrink-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-4">
              <div className="flex items-center mb-4">
                <Logo className="text-primary" />
              </div>
              <nav className="flex flex-col gap-1">
                <NavLinks mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
