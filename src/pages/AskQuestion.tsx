import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYE99HtVErMzSF3pqctPw-ckRoF7wa5dGtGwD9H8hzrEd_mCIY6VAXduhld_jVACXb/exec";

const AskQuestion = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    gender: "",
    age: "",
    areaOfLaw: "",
    question: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // With no-cors mode, we can't read the response, but if no error is thrown, it succeeded
      toast({
        title: "Question Submitted Successfully!",
        description: "We'll respond within 24-48 hours via email or WhatsApp.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        gender: "",
        age: "",
        areaOfLaw: "",
        question: ""
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Page Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ask a Free Question
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a legal question? Ask it here – absolutely free.
              </p>
              <p className="text-sm text-muted-foreground italic mt-2">
                I will respond with basic guidance within 24–48 hours.
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border/50">
                <CardContent className="pt-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name" 
                      className="mt-2"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>

                  {/* Email & WhatsApp */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="your@email.com" 
                        className="mt-2"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp" className="font-medium">
                        WhatsApp Number <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="whatsapp" 
                        type="tel"
                        placeholder="+91 XXXXX XXXXX" 
                        className="mt-2"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Gender & Age */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="gender" className="font-medium">
                        Gender <span className="text-destructive">*</span>
                      </Label>
                      <Select 
                        value={formData.gender}
                        onValueChange={(value) => handleInputChange("gender", value)}
                        required
                      >
                        <SelectTrigger id="gender" className="mt-2">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="age" className="font-medium">
                        Age <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="age" 
                        type="number"
                        placeholder="Your age" 
                        className="mt-2"
                        min="18"
                        max="100"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Area of Law */}
                  <div>
                    <Label htmlFor="areaOfLaw" className="font-medium">
                      Area of Law <span className="text-destructive">*</span>
                    </Label>
                    <Select 
                      value={formData.areaOfLaw}
                      onValueChange={(value) => handleInputChange("areaOfLaw", value)}
                      required
                    >
                      <SelectTrigger id="areaOfLaw" className="mt-2">
                        <SelectValue placeholder="Select area of law" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="property">Property / Civil</SelectItem>
                        <SelectItem value="business">Business / Corporate</SelectItem>
                        <SelectItem value="family">Family / Matrimonial</SelectItem>
                        <SelectItem value="tribunal">Tribunal / Tax</SelectItem>
                        <SelectItem value="cyber">Cyber / Data Protection</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Question */}
                  <div>
                    <Label htmlFor="question" className="font-medium">
                      Your Question <span className="text-destructive">*</span>
                    </Label>
                    <Textarea 
                      id="question" 
                      placeholder="Please describe your legal question in detail..."
                      className="mt-2 min-h-[150px]"
                      value={formData.question}
                      onChange={(e) => handleInputChange("question", e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Provide as much context as possible for a better response.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Your Question"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive a response via email or WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>
            </motion.div>

            {/* Info Notice */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-secondary/30 border border-border rounded-lg p-6"
            >
              <p className="text-sm font-medium mb-2 text-foreground">Please Note:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• This is for general legal guidance only</li>
                <li>• For detailed advice, please book a consultation</li>
                <li>• All information shared is kept confidential</li>
                <li>• Response time: 24-48 hours</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AskQuestion;
