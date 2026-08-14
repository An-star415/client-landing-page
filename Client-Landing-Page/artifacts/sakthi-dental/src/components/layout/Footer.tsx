import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ChevronRight, Instagram, Facebook, Youtube } from "lucide-react";
import logoImg from "@/assets/SDC_Logo_1785689183834.png";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <img 
                src={logoImg} 
                alt="Sakthi Dental Clinic" 
                width="109" 
                height="49" 
                className="h-14 w-auto object-contain" 
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Specialized Dental Care for Women, Children & Families. Experience compassionate, expert-led dental services tailored to your needs.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Treatments", href: "/treatments" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Treatments */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Key Treatments</h3>
            <ul className="space-y-4">
              {[
                "Teeth Cleaning",
                "Tooth Filling",
                "Tooth Extraction",
                "Dental Implants",
                "Orthodontic Braces",
                "Clear Aligners",
              ].map((item) => (
                <li key={item}>
                  <Link href="/treatments" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed pt-1">B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@sakthidentalclinic.in" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  info@sakthidentalclinic.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919862890897" className="text-muted-foreground hover:text-primary text-sm transition-colors">+91 9862890897</a>
                  <a href="tel:+919363298118" className="text-muted-foreground hover:text-primary text-sm transition-colors">+91 9363298118</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}