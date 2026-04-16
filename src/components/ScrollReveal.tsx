'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    // Dynamic selection based on the classes we used in components
    const selectors = [
      '[class*="Features_card"]',
      '[class*="HowItWorks_step"]',
      '[class*="Personas_persona"]',
      '[class*="Pricing_card"]',
      '[class*="Privacy_feature"]'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach((el) => {
      const target = el as HTMLElement;
      target.style.opacity = '0';
      target.style.transform = 'translateY(20px)';
      target.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
