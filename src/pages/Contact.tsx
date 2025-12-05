import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    { icon: Linkedin, href: "https://www.linkedin.com/in/adv-asim-ullal-031b10341", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/adv.asim_ullal", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Facebook, href: "https://www.facebook.com/share/1Apnn5XBGU/", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://x.com/asim_ullal", label: "X", color: "hover:text-blue-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Page Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                We're here to help. Reach out for legal consultation or any inquiries.
              </p>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card hover:shadow-lg transition-smooth border-border/50">
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
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card mb-12 overflow-hidden border-border/50">
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
            </motion.div>

            {/* Social & CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border/50">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                      <a 
                        href="https://wa.me/+918147240545"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Appointment
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+918147240545">Call Now</a>
                    </Button>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground italic">
                      We're here to serve you with clarity and confidence
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
