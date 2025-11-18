import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import CurvedRibbon from "@/components/CurvedRibbon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Video, Building } from "lucide-react";

const BookConsultation = () => {
  const consultationModes = [
    {
      icon: Phone,
      title: "Telephonic Consultation",
      description: "Quick and convenient legal advice over the phone. Ideal for urgent queries and initial discussions.",
    },
    {
      icon: Building,
      title: "Office Visit",
      description: "In-person consultation at our Bengaluru office for detailed discussion and document review.",
    },
    {
      icon: Video,
      title: "Online Consultation",
      description: "Video or chat consultation from anywhere. Perfect for remote clients and flexible scheduling.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 scholarly-bg py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-4" variant="accent" />
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                Schedule a Consultation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book your appointment for any legal query, business consultation, or personal meeting.
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-16 bg-accent" />
                <DiacriticOrnament className="text-accent" variant="dot" />
                <div className="h-px w-16 bg-accent" />
              </div>
            </div>

            {/* Consultation Modes */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-serif font-semibold text-center text-primary mb-8">
                Choose Your Consultation Mode
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {consultationModes.map((mode, index) => (
                  <Card 
                    key={index}
                    className="bg-background hover:shadow-lg hover:border-primary/40 transition-smooth text-center"
                  >
                    <CardContent className="pt-8 pb-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <mode.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-serif font-semibold mb-3">
                        {mode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {mode.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-background border-2 border-accent/30 relative overflow-hidden">
              <CurvedRibbon className="absolute top-0 left-0 right-0 opacity-50" />
              
              <CardContent className="pt-16 pb-12 text-center relative z-10">
                <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-6" variant="curl" />
                
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Book Your Slot?
                </h3>
                
                <p className="text-muted-foreground mb-2">
                  Click below to schedule your consultation at a time that works for you.
                </p>
                
                <p className="text-sm text-muted-foreground italic mb-8">
                  Note: Consultation fees vary as per the type of service.
                </p>

                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                >
                  Book a Slot Now
                </Button>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <DiacriticOrnament className="text-accent/50" variant="dot" />
                  <p className="text-sm text-muted-foreground">
                    Available Monday–Saturday: 9:00 AM – 9:00 PM
                  </p>
                  <DiacriticOrnament className="text-accent/50" variant="dot" />
                </div>
              </CardContent>
            </Card>

            {/* Info Section */}
            <div className="mt-12 bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-3 text-primary">What to Expect:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <DiacriticOrnament className="text-accent flex-shrink-0 mt-1" variant="dot" />
                  <span>Initial consultation typically lasts 30-60 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <DiacriticOrnament className="text-accent flex-shrink-0 mt-1" variant="dot" />
                  <span>Bring all relevant documents and case details</span>
                </li>
                <li className="flex items-start gap-2">
                  <DiacriticOrnament className="text-accent flex-shrink-0 mt-1" variant="dot" />
                  <span>We maintain strict confidentiality for all discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <DiacriticOrnament className="text-accent flex-shrink-0 mt-1" variant="dot" />
                  <span>You'll receive a clear understanding of your legal options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookConsultation;
