import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CurvedRibbon from "@/components/CurvedRibbon";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  const [selectedPractice, setSelectedPractice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="scholarly-bg py-20 lg:py-32 relative"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Profile Photo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 flex justify-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black shadow-[0_1px_3px_0_rgb(0_0_0_0.1)]">
                  <img 
                    src={advocateProfile} 
                    alt="Adv. Asim Ullal - Advocate Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold mb-3 text-foreground"
              >
                Adv. Asim Ullal
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-2"
              >
                Advocate | Legal & Business Consultant
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base text-muted-foreground mb-10"
              >
                Managing Director & Founder – iBizlaw
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_1px_2px_0_rgb(0_0_0_0.05)]">
                  <Link to="/book-consultation">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
                  <Link to="/ask-question">Ask a Free Question</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Practice Highlights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-2">
                OUR PRACTICE AREAS
              </h2>
              <p className="text-2xl lg:text-4xl italic text-muted-foreground mt-2">
                SERVICES
              </p>
            </motion.div>

            <div className="space-y-0">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ 
                    backgroundColor: index === selectedPractice ? 'hsl(var(--primary))' : 'transparent',
                    scale: index === selectedPractice ? 1.02 : 1,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    layout: { duration: 0.4 },
                    backgroundColor: { duration: 0.3 },
                    scale: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedPractice(index)}
                  className={`group cursor-pointer ${
                    index === selectedPractice 
                      ? 'text-primary-foreground rounded-2xl p-4 sm:p-6 md:p-8 mb-6' 
                      : 'py-4 sm:py-6 md:py-8 border-b border-border hover:bg-secondary/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-12">
                    {/* Number and Title - Combined on mobile */}
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
                      {/* Number */}
                      <div className="flex-shrink-0 w-8 sm:w-10 md:w-12">
                        <span className={`text-xl sm:text-2xl font-light ${index === selectedPractice ? 'text-primary-foreground' : 'text-foreground'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="flex-1 sm:flex-shrink-0 sm:w-32 md:w-40 lg:w-56">
                        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${index === selectedPractice ? 'text-primary-foreground' : 'text-foreground'}`}>
                          {item.label}
                        </h3>
                      </div>

                      {/* Arrow Icon - Mobile */}
                      <div className="flex-shrink-0 sm:hidden">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          index === selectedPractice 
                            ? 'bg-background text-primary group-hover:scale-110' 
                            : 'border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110'
                        }`}>
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M7 17L17 7M17 7H7M17 7v10" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1 w-full sm:w-auto pl-11 sm:pl-0">
                      <p className={`text-sm sm:text-sm lg:text-base ${index === selectedPractice ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                        Expert legal counsel and representation in {item.label.toLowerCase()}, ensuring your rights are protected with professional guidance.
                      </p>
                    </div>

                    {/* Arrow Icon - Desktop */}
                    <div className="hidden sm:flex flex-shrink-0">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === selectedPractice 
                          ? 'bg-background text-primary group-hover:scale-110' 
                          : 'border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110'
                      }`}>
                        <svg 
                          className="w-4 h-4 md:w-5 md:h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M7 17L17 7M17 7H7M17 7v10" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/practice-areas">View All Practice Areas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Client Testimonials
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

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
                    <div className="relative bg-gradient-to-br from-card to-secondary/20 rounded-2xl p-10 border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-xl w-full backdrop-blur-sm">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      <p className="text-lg mb-6 text-foreground text-center leading-relaxed pt-4">
                        {testimonials[currentTestimonial].quote}
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-8 bg-primary/30"></div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <div className="h-px w-8 bg-primary/30"></div>
                      </div>
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
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
