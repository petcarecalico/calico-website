"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      once: true,    // whether animation should happen only once
    });
  }, []);

  return <>{children}</>;
}
