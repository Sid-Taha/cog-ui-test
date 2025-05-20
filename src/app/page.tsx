"use client";
import { useRouter } from "next/navigation";
// page.tsx
export default function Home() {
  useRouter().push("/sign-in")

  return (
    <>
    </>
  );
}
