"use client";

import { useEffect, useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState<"uk" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as
      | "uk"
      | "en"
      | null;

    if (saved === "uk" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: "uk" | "en") => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  return {
    language,
    changeLanguage,
  };
}