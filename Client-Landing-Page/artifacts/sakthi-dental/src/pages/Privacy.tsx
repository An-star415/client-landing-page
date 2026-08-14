import { useEffect } from "react";

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-purple-50/50 py-20 md:py-28 relative overflow-hidden border-b border-purple-100">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-purple-200/50 text-purple-700 text-sm font-semibold tracking-wide">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">Privacy Policy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Sakthi Dental Clinic, we are committed to protecting your privacy and ensuring your personal information is handled with care.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-purple-100 shadow-sm">
            <div className="prose prose-slate prose-lg max-w-none">
              
              <p className="text-xl text-slate-700 font-medium mb-10 leading-relaxed">
                This Privacy Policy outlines how we collect, use, store, and disclose information from visitors and users of our website.
              </p>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect personal identification information from users in several ways, including when users:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600 marker:text-purple-400">
                <li>Visit our website</li>
                <li>Fill out forms (e.g., contact or appointment requests)</li>
                <li>Engage with features, services, or resources on our site</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Types of information we may collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600 marker:text-purple-400">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Users can visit our site anonymously. We only collect personal data when it is voluntarily submitted by users. Refusing to provide certain personal information may limit access to some site features or services.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may also gather non-personal identification information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-600 marker:text-purple-400">
                <li>Browser type</li>
                <li>Device details</li>
                <li>Operating system</li>
                <li>Internet service provider</li>
                <li>Technical data related to user interaction with the site</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">2. Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website may use "cookies" to enhance the user experience. Cookies are small files stored on a user's device for record-keeping purposes and to track preferences or site activity.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Users can set their browser to refuse cookies or alert them when cookies are being used. Please note that disabling cookies may affect some site functionality.
              </p>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Collected information may be used for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-600 marker:text-purple-400">
                <li><strong className="text-slate-700">To operate and manage the website:</strong> Ensuring content displays properly and services run smoothly.</li>
                <li><strong className="text-slate-700">To improve customer service:</strong> Helping us respond to inquiries more efficiently.</li>
                <li><strong className="text-slate-700">To enhance the website experience:</strong> Feedback provided may help us improve content, usability, and performance.</li>
                <li><strong className="text-slate-700">To communicate via email:</strong> We may use the email address to respond to inquiries, appointments, or service updates.</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">4. Data Security</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We implement appropriate security measures for data collection, storage, and processing to safeguard your personal information from unauthorized access, alteration, or destruction.
              </p>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">5. Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell, trade, or rent personal identification information to third parties.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We may share general demographic data (not linked to any personal information) with trusted partners or affiliates to improve service delivery and site performance.
              </p>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">6. Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                In compliance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect any personal information from children under the age of 13. Our site is not intended to attract users below this age group.
              </p>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">7. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to review this page periodically to stay informed about how we protect your information.
              </p>

              <h2 className="text-2xl font-display font-bold text-slate-800 mt-12 mb-4">8. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By using this website, you agree to this policy. If you do not accept our Privacy Policy, please do not use our website.
              </p>
              <p className="text-slate-600 leading-relaxed mb-12">
                Continued use of the site following any updates will be deemed as your acceptance of the revised policy.
              </p>

              <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100">
                <h2 className="text-2xl font-display font-bold text-slate-800 mb-4">9. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or your interactions with our site, please contact us:
                </p>
                <ul className="list-none pl-0 space-y-3 font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>B2/8 SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <a href="mailto:info@sakthidentalclinic.in" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">info@sakthidentalclinic.in</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>+91 9862890897 / +91 9363298118</span>
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