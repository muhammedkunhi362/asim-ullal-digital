import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CurvedRibbon from "@/components/CurvedRibbon";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import { Scale, Briefcase, FileText, Users, Shield, Building } from "lucide-react";
import advocateProfile from "@/assets/advocate-profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const highlights = [
    { icon: Scale, label: "Civil & Property Law" },
    { icon: Briefcase, label: "Business Consulting" },
    { icon: FileText, label: "Contract Drafting" },
    { icon: Users, label: "Family Disputes" },
    { icon: Shield, label: "Cyber Law" },
    { icon: Building, label: "Tribunal Matters" },
  ];

  const testimonials = [
    {
      quote: "Professional, reliable, and extremely clear in communication.",
      author: "Client A",
    },
    {
      quote: "Resolved our business dispute quickly and effectively.",
      author: "Startup Founder",
    },
    {
      quote: "His guidance gave me clarity and confidence.",
      author: "Individual Client",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="scholarly-bg py-20 lg:py-32 relative overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <DiacriticOrnament className="text-accent w-16 h-16" variant="curl" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <DiacriticOrnament className="text-primary w-20 h-20" variant="curl" />
        </div>
        <div className="absolute top-1/4 right-20 opacity-10">
          <Scale className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-10">
          <DiacriticOrnament className="text-accent w-12 h-12" variant="accent" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <div className="w-32 h-32 rounded-full border-4 border-accent" />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-5">
          <div className="w-24 h-24 rounded-full border-4 border-primary" />
        </div>
        {/* Decorative dots pattern */}
        <div className="absolute top-16 right-1/4 flex gap-3 opacity-15">
          <DiacriticOrnament className="text-accent" variant="dot" />
          <DiacriticOrnament className="text-primary" variant="dot" />
          <DiacriticOrnament className="text-accent" variant="dot" />
        </div>
        <div className="absolute bottom-20 left-1/3 flex gap-3 opacity-15">
          <DiacriticOrnament className="text-primary" variant="dot" />
          <DiacriticOrnament className="text-accent" variant="dot" />
          <DiacriticOrnament className="text-primary" variant="dot" />
        </div>
        {/* Curved accent lines */}
        <svg className="absolute top-0 right-0 w-64 h-64 opacity-5" viewBox="0 0 200 200">
          <path d="M0,100 Q50,50 100,100 T200,100" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          <path d="M0,120 Q50,70 100,120 T200,120" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-64 h-64 opacity-5" viewBox="0 0 200 200">
          <path d="M0,100 Q50,150 100,100 T200,100" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
          <path d="M0,80 Q50,130 100,80 T200,80" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        </svg>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl">
                <img 
                  src={advocateProfile} 
                  alt="Adv. Asim Ullal - Advocate Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4">
              Adv. Asim Ullal
            </h1>
            <div className="flex items-center justify-center gap-2 mb-1">
              <DiacriticOrnament className="text-accent" variant="dot" />
              <p className="text-xl text-muted-foreground">
                Advocate | Legal & Business Consultant
              </p>
              <DiacriticOrnament className="text-accent" variant="dot" />
            </div>
            <p className="text-lg text-muted-foreground mb-10">
              Managing Director & Founder – iBizlaw
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/book-consultation">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link to="/ask-question">Ask a Free Question</Link>
              </Button>
            </div>
          </div>
        </div>

        <CurvedRibbon className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Practice Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-4" variant="accent" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">
              Areas of Practice
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-smooth cursor-pointer hover:border-primary/30"
              >
                <CardContent className="pt-6 pb-6">
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary">
              <Link to="/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
              Client Testimonials
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative h-48 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border shadow-lg max-w-xl w-full">
                    <p className="font-serif italic text-lg mb-4 text-foreground text-center">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <p className="text-sm text-muted-foreground text-center">
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
