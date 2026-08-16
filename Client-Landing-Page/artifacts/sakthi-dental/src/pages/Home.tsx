import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Stethoscope, HeartHandshake, Microscope, Star, ArrowRight } from "lucide-react";

// Banners
import banner1 from "@assets/Banner_img_1_1785689560649.jpg";
import banner2 from "@assets/Banner_img_2_1785689573323.jpg";
import banner3 from "@assets/Banner_img_3_1785689585281.jpg";

// Amenities Icons
import iconCity from "@assets/Icon-city-center_1785689491516.png";
import iconDoctors from "@assets/Icon-doctors_1785689506653.png";
import iconParking from "@assets/Icon-parking_1785689522609.png";
import iconPickup from "@assets/Icon-pickup_1785689534950.png";
import iconWheelchair from "@assets/Icon-wheel-chair_1785689549581.png";

// Treatment Preview Images
import toothExtraction from "@assets/Treatments/Teeth Extraction.png";
import completeDenture from "@assets/Treatments/Artificial Complete Denture.png";
import toothFilling from "@assets/Treatments/Tooth-Filling.jpg";
import teethCleaning from "@assets/Treatments/Teeth Cleaning.png";
import bleaching from "@assets/Treatments/Bleaching.png";
import braces from "@assets/Treatments/Orthodonic-Treatment.png";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Hero Carousel Setup ---
  const [heroRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  // --- Testimonial Carousel Setup ---
  const [testimonialRef, testimonialApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!testimonialApi) return;
      testimonialApi.scrollTo(index);
    },
    [testimonialApi]
  );

  const onSelect = useCallback(() => {
    if (!testimonialApi) return;
    setSelectedIndex(testimonialApi.selectedScrollSnap());
  }, [testimonialApi]);

  useEffect(() => {
    if (!testimonialApi) return;
    onSelect();
    setScrollSnaps(testimonialApi.scrollSnapList());
    testimonialApi.on("select", onSelect);
    testimonialApi.on("reInit", onSelect);
  }, [testimonialApi, onSelect]);

  const banners = [banner1, banner2, banner3];

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "All-in-One Care",
      desc: "From general dentistry to specialized treatments, everything under one roof.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Experienced Doctors",
      desc: "Our dentists are professionally trained and committed to personalized patient care.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Patient-Centric Approach",
      desc: "We prioritize comfort, safety, and transparency in every treatment we offer.",
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Technology-Driven Services",
      desc: "Modern tools and equipment ensure precision, safety, and faster recovery.",
    },
  ];

  const treatmentsPreview = [
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
      img: completeDenture, 
      title: "Artificial Complete Denture", 
      desc: "At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you're replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality. We focus on delivering practical, long-lasting dentures that enhance your smile and overall oral health." 
    },
    { 
      img: bleaching, 
      title: "Teeth Whitening (Bleaching)", 
      desc: "Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile's natural radiance and boost your confidence." 
    },
    { 
      img: braces, 
      title: "Orthodontic Treatment", 
      desc: "Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces, metal, ceramic, or lingual, to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile." 
    }
  ];

  const amenities = [
    { icon: iconCity, label: "Convenient central location" },
    { icon: iconParking, label: "Hassle-free parking" },
    { icon: iconDoctors, label: "Doctors available daily (9 AM - 9 PM)" },
    { icon: iconPickup, label: "Pickup & drop-off support" },
    { icon: iconWheelchair, label: "Wheelchair access" },
  ];

  const testimonials = [
    {
      quote: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.",
      author: "Manisha M",
    },
    {
      quote: "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I've recommended Sakthi Dental Clinic to my entire family.",
      author: "Mr. Arun Kumar",
    },
    {
      quote: "Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.",
      author: "Mrs. Revathi S.",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans text-foreground bg-background">
      
      {/* Hero Section with pure image carousel background and transparent overlay */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 w-full overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0" ref={heroRef}>
          <div className="flex h-full w-full">
            {banners.map((src, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-full h-full relative">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img 
                  src={src} 
                  alt="Dental Clinic Banner" 
                  width="1920"
                  height="1080"
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover block" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl space-y-5">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight drop-shadow-md">
              Specialized Dental Care for <span className="text-pink-300 md:text-[#d8b4fe]">Women, Children & Families</span>
            </h1>
            <p className="text-sm md:text-base text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
            </p>
            
            {/* CTA Buttons fully visible with natural stacking */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground shadow-lg border-0 h-11 px-7 text-sm md:text-base">
                  Fix an Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/60 hover:bg-white hover:text-blue-950 bg-black/30 backdrop-blur-sm h-11 px-7 text-sm md:text-base">
                  Emergency Dental Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Banner */}
      <section className="bg-accent/40 py-10 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-medium text-primary flex items-center justify-center gap-3">
            <HeartHandshake className="w-7 h-7 text-primary" />
            You are always in safe hands. We are ready to help, anytime.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">We combine expertise with empathy to provide a dental experience that feels safe, transparent, and comfortable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Treatments Preview */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Explore Our Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive dental treatments tailored for your entire family under one roof.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-7xl mx-auto">
            {treatmentsPreview.map((treatment, i) => (
              <div key={i} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-primary/40">
                <div className="h-64 overflow-hidden bg-muted">
                  <img 
                    src={treatment.img} 
                    alt={treatment.title} 
                    width="466"
                    height="317"
                    className="w-full h-full object-cover opacity-95" 
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-4">{treatment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{treatment.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
                      Book this treatment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/treatments">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                View Full List of Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Clinic Facilities</h2>
            <p className="text-muted-foreground text-lg">Designed for your comfort and convenience.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 md:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
            {amenities.map((amenity, i) => (
              <div key={i} className="min-w-[200px] md:min-w-0 snap-center flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border shadow-sm transition-colors">
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-accent p-4">
                  <img src={amenity.icon} alt={amenity.label} className="w-full h-full object-contain opacity-85" />
                </div>
                <p className="font-medium text-foreground text-sm leading-relaxed">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground text-lg">Real stories from our extended clinic family.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={testimonialRef}>
              <div className="flex">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="bg-card p-10 md:p-12 rounded-3xl shadow-sm border border-border flex flex-col relative text-center">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground leading-relaxed text-lg md:text-xl italic mb-8">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-bold text-primary text-lg">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground mt-1">Verified Patient</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">Ready to book your appointment?</h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Take the first step towards a healthier, brighter smile. Our team is ready to welcome you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 border-0 rounded-full h-14 px-10 text-lg font-semibold hover:scale-105 transition-transform shadow-xl">
              Fix an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}