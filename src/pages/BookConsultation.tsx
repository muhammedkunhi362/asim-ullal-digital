import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Schedule a Consultation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book your appointment for any legal query, business consultation, or personal meeting.
              </p>
            </motion.div>

            {/* Consultation Modes */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-semibold text-center text-foreground mb-8">
                Choose Your Consultation Mode
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {consultationModes.map((mode, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-card hover:shadow-lg hover:border-primary/30 transition-smooth text-center border-border/50">
                      <CardContent className="pt-8 pb-8">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <mode.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">
                          {mode.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {mode.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border/50">
                <CardContent className="pt-12 pb-12 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
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
                    asChild
                  >
                    <a 
                      href="https://api.whatsapp.com/send?phone=+918147240545"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Slot Now
                    </a>
                  </Button>

                  <div className="mt-8">
                    <p className="text-sm text-muted-foreground">
                      Available Monday–Saturday: 9:00 AM – 9:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 bg-secondary/30 p-6 rounded-lg border border-border"
            >
              <h4 className="font-semibold mb-3 text-foreground">What to Expect:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Initial consultation typically lasts 30-60 minutes</li>
                <li>• Bring all relevant documents and case details</li>
                <li>• We maintain strict confidentiality for all discussions</li>
                <li>• You'll receive a clear understanding of your legal options</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookConsultation;
