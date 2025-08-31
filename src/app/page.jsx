"use client";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import OwnerSection from "@/components/OwnerSection";
import AppShowcase from "@/components/AppShowcase";
import DiscountSection from "@/components/DiscountSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <>
      <section >
        <Hero />
        <FeaturesSection />
      </section>
      <section >
        <AboutSection />
      </section>
      <section  >

        <OwnerSection />
      </section>
      <section>
        <AppShowcase />
        <DiscountSection />
      </section>
      <section >
        <ContactSection />
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}
