import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import { Card } from "@/components/ui/card";
import { Scale } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 scholarly-bg py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-4" variant="accent" />
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                About Me
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-accent" />
                <DiacriticOrnament className="text-accent" variant="dot" />
                <div className="h-px w-16 bg-accent" />
              </div>
            </div>

            {/* Two-Column Layout */}
            <Card className="overflow-hidden bg-background">
              <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left: Profile Image Placeholder */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-square bg-secondary rounded-lg border-2 border-accent/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                    <div className="relative text-center p-8">
                      <Scale className="w-24 h-24 mx-auto text-primary mb-4" />
                      <p className="text-lg font-serif text-muted-foreground">
                        Adv. Asim Ullal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Biography */}
                <div className="flex flex-col justify-center space-y-6">
                  <DiacriticOrnament className="text-accent" variant="curl" />
                  
                  <p className="text-lg leading-relaxed">
                    I'm <span className="font-semibold text-primary">Advocate Asim Ullal</span>, 
                    an Advocate and Legal Consultant based in Bengaluru, Karnataka.
                  </p>

                  <p className="text-lg leading-relaxed">
                    I serve as the <span className="font-semibold">Managing Director and Founder of iBizlaw</span>, 
                    a consultancy dedicated to delivering efficient and business-friendly legal solutions.
                  </p>

                  <p className="text-lg leading-relaxed">
                    My practice combines a balance of litigation experience with a deep understanding 
                    of business strategy, compliance, and practical problem-solving.
                  </p>

                  <div className="relative pl-6 border-l-4 border-accent">
                    <p className="text-lg leading-relaxed font-serif italic text-primary">
                      I believe in a client-centric approach — every matter deserves clarity, 
                      confidentiality, and compassion.
                    </p>
                  </div>

                  <DiacriticOrnament className="text-primary self-end" variant="accent" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
