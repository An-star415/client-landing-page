import type { ReactNode } from 'react';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-[72px] md:pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}