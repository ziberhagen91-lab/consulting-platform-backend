"use client";

import { useEffect, useState } from "react";

type SidebarProps = {
  onLogout: () => void;
};

export default function Sidebar({
  onLogout,
}: SidebarProps) {
  const [language, setLanguage] =
    useState<"uk" | "en">("uk");

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved === "uk" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const t = {
    uk: {
      platform: "Консалтингова платформа",
      overview: "Огляд",
      clients: "Клієнти",
      analytics: "Аналітика",
      settings: "Налаштування",
      logout: "Вийти",
    },
    en: {
      platform: "Consulting Platform",
      overview: "Overview",
      clients: "Clients",
      analytics: "Analytics",
      settings: "Settings",
      logout: "Logout",
    },
  };

  return (
    <aside className="w-64 border-r border-zinc-900 p-6">
      <h1 className="text-2xl font-bold mb-10">
        {t[language].platform}
      </h1>

      <nav className="flex flex-col gap-4">
        <a
          href="/dashboard"
          className="bg-white text-black px-4 py-3 rounded-xl font-semibold"
        >
          {t[language].overview}
        </a>

        <a
          href="/clients"
          className="hover:bg-zinc-900 px-4 py-3 rounded-xl transition"
        >
          {t[language].clients}
        </a>

        <a
          href="#"
          className="hover:bg-zinc-900 px-4 py-3 rounded-xl transition"
        >
          {t[language].analytics}
        </a>

        <a
          href="#"
          className="hover:bg-zinc-900 px-4 py-3 rounded-xl transition"
        >
          {t[language].settings}
        </a>
      </nav>

      <button
        onClick={onLogout}
        className="mt-10 w-full border border-zinc-700 px-4 py-3 rounded-xl hover:bg-zinc-900 transition"
      >
        {t[language].logout}
      </button>
    </aside>
  );
}