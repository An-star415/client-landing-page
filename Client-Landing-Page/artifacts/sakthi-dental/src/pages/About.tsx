import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { name: "Dr. Anupriya", role: "Founder", color: "bg-blue-100 text-blue-700" },
    { name: "Dr. Ananya Iyer", role: "Prosthodontist", color: "bg-indigo-100 text-indigo-700" },
    { name: "Dr. Meera Subramanian", role: "Endodontist", color: "bg-purple-100 text-purple-700" },
    { name: "Dr. Arvind Kumar", role: "Dental Surgeon", color: "bg-teal-100 text-teal-700" },
    { name: "Dr. Sneha N", role: "Orthodontist", color: "bg-rose-100 text-rose-700" },
    { name: "Dr. Srinivas Rohit Ramanujam", role: "Implantologist", color: "bg-amber-100 text-amber-700" },
    { name: "Dr. Balu", role: "Laser Surgeon", color: "bg-emerald-100 text-emerald-700" },
    { name: "Dr. Vikram Raj Kishore", role: "Aligners Partner", color: "bg-sky-100 text-sky-700" },
    { name: "Dr. Ajay Jumar", role: "Oral & Maxillofacial Surgeon", color: "bg-orange-100 text-orange-700" },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-purple-50/50 py-20 md:py-28 relative overflow-hidden border-b border-purple-100">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-purple-200/50 text-purple-700 text-sm font-semibold tracking-wide">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">About Us</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Rooted in the community of Hosur, Sakthi Dental Clinic brings together decades of expertise with a compassionate, patient-first philosophy.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mx-auto bg-purple-50/30 p-10 md:p-16 rounded-[2.5rem] border border-purple-100 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-8 leading-tight text-center md:text-left">
              Get to Know Dr. Anupriya <br/>
              <span className="text-2xl md:text-3xl text-purple-600 font-medium mt-3 block">Your Trusted Partner in Dental Care</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
              </p>
              <p>
                In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
              </p>
              <p>
                At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.
              </p>
              <p>
                Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn't just treated it's celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-indigo-50/30 border-y border-purple-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-8">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.
              </p>
            </div>
            
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M15 3v6h6"/><path d="m10 16 2-2-2-2"/><path d="m14 16-2-2 2-2"/></svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs. With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-6">Our Team of Doctors</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Our clinic brings together specialists from every field of dentistry, ensuring you receive expert care tailored to your exact needs without needing multiple referrals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => {
              const initials = member.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('').substring(0, 2);
              return (
                <div key={i} className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center text-3xl font-display font-bold mb-6 ${member.color} ring-4 ring-white shadow-inner`}>
                    {initials}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">{member.name}</h3>
                  <p className="text-slate-500 font-medium">{member.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}