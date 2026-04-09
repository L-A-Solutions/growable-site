import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const HomeProcess = dynamic(() => import("@/components/HomeProcess"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <HomeProcess />
    </>
  );
}
