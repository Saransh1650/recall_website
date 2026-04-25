import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function addToWaitlist(email: string) {
  if (!db) throw new Error("Firebase not initialized");

  const waitlistRef = collection(db, "waitlist");
  await addDoc(waitlistRef, {
    email,
    createdAt: Timestamp.now(),
  });
}
