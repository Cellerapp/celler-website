import type { Metadata } from 'next';
import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import WhyCeller from './components/WhyCeller';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABottom from './components/CTABottom';
import Footer2 from './components/Footer2';
import './home-two.css';

export const metadata: Metadata = {
  title: 'Celler — Convert Your Digital Assets to Cash in 3 Minutes',
  description:
    'Buy, sell, swap and withdraw your digital assets instantly. Fast approvals, transparent rates, built for Nigerians.',
};

export default function HomeTwoPage() {
  return (
    <main className="ht-page">
      <Navbar2 />
      <Hero />
      <PainPoints />
      <Features />
      <WhyCeller />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTABottom />
      <Footer2 />
    </main>
  );
}
