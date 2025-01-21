import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is AL-P?",
      answer:
        "AL-P is a comprehensive program designed to help personal trainers and fitness coaches build successful careers by bridging the gap between healthcare and fitness.",
    },
    {
      question: "How long is the demo call?",
      answer:
        "The demo calls are 60 minutes long. They are designed to determine if AL-P is a good fit for you and your career goals.",
    },
    {
      question: "What happens after the demo call?",
      answer:
        "If AL-P is a good fit, our team will guide you through the next steps in the process. If it's not a fit, we'll provide recommendations for resources better suited to your specific goals.",
    },
    {
      question: "How quickly can I expect results?",
      answer:
        "Results can vary, but many of our clients see significant improvements in their client roster within the first few months of implementing AL-P strategies.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

