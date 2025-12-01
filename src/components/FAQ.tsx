import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to get a response for free questions?",
      answer: "Typically, I respond to free legal questions within 24–48 hours via email or WhatsApp with basic guidance.",
    },
    {
      question: "Do you handle both personal and business matters?",
      answer: "Yes, I handle a wide range of matters including personal disputes, family law, property matters, as well as business consulting, corporate law, and startup advisory.",
    },
    {
      question: "Is the consultation fee fixed?",
      answer: "Consultation fees vary depending on the type of service, complexity of the matter, and consultation mode (telephonic, online, or office visit). We provide transparent fee structures before proceeding.",
    },
    {
      question: "Can I book an online consultation?",
      answer: "Absolutely! We offer online consultations via video calls or chat, making it convenient for clients anywhere. You can book through our consultation page.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                >
                  <AccordionTrigger className="text-left hover:no-underline px-6 py-5 hover:bg-primary/5 transition-colors">
                    <div className="flex items-start gap-4 flex-1 pr-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <HelpCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors pt-1.5">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6 pt-0 pl-20">
                    <div className="border-l-2 border-primary/20 pl-6">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
