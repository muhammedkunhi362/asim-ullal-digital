import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Briefcase, FileText, Heart, Shield, Landmark } from "lucide-react";

const PracticeAreas = () => {
  const practices = [
    {
      icon: Home,
      title: "Civil & Property Law",
      description: "Property disputes, land transactions, title verification, partition suits, and civil litigation matters.",
    },
    {
      icon: Briefcase,
      title: "Business & Startup Consulting",
      description: "Business incorporation, compliance advisory, partnership agreements, and strategic legal guidance for entrepreneurs.",
    },
    {
      icon: FileText,
      title: "Contract Drafting & Settlement Agreements",
      description: "Comprehensive contract drafting, review, negotiation, and settlement documentation for all types of agreements.",
    },
    {
      icon: Heart,
      title: "Family & Matrimonial Disputes",
      description: "Divorce proceedings, custody matters, maintenance disputes, and domestic violence cases with compassionate representation.",
    },
    {
      icon: Shield,
      title: "Cyber & Data Protection Law",
      description: "Cybercrime complaints, data breach response, privacy compliance, and IT Act related matters.",
    },
    {
      icon: Landmark,
      title: "DRT, CESTAT, Tax & Major Tribunals",
      description: "Representation before Debt Recovery Tribunals, Customs Tribunals, Income Tax Appellate Tribunals, and other specialized forums.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Practice Areas
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal services across diverse practice areas
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-border" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {practices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex gap-8 group"
                  >
                    {/* Timeline Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <practice.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <motion.div 
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-1 pb-4"
                    >
                      <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {practice.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {practice.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 text-center bg-secondary/30 rounded-lg p-10 border border-border"
            >
              <h2 className="text-2xl font-serif font-bold mb-4">
                Need Legal Assistance?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Get expert guidance tailored to your specific legal needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a 
                    href="https://wa.me/918147240545?text=Hello%2C%20I%20would%20like%20to%20book%20a%20legal%20consultation%20with%20you.%20Could%20you%20please%20provide%20me%20with%20available%20time%20slots%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Consultation
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/ask-question">Ask a Free Question</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreas;
