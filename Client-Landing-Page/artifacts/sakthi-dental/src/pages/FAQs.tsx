import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "1. Can medication completely relieve tooth pain?",
      a: "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care."
    },
    {
      q: "2. Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?",
      a: "No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn't damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth."
    },
    {
      q: "3. Can fluorosis stains be removed through scaling?",
      a: "Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement."
    },
    {
      q: "4. Can painful teeth be treated with fillings?",
      a: "Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won't help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin)."
    },
    {
      q: "5. Is placing a cap or crown necessary after root canal treatment (RCT)?",
      a: "Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing."
    },
    {
      q: "6. Can milk teeth need root canal treatment (RCT)?",
      a: "Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss."
    },
    {
      q: "7. How can I maintain good oral hygiene?",
      a: "Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums."
    },
    {
      q: "8. What is the best age to get braces?",
      a: "Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition."
    },
    {
      q: "9. Do all wisdom teeth need to be removed?",
      a: "No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth."
    },
    {
      q: "10. Is it important to replace missing teeth after extraction?",
      a: "Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function."
    },
    {
      q: "11. What are the benefits of dental implants?",
      a: "Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life."
    },
    {
      q: "12. Which type of toothbrush and toothpaste should I use?",
      a: "Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene."
    },
    {
      q: "13. What causes tooth sensitivity?",
      a: "Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth."
    },
    {
      q: "14. How often should I see a dentist?",
      a: "Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health."
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-purple-50/50 py-20 md:py-28 relative overflow-hidden border-b border-purple-100">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-purple-200/50 text-purple-700 text-sm font-semibold tracking-wide">
            Got Questions?
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Find answers to common questions about dental care, treatments, and maintaining oral hygiene.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-28 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-2xl border border-purple-100 shadow-sm px-6 data-[state=open]:border-purple-400 hover:border-purple-200 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline text-left font-medium text-slate-800 text-lg py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Bottom CTA */}
          <div className="mt-20 text-center bg-indigo-50/30 p-10 md:p-14 rounded-[2.5rem] border border-purple-100 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mb-4">Still have questions?</h3>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">We're here to help. Reach out to our clinic directly and our team will assist you with any inquiries.</p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md h-14 px-10 text-lg transition-transform hover:scale-105">
                Contact Us Directly
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}