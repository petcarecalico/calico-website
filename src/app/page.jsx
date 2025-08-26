"use client";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import OwnerSection from "@/components/OwnerSection";

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <FeaturesSection />
      </section>
      <section >
        <AboutSection />
      </section>
      <section>
        <OwnerSection/>
      </section>
    </>
  );
}
