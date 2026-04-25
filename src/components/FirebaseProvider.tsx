"use client";

import { ReactNode, useEffect } from "react";
import "@/lib/firebase";

export function FirebaseProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Firebase initialized on module load
  }, []);

  return <>{children}</>;
}
