import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FileCheck, Shield, FileText, Briefcase, ExternalLink } from "lucide-react";

const IBizlaw = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Incorporation & Compliance",
      description: "Complete support for company registration, LLP formation, and regulatory compliance requirements.",
    },
    {
      icon: FileCheck,
      title: "Drafting & Documentation",
      description: "Professional drafting of business contracts, MOUs, NDAs, and all commercial documentation.",
    },
    {
      icon: Shield,
      title: "Trademark & Intellectual Property Registration",
      description: "Comprehensive IP protection including trademark registration, copyright, and patent assistance.",
    },
    {
      icon: FileText,
      title: "Financial & Settlement Agreements",
      description: "Expert handling of loan agreements, settlement deeds, and financial documentation.",
    },
    {
      icon: Briefcase,
      title: "Business Legal Advisory",
      description: "Strategic legal guidance for business operations, partnerships, and commercial transactions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Page Title with Brand Colors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-primary">i</span>
                <span className="text-primary">Biz</span>
                <span className="text-primary">law</span>
              </h1>
              <p className="text-xl text-primary mb-2">
                Business & Legal Consultancy
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                iBizlaw provides expert consultancy in business setup, legal compliance, and documentation.
              </p>
            </motion.div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card mb-12 border-border/50">
                <CardContent className="pt-12 pb-12 text-center">
                  <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-muted-foreground">
                    iBizlaw is your trusted partner for navigating the complex landscape of business law. 
                    We combine deep legal expertise with practical business understanding to help you build, 
                    grow, and protect your enterprise with confidence.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Efficient · Business-Friendly · Results-Oriented
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Core Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-card hover:shadow-lg hover:border-primary/30 transition-smooth border-border/50">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">
                            {service.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
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
              className="bg-secondary/30 rounded-lg p-8 lg:p-12 text-center border border-border"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                Ready to Take Your Business Further?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Visit our dedicated website to explore our full range of business legal services 
                and consultancy solutions.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                asChild
              >
                <a href="https://www.ibizlaw.in" target="_blank" rel="noopener noreferrer">
                  Visit www.ibizlaw.in
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground">
                  For immediate assistance: +91 81472 40545
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IBizlaw;
