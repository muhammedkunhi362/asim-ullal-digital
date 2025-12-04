import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, User, Phone, Mail, Briefcase, AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  mobile: z.string().min(10, "Enter a valid mobile number").max(15),
  email: z.string().email("Enter a valid email address"),
  preferredDate: z.date({ required_error: "Please select a date" }),
  preferredTime: z.string({ required_error: "Please select a time slot" }),
  caseType: z.string({ required_error: "Please select case type" }),
  urgencyLevel: z.string({ required_error: "Please select urgency level" }),
});

type FormData = z.infer<typeof formSchema>;

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
];

const caseTypes = [
  "Civil Litigation",
  "Property Dispute",
  "Family Law",
  "Business/Corporate",
  "Criminal Defense",
  "Cyber Law",
  "Consumer Protection",
  "Other",
];

const urgencyLevels = [
  { value: "low", label: "Low - Can wait a few weeks" },
  { value: "medium", label: "Medium - Within a week" },
  { value: "high", label: "High - Within 2-3 days" },
  { value: "urgent", label: "Urgent - Immediate attention needed" },
];

export default function BookConsultation() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
    },
  });

  const submitToGoogleSheets = async (data: FormData) => {
    // Replace this URL with your Google Apps Script web app URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3TnigSvt1H7Uq7AzeyFfjWcnvaB-DQgmtzqmiDpJT8SlBbrkR6iZh58WayaUBw_U/exec";
    
    try {
      const formattedData = {
        timestamp: new Date().toISOString(),
        fullName: data.fullName,
        mobile: data.mobile,
        email: data.email,
        preferredDate: format(data.preferredDate, "PPP"),
        preferredTime: data.preferredTime,
        caseType: data.caseType,
        urgencyLevel: data.urgencyLevel,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      // Note: With no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      return true;
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      throw error;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Google Sheets
      await submitToGoogleSheets(data);
      
      toast({
        title: "Booking Request Submitted Successfully!",
        description: "We've received your consultation request. Our team will contact you shortly to confirm your appointment.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue saving your details. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="pt-16 flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-6 -ml-2 hover:bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Book Your <span className="text-primary">Consultation</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Schedule a personalized consultation with Adv. Asim Ullal. Fill out the form below 
                and we'll get back to you shortly to confirm your appointment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-6 lg:p-10 shadow-card"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Personal Information
                    </h2>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="h-12 text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              <Phone className="w-4 h-4 inline mr-2" />
                              Mobile Number *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 XXXXXXXXXX" 
                                {...field} 
                                className="h-12 text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              <Mail className="w-4 h-4 inline mr-2" />
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                {...field} 
                                className="h-12 text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4 pt-4 border-t">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                      Appointment Details
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-sm font-medium mb-2">
                              Preferred Date *
                            </FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full h-12 pl-4 text-left font-normal text-base",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? format(field.value, "PPP") : "Pick a date"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              <Clock className="w-4 h-4 inline mr-2" />
                              Preferred Time *
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select time slot" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot} className="text-base">
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Case Information */}
                  <div className="space-y-4 pt-4 border-t">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Case Information
                    </h2>

                    <FormField
                      control={form.control}
                      name="caseType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Case Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select case type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {caseTypes.map((type) => (
                                <SelectItem key={type} value={type} className="text-base">
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="urgencyLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            <AlertTriangle className="w-4 h-4 inline mr-2" />
                            Urgency Level *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select urgency level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {urgencyLevels.map((level) => (
                                <SelectItem key={level.value} value={level.label} className="text-base">
                                  {level.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-lg font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Your information will be securely saved and our team will contact you soon.
                    </p>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
