import Banner from "@/components/Banner";
import FeaturedRooms from "@/components/FeaturedRooms";
import Image from "next/image";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <div>
    <ModeToggle/>
    <Banner/>
    <FeaturedRooms/>
    <Hero/>
    <Hero1/>
    </div>
  );
}
