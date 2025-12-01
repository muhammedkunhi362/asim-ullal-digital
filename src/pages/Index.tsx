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
import { motion } from "framer-motion";

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
      quote: "Exceptional legal expertise with clear communication throughout the entire process. Highly recommended for business matters.",
      author: "Corporate Client",
    },
    {
      quote: "Professional, knowledgeable, and achieved excellent results in our property dispute case.",
      author: "Property Owner",
    },
    {
      quote: "Provided comprehensive legal guidance that helped us navigate complex compliance requirements successfully.",
      author: "Startup Founder",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

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
          className="bg-background py-16 lg:py-24 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
                  Legal Excellence,<br />
                  <span className="text-primary">Delivered with Integrity</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Advocate Asim Ullal - Your trusted legal partner specializing in civil litigation, 
                  business law, and comprehensive legal consulting services across Karnataka.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                    <Link to="/book-consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                    <Link to="/ask-question">Free Legal Query</Link>
                  </Button>
                </div>
                {/* Stats */}
                <div className="flex gap-8">
                  <div>
                    <div className="text-4xl font-bold text-foreground">10+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Years of Practice</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Cases Successfully Resolved</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Profile Image with Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  {/* Decorative brush stroke background */}
                  <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-card shadow-card">
                    <img 
                      src={advocateProfile} 
                      alt="Adv. Asim Ullal - Advocate Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute bottom-8 right-8 bg-card p-6 rounded-2xl shadow-card text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-primary flex items-center justify-center">
                      <Scale className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Licensed</div>
                    <div className="text-xs text-muted-foreground">Advocate</div>
                    <div className="text-xs font-semibold text-foreground">Karnataka Bar</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What Do I Help Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
                Comprehensive Legal Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Providing expert legal counsel and strategic guidance across multiple practice areas. 
                From litigation to business advisory, we deliver solutions tailored to your unique needs.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 service-icon-wrapper"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Scale className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Litigation Services</h3>
                  <p className="text-sm text-muted-foreground">Expert representation in civil courts, property disputes, and tribunal proceedings with proven track record.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 service-icon-wrapper"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Business & Corporate Law</h3>
                  <p className="text-sm text-muted-foreground">Strategic legal advisory for businesses, startups, compliance management, and corporate governance.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 service-icon-wrapper"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Legal Documentation</h3>
                  <p className="text-sm text-muted-foreground">Professional drafting and vetting of contracts, agreements, and all legal documentation requirements.</p>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-16 mb-20"
            >
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Successful Cases</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-foreground mb-2">300+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Satisfied Clients</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Core Practice Areas
              </h2>
            </motion.div>

            {/* Practice Areas Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                const colors = [
                  { bg: 'bg-secondary', text: 'text-secondary-foreground' },
                  { bg: 'bg-primary', text: 'text-primary-foreground' },
                  { bg: 'bg-accent', text: 'text-accent-foreground' },
                  { bg: 'bg-secondary', text: 'text-secondary-foreground' },
                  { bg: 'bg-primary', text: 'text-primary-foreground' },
                  { bg: 'bg-accent', text: 'text-accent-foreground' },
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, boxShadow: '0 8px 30px 0 rgb(0 0 0 / 0.15)' }}
                    className="bg-card rounded-3xl p-8 shadow-card cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${colors[index].bg} ${colors[index].text} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Specialized legal expertise ensuring your rights are protected through thorough analysis and strategic advocacy.
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                <Link to="/practice-areas">Explore All Services</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Client Testimonials
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by individuals and businesses for delivering exceptional legal outcomes with dedication and professionalism.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Ready to Discuss<br />Your Legal <span className="text-primary">Matters?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a consultation <span className="text-accent font-semibold">today</span> and receive expert guidance tailored to your needs.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 text-lg">
                <Link to="/contact">Contact Us Now</Link>
              </Button>
            </motion.div>
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
