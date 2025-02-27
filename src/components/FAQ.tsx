
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Question & Answer</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src="/lovable-uploads/33c6fba5-1b6d-4cdc-ab1c-6cc76b3362b6.png"
              alt="FAQ Illustration"
              className="w-full"
            />
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Looking for a delivery franchise?",
    answer:
      "At Delivery Partner, we help you secure top delivery franchises in courier services, food delivery, parcel delivery, and logistics. Partnering with industry leaders, we offer the best opportunities tailored to your interests and investment goals.",
  },
  {
    question: "How long does the franchise acquisition process take?",
    answer:
      "The timeline varies depending on various factors, but typically takes 4-8 weeks from initial consultation to franchise approval.",
  },
  {
    question: "What support will I receive after securing a franchise?",
    answer:
      "We provide comprehensive support including business setup guidance, operational training, marketing assistance, and ongoing consultation to ensure your success.",
  },
  {
    question: "What are the financial requirements for a delivery franchise?",
    answer:
      "Investment requirements vary by franchise type and location, typically ranging from 10L to 30L+. We'll help you find opportunities that match your budget.",
  },
];
