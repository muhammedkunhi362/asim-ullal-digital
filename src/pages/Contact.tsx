import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiacriticOrnament from "@/components/DiacriticOrnament";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "#81, 1st Floor, E 13th Street, HKP Road, Shivaji Nagar, Bengaluru",
    },
    {
      icon: Phone,
      title: "Mobile",
      content: "+91 81472 40545",
      link: "tel:+918147240545",
    },
    {
      icon: Mail,
      title: "Email",
      content: "advasimullal2244@gmail.com",
      link: "mailto:advasimullal2244@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday–Saturday: 9:00 AM – 9:00 PM",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  ];

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
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                We're here to help. Reach out for legal consultation or any inquiries.
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-16 bg-accent" />
                <DiacriticOrnament className="text-accent" variant="dot" />
                <div className="h-px w-16 bg-accent" />
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactDetails.map((detail, index) => (
                <Card key={index} className="bg-background hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <detail.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-1">
                          {detail.title}
                        </h3>
                        {detail.link ? (
                          <a 
                            href={detail.link}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {detail.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {detail.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="bg-background mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-80 bg-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                  <div className="relative text-center p-8">
                    <MapPin className="w-16 h-16 mx-auto text-primary mb-4" />
                    <p className="text-lg font-serif text-muted-foreground">
                      Map Location
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Shivaji Nagar, Bengaluru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social & CTA Section */}
            <Card className="bg-background border-2 border-accent/30">
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  <DiacriticOrnament className="text-primary w-6 h-6 mx-auto mb-4" variant="curl" />
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Follow us on social media for legal insights and updates
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 mb-8">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link to="/book-consultation">Book Appointment</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <a href="tel:+918147240545">Call Now</a>
                    </Button>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-4">
                    <DiacriticOrnament className="text-accent/50" variant="dot" />
                    <p className="text-sm text-muted-foreground italic">
                      We're here to serve you with clarity and confidence
                    </p>
                    <DiacriticOrnament className="text-accent/50" variant="dot" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
