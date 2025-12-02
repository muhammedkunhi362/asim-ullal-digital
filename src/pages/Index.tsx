import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Scale, Briefcase, FileText, Users, Shield, Building } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import advocateProfile from "@/assets/advocate-profile.jpg";
import { motion } from "framer-motion";

const Index = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background py-10 lg:py-16 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-left"
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Legal Excellence,<br />
                  <span className="text-primary">Delivered with Integrity</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  <span className="text-primary font-extrabold">Adv. Asim Ullal</span> - Your trusted legal partner specializing in civil litigation, 
                  business law, and comprehensive legal consulting services across Karnataka.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300">
                      <Link to="/book-consultation">Schedule Consultation</Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 transition-all duration-300">
                      <Link to="/ask-question">Free Legal Query</Link>
                    </Button>
                  </motion.div>
                </div>
                {/* Stats */}
                <div className="flex gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="text-4xl font-bold text-foreground">2+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Years of Practice</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="text-4xl font-bold text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Cases Successfully Resolved</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Profile Image with Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  {/* Decorative brush stroke background */}
                  <motion.div 
                    className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-background shadow-card">
                    <img 
                      src={advocateProfile} 
                      alt="Adv. Asim Ullal - Advocate Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What Do I Help Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-3 inline-block relative pb-3">
                Comprehensive Legal Services
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-6">
                Providing expert legal counsel and strategic guidance across multiple practice areas. 
                From litigation to business advisory, we deliver solutions tailored to your unique needs.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center mb-8 mt-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 inline-block relative pb-3">
                Core Practice Areas
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
            </motion.div>

            {/* Practice Areas Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="bg-background rounded-2xl p-5 shadow-card cursor-pointer border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors[index].bg} ${colors[index].text} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
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
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300">
                  <Link to="/practice-areas">Explore All Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 inline-block relative pb-3">
                Client Testimonials
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-base text-muted-foreground mt-6">
                Trusted by individuals and businesses for delivering exceptional legal outcomes with dedication and professionalism.
              </p>
            </motion.div>

            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      className="bg-card border border-border rounded-2xl p-5 h-full text-center shadow-card"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 mb-3 flex items-center justify-center mx-auto">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 inline-block relative pb-3">
                Ready to Discuss Your Legal <span className="text-primary">Matters?</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 mt-6">
                Schedule a consultation <span className="text-accent font-semibold">today</span> and receive expert guidance tailored to your needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300">
                  <Link to="/contact">Contact Us Now</Link>
                </Button>
              </motion.div>
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
