import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Simulated API call
    console.log("Form data:", data);
    toast({
      title: "Message Sent",
      description: "Thank you! We'll be in touch soon.",
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="w-full min-h-[calc(100vh-88px)] flex flex-col bg-background">
      {/* Page Header - Soft Pastel Blue Background */}
      <section className="bg-accent/30 py-20 md:py-28 relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-accent text-primary text-sm font-semibold tracking-wide">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to schedule an appointment or have a question? Reach out to us and our friendly team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-background flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-card rounded-3xl shadow-lg overflow-hidden border border-border flex flex-col lg:flex-row">
            
            {/* Contact Form */}
            <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">We would love to hear from you</h2>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name <span className="text-secondary">*</span></label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...form.register("name")} 
                    className={`rounded-xl border-input focus-visible:ring-primary/20 focus-visible:border-primary h-12 ${form.formState.errors.name ? "border-destructive" : ""}`}
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address <span className="text-secondary">*</span></label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      {...form.register("email")}
                      className={`rounded-xl border-input focus-visible:ring-primary/20 focus-visible:border-primary h-12 ${form.formState.errors.email ? "border-destructive" : ""}`}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number <span className="text-secondary">*</span></label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      {...form.register("phone")}
                      className={`rounded-xl border-input focus-visible:ring-primary/20 focus-visible:border-primary h-12 ${form.formState.errors.phone ? "border-destructive" : ""}`}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Your Message (Optional)</label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    {...form.register("message")}
                    className="rounded-xl border-input focus-visible:ring-primary/20 focus-visible:border-primary min-h-[120px] resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>

            {/* Contact Info Sidebar - Changed to Brand Blue */}
            <div className="w-full lg:w-2/5 bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Reach us</h2>
                
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-primary-foreground/80 text-sm uppercase tracking-wider mb-1">Our Location</h4>
                      <p className="text-primary-foreground/90 leading-relaxed">B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-primary-foreground/80 text-sm uppercase tracking-wider mb-1">Email Address</h4>
                      <a href="mailto:info@sakthidentalclinic.in" className="text-primary-foreground/90 hover:text-white transition-colors">info@sakthidentalclinic.in</a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-primary-foreground/80 text-sm uppercase tracking-wider mb-1">Phone</h4>
                      <div className="flex flex-col text-primary-foreground/90">
                        <a href="tel:+919862890897" className="hover:text-white transition-colors">+91 9862890897</a>
                        <a href="tel:+919363298118" className="hover:text-white transition-colors">+91 9363298118</a>
                      </div>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-primary-foreground/80 text-sm uppercase tracking-wider mb-1">Working Hours</h4>
                      <p className="text-primary-foreground/90">Sunday to Saturday: <strong className="text-white">9am to 7pm</strong></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}