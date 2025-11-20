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
      <section className="scholarly-bg py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-border shadow-[0_1px_3px_0_rgb(0_0_0_0.1)]">
                <img 
                  src={advocateProfile} 
                  alt="Adv. Asim Ullal - Advocate Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-foreground">
              Adv. Asim Ullal
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Advocate | Legal & Business Consultant
            </p>
            <p className="text-base text-muted-foreground mb-10">
              Managing Director & Founder – iBizlaw
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_1px_2px_0_rgb(0_0_0_0.05)]">
                <Link to="/book-consultation">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
                <Link to="/ask-question">Ask a Free Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Highlights */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Areas of Practice
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {highlights.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className={`inline-block px-5 py-3 rounded-lg bg-card border border-border/50 shadow-[0_1px_2px_0_rgb(0_0_0_0.05)] hover:shadow-[0_1px_3px_0_rgb(0_0_0_0.1)] transition-all duration-300`}>
                          <h3 className="text-base font-medium text-foreground">
                            {item.label}
                          </h3>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/5 border-2 border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>

                      {/* Empty space for balance */}
                      <div className="flex-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-border hover:bg-secondary">
              <Link to="/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Client Testimonials
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
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
                  <div className="bg-card rounded-xl p-8 border border-border/50 shadow-[0_1px_3px_0_rgb(0_0_0_0.1)] max-w-xl w-full">
                    <p className="text-lg mb-4 text-foreground text-center leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <p className="text-sm text-muted-foreground text-center font-medium">
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
