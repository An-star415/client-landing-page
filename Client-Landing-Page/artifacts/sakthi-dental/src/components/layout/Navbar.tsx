import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// Using standard import for consistency and build safety
import logoImg from "@/assets/SDC_Logo_1785689183834.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            {/* Added explicit width, height, and w-auto to fix CLS */}
            <img 
              src={logoImg} 
              alt="Sakthi Dental Clinic" 
              width="109" 
              height="49" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-semibold" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CORRECTED DESKTOP BUTTON LOCATION */}
            <Link href="/contact" className="ml-4">
              <Button className="rounded-full shadow-sm hover:shadow-md transition-all bg-primary hover:bg-primary/90 text-primary-foreground hover:text-secondary border-0">
                Fix an Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-800 p-2 z-50 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: '72px' }}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-4 text-xl font-display font-medium border-b border-border/50 ${
                location === link.href ? "text-primary" : "text-slate-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-8">
            {/* CORRECTED MOBILE BUTTON (No longer nested inside itself) */}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full rounded-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground hover:text-secondary border-0">
                Fix an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}