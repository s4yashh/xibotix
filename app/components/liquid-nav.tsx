"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { id: "platform", label: "Platform" },
  { id: "domains", label: "Domains" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navigationItems)[number]["id"];

export function LiquidNav() {
  const [activeSection, setActiveSection] = useState<SectionId>("platform");

  useEffect(() => {
    // Use a scroll-based calculation: pick the section whose center
    // is closest to the viewport center. This is more stable across
    // different screen sizes and avoids flicker from intersectionRatio.
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    let ticking = false;

    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId: SectionId = sections[0].id as SectionId;
      let minDist = Infinity;

      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const dist = Math.abs(sectionCenter - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          closestId = s.id as SectionId;
        }
      });

      setActiveSection(closestId);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
      }
    };

    // Initial calculation and listeners
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" onClick={() => setActiveSection("platform")} aria-label="Xibotix home">
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
