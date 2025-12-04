import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, User, Phone, Mail, Briefcase, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

interface BookingFormDialogProps {
  children: React.ReactNode;
}

export default function BookingFormDialog({ children }: BookingFormDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const message = `*New Appointment Request*%0A%0A*Name:* ${encodeURIComponent(data.fullName)}%0A*Mobile:* ${encodeURIComponent(data.mobile)}%0A*Email:* ${encodeURIComponent(data.email)}%0A*Date:* ${format(data.preferredDate, "PPP")}%0A*Time:* ${encodeURIComponent(data.preferredTime)}%0A*Case Type:* ${encodeURIComponent(data.caseType)}%0A*Urgency:* ${encodeURIComponent(data.urgencyLevel)}`;
    
    window.open(`https://wa.me/+918147240545?text=${message}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the pre-filled message to complete your booking request.",
    });
    
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[500px] h-[85vh] sm:h-auto sm:max-h-[85vh] overflow-hidden flex flex-col p-0">
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 border-b shrink-0">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
            Book an Appointment
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4" /> Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} className="h-10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4" /> Mobile Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+91 XXXXXXXXXX" {...field} className="h-10" />
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
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="h-10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="flex items-center gap-2 text-sm mb-1">
                        <CalendarIcon className="w-4 h-4" /> Preferred Date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal h-10",
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
                            className="pointer-events-auto"
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
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" /> Preferred Time
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
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

              <FormField
                control={form.control}
                name="caseType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4" /> Case Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {caseTypes.map((type) => (
                          <SelectItem key={type} value={type}>
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
                    <FormLabel className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4" /> Urgency Level
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.label}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2 pb-4">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-11">
                  Submit Booking Request
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
