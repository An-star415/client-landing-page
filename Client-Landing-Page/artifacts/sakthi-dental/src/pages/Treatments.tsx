import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import teethCleaning from "@assets/Treatments/Teeth Cleaning.png";
import toothFilling from "@assets/Treatments/Tooth-Filling.jpg";
import toothExtraction from "@assets/Treatments/Teeth Extraction.png";
import artificialDenture from "@assets/Treatments/Artificial Complete Denture.png";
import dentalImplants from "@assets/Treatments/Impants.png";
import laserSurgery from "@assets/Treatments/Laser-Surgery.png";
import rootCanal from "@assets/Treatments/Root Canal Treatment.png";
import wisdomTeeth from "@assets/Treatments/Wisdom Teeth Removal.png";
import fixedPartial from "@assets/Treatments/Fixed Partial Denture.png";
import bleaching from "@assets/Treatments/Bleaching.png";
import veneerTreatment from "@assets/Treatments/Veneer Treatment.jpg";
import pediatricDentistry from "@assets/Treatments/Pediatric-dentistry.png";
import flapSurgery from "@assets/Treatments/Flap-surgery.png";
import orthodonticBraces from "@assets/Treatments/Orthodonic-Treatment.png";
import clearAligners from "@assets/Treatments/Aligner.png";

export function Treatments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const treatmentsList = [
    {
      img: teethCleaning,
      title: "Teeth Cleaning & Scaling",
      desc: "At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you're dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment. This approach not only treats existing problems but also serves as a crucial preparatory step before any surgical intervention."
    },
    {
      img: toothFilling,
      title: "Tooth Filling",
      desc: "At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth. We focus on sealing gaps effectively to prevent future decay and ensure long-term oral health. Our goal is to preserve your natural tooth structure while enhancing both function and appearance, giving you a healthier, more confident smile."
    },
    {
      img: toothExtraction,
      title: "Tooth Extraction",
      desc: "When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort. We prioritize creating a stress-free environment, explaining each step to our patients. Your health and comfort are always our focus, and we aim to make tooth extraction as smooth and painless as possible, supporting you through every stage of recovery."
    },
    {
      img: artificialDenture,
      title: "Artificial Complete Denture",
      desc: "At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you're replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality. We focus on delivering practical, long-lasting dentures that enhance your smile and overall oral health."
    },
    {
      img: dentalImplants,
      title: "Dental Implants",
      desc: "Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth. Our advanced implant procedures restore both the appearance and strength of your smile, ensuring a natural feel and long-lasting results. Trust our experienced team to help you regain optimal oral function and confidence with cutting-edge implant technology."
    },
    {
      img: laserSurgery,
      title: "Laser Dentistry",
      desc: "At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy. Whether you're undergoing gum reshaping or other corrective treatments, our state-of-the-art laser equipment ensures efficient, safe, and comfortable care tailored to your needs."
    },
    {
      img: rootCanal,
      title: "Root Canal Therapy",
      desc: "When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. Our focus is on relieving pain, eliminating infection, and preserving your natural tooth structure for long-term dental health."
    },
    {
      img: wisdomTeeth,
      title: "Wisdom Tooth Extraction",
      desc: "If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience. We also provide comprehensive post-operative care to support quick recovery and lasting comfort."
    },
    {
      img: fixedPartial,
      title: "Fixed Partial Denture (Bridge)",
      desc: "Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. At Sakthi Dental Clinic, we focus on custom-made dental bridges that restore your smile's appearance while improving chewing function and maintaining oral stability."
    },
    {
      img: bleaching,
      title: "Teeth Whitening (Bleaching)",
      desc: "Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile's natural radiance and boost your confidence."
    },
    {
      img: veneerTreatment,
      title: "Veneers",
      desc: "Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth's appearance, giving you a flawless and natural-looking smile."
    },
    {
      img: pediatricDentistry,
      title: "Pediatric Dentistry",
      desc: "At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits. From routine check-ups to preventive treatments, we focus on building healthy dental habits for a lifetime of bright smiles."
    },
    {
      img: flapSurgery,
      title: "Flap Surgery",
      desc: "For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports gum health."
    },
    {
      img: orthodonticBraces,
      title: "Orthodontic Braces",
      desc: "Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces, metal, ceramic, or lingual, to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile."
    },
    {
      img: clearAligners,
      title: "Clear Aligners",
      desc: "For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey."
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-purple-50/50 py-20 md:py-28 relative overflow-hidden border-b border-purple-100">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-purple-200/50 text-purple-700 text-sm font-semibold tracking-wide">
            Expert Dental Care
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">Our Complete Range of Treatments</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From routine preventive care to complex surgical interventions, we offer comprehensive dental solutions using state-of-the-art technology.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 md:py-28 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {treatmentsList.map((treatment, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden bg-purple-50 relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={treatment.img} 
                    alt={treatment.title} 
                    width="513"
                    height="349"
                    loading={index < 3 ? "eager" : "lazy"} 
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  {/* Changed h3 to h2 to fix Accessibility heading order */}
                  <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4 group-hover:text-primary transition-colors">{treatment.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                    {treatment.desc}
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors mt-auto group/link">
                    Book this treatment <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 bg-purple-100 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-6">Not sure which treatment you need?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">Schedule a comprehensive consultation with our doctors. We will examine your oral health and recommend the best course of action.</p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg h-14 px-10 text-lg transition-transform hover:scale-105">
              Request a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}