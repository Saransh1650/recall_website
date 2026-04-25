import { app, analytics } from "@/lib/firebase";

export function useFirebase() {
  return { app, analytics };
}
