import { Hero } from "@/components/sections/Hero";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowIHelp />
      <FeaturedWork />
      <ContactCta />
    </>
  );
}
