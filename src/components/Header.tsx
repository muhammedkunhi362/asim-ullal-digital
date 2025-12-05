import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, Home, User, Scale, Calendar, HelpCircle, Building, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
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

  const mainNavItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: User },
    { to: "/practice-areas", label: "Practice Areas", icon: Scale },
    { to: "/ibizlaw", label: "iBizlaw", icon: Building },
  ];

  const actionNavItems = [
    { to: "/book-consultation", label: "Book Consultation", icon: Calendar },
    { to: "/ask-question", label: "Ask a Question", icon: HelpCircle },
    { to: "/contact", label: "Contact", icon: Phone },
  ];

  const allNavItems = [...mainNavItems, ...actionNavItems];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {allNavItems.map((item, index) => (
        <motion.div
          key={item.to}
          initial={mobile ? { opacity: 0, x: -20 } : false}
          animate={mobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.2, delay: index * 0.03 }}
        >
          <NavLink
            to={item.to}
            className={mobile 
              ? "block text-base font-medium text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/10"
              : "text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/5 relative group"
            }
            activeClassName={mobile 
              ? "text-primary font-semibold bg-primary/10"
              : "text-primary font-semibold bg-primary/5"
            }
          >
            {item.label}
            {!mobile && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>}
          </NavLink>
        </motion.div>
      ))}
    </>
  );

  const MobileNavItem = ({ item, index }: { item: typeof mainNavItems[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <SheetClose asChild>
        <NavLink
          to={item.to}
          className="flex items-center gap-3 py-3 px-3 rounded-xl text-foreground/80 hover:bg-muted hover:text-foreground transition-all duration-200"
          activeClassName="bg-primary/10 text-primary font-medium"
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[15px]">{item.label}</span>
        </NavLink>
      </SheetClose>
    </motion.div>
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
            <SheetContent 
              side="right" 
              className="w-72 p-0 border-l-0 bg-card shadow-2xl"
            >
              {/* Header with Logo Only - Close button is built into SheetContent */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/30">
                <Link to="/" className="flex items-center gap-2">
                  <Logo className="text-primary" />
                </Link>
              </div>

              {/* Navigation Sections */}
              <div className="px-4 py-5 flex flex-col h-[calc(100%-80px)]">
                {/* Main Navigation */}
                <div className="mb-6">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                    Navigation
                  </p>
                  <nav className="flex flex-col gap-1">
                    {mainNavItems.map((item, index) => (
                      <MobileNavItem key={item.to} item={item} index={index} />
                    ))}
                  </nav>
                </div>

                {/* Actions Navigation */}
                <div>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                    Quick Actions
                  </p>
                  <nav className="flex flex-col gap-1">
                    {actionNavItems.map((item, index) => (
                      <MobileNavItem key={item.to} item={item} index={mainNavItems.length + index} />
                    ))}
                  </nav>
                </div>

                {/* Footer Info */}
                <div className="mt-auto pt-4 border-t border-border/30">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-center gap-3 px-3 py-3 bg-muted/50 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">Adv. Asim Ullal</p>
                      <p className="text-xs text-muted-foreground">Legal Consultant</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
