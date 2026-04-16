'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    const selectors = [
      '[class*="Pricing_card"]',
      '[class*="Privacy_card"]',
      '[class*="Sections_card"]',
      '[class*="Sections_recCard"]',
      '[class*="Sections_aiCard"]',
      '[class*="Sections_journalFull"]',
      '[class*="Sections_peopleCard"]',
      '[class*="Sections_searchCard"]',
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach((el) => {
      const target = el as HTMLElement;
      target.style.opacity = '0';
      target.style.transform = 'translateY(24px)';
      target.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
