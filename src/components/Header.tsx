import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import DiacriticOrnament from "./DiacriticOrnament";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth px-3 py-2 rounded-md"
          activeClassName="text-primary font-semibold bg-primary/5"
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with brand colors */}
          <Link to="/" className="flex items-center gap-2 group">
            <DiacriticOrnament className="text-accent w-4 h-4 transition-smooth group-hover:scale-110" />
            <div className="flex items-baseline gap-1 font-serif text-lg">
              <span className="text-brand-lime font-semibold">Of</span>
              <span className="text-brand-green font-bold">ArCr</span>
              <span className="text-brand-aqua font-semibold">Ino</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-2 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
