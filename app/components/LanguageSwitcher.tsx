"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<"uk" | "en">("uk");

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved === "uk" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "uk" ? "en" : "uk";

    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);

    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 transition"
    >
      {language === "uk" ? "🇺🇦 UA" : "🇬🇧 EN"}
    </button>
  );
}