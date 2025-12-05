import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import advocateProfile from "@/assets/advocate-profile1.jpg";

const About = () => {
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
                About Me
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional legal expertise with a client-centric approach
              </p>
            </motion.div>

            {/* Two-Column Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden bg-card border-border/50">
                <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Left: Profile Image */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-full max-w-sm aspect-square rounded-lg overflow-hidden border border-border/50 shadow-lg">
                      <img 
                        src={advocateProfile} 
                        alt="Advocate Asim Ullal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Right: Biography */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col justify-center space-y-6"
                  >
                    <p className="text-lg leading-relaxed text-foreground">
                      I'm <span className="font-semibold text-primary">Advocate Asim Ullal</span>, 
                      an Advocate and Legal Consultant based in Bengaluru, Karnataka.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      I serve as the <span className="font-semibold text-foreground">Managing Director and Founder of iBizlaw</span>, 
                      a consultancy dedicated to delivering efficient and business-friendly legal solutions.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      My practice combines a balance of litigation experience with a deep understanding 
                      of business strategy, compliance, and practical problem-solving.
                    </p>

                    <div className="relative pl-6 border-l-2 border-primary/30 bg-secondary/30 py-4 rounded-r">
                      <p className="text-lg leading-relaxed italic text-foreground">
                        I believe in a client-centric approach — every matter deserves clarity, 
                        confidentiality, and compassion.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
