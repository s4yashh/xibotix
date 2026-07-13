"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { id: "domains", label: "Domains" },
  { id: "platform", label: "Platform" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navigationItems)[number]["id"];

export function LiquidNav() {
  const [activeSection, setActiveSection] = useState<SectionId>("domains");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id as SectionId);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    navigationItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" onClick={() => setActiveSection("domains")} aria-label="Xibotix home">
        <span className="wordmark-mark" />XIBOTIX
      </a>
      <div className="nav-links" data-active={activeSection}>
        <span className="nav-active-pill" aria-hidden="true" />
        {navigationItems.map(({ id, label }) => (
          <a href={`#${id}`} key={id} onClick={() => setActiveSection(id)} aria-current={activeSection === id ? "page" : undefined}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
