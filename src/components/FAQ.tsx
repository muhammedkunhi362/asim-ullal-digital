import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DiacriticOrnament from "./DiacriticOrnament";

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <DiacriticOrnament className="text-primary w-8 h-8 mx-auto mb-4" variant="accent" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-accent" />
              <DiacriticOrnament className="text-accent" variant="dot" />
              <div className="h-px w-16 bg-accent" />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
