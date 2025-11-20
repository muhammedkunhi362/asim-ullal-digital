import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const Header = () => {
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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
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
              <Button variant="ghost" size="icon" className="hover:bg-primary/5">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center mb-8">
                <Logo className="text-primary" />
              </div>
              <nav className="flex flex-col gap-1">
                <NavLinks mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
