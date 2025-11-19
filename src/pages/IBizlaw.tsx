import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import CurvedRibbon from "@/components/CurvedRibbon";
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

      <main className="flex-1 scholarly-bg py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Page Title with Brand Colors */}
            <div className="text-center mb-12">
              <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-4" variant="accent" />
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                <span className="text-green-800">i</span>
                <span className="text-green-800">Biz</span>
                <span className="text-green-800">law</span>
              </h1>
              <p className="text-xl text-primary font-serif mb-2">
                Business & Legal Consultancy
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                iBizlaw provides expert consultancy in business setup, legal compliance, and documentation.
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-16 bg-accent" />
                <DiacriticOrnament className="text-accent" variant="dot" />
                <div className="h-px w-16 bg-accent" />
              </div>
            </div>

            {/* Hero Card */}
            <Card className="bg-background mb-12 border-2 border-accent/30 relative overflow-hidden">
              <CurvedRibbon className="absolute top-0 left-0 right-0 opacity-40" />
              <CardContent className="pt-16 pb-12 text-center relative z-10">
                <DiacriticOrnament className="text-primary w-10 h-10 mx-auto mb-6" variant="curl" />
                <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                  iBizlaw is your trusted partner for navigating the complex landscape of business law. 
                  We combine deep legal expertise with practical business understanding to help you build, 
                  grow, and protect your enterprise with confidence.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <DiacriticOrnament className="text-accent" variant="dot" />
                  <p className="text-sm text-muted-foreground font-serif italic">
                    Efficient · Business-Friendly · Results-Oriented
                  </p>
                  <DiacriticOrnament className="text-accent" variant="dot" />
                </div>
              </CardContent>
            </Card>

            {/* Core Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-center text-primary mb-8">
                Core Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card 
                    key={index}
                    className="bg-background hover:shadow-lg hover:border-primary/40 transition-smooth"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-green-800/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-green-800" />
                        </div>
                        <CardTitle className="text-lg font-serif">
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
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12 text-center border border-accent/30">
              <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-6" variant="curl" />
              <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                Ready to Take Your Business Further?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Visit our dedicated website to explore our full range of business legal services 
                and consultancy solutions.
              </p>
              
              <Button 
                size="lg" 
                className="bg-brand-aqua hover:bg-brand-aqua/90 text-white text-lg px-8"
                asChild
              >
                <a href="https://www.ibizlaw.in" target="_blank" rel="noopener noreferrer">
                  Visit www.ibizlaw.in
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <div className="mt-8 flex items-center justify-center gap-4">
                <DiacriticOrnament className="text-accent/50" variant="dot" />
                <p className="text-sm text-muted-foreground">
                  For immediate assistance: +91 81472 40545
                </p>
                <DiacriticOrnament className="text-accent/50" variant="dot" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IBizlaw;
