import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

      <main className="flex-1 scholarly-bg py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-4" variant="accent" />
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                Practice Areas
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal services across diverse practice areas, tailored to meet your specific needs.
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-16 bg-accent" />
                <DiacriticOrnament className="text-accent" variant="dot" />
                <div className="h-px w-16 bg-accent" />
              </div>
            </div>

            {/* Practice Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practices.map((practice, index) => (
                <Card 
                  key={index}
                  className="bg-background hover:shadow-xl hover:border-primary/40 transition-smooth group cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <practice.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-serif group-hover:text-primary transition-smooth">
                          {practice.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {practice.description}
                    </p>
                    <DiacriticOrnament className="text-accent/50 mt-4" variant="dot" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center bg-background p-8 rounded-lg border border-accent/30">
              <DiacriticOrnament className="text-primary w-6 h-6 mx-auto mb-4" variant="curl" />
              <p className="text-lg font-serif mb-6">
                Need legal assistance in any of these areas?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/book-consultation" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  Book a Consultation
                </a>
                <a 
                  href="/ask-question" 
                  className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-smooth"
                >
                  Ask a Free Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreas;
