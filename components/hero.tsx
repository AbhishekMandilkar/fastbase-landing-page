import { ArrowRight, TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";
import Image from "next/image";
import screenshot from "@/resources/img2.png";
import SmoothMount from "./smooth-mount";
import { TextEffect } from "./ui/text-effect";
import HeroBanner from "./hero-banners";
import {ShinyButton} from "./ui/shiny-button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-12 md:py-24 space-y-6 relative">
      <div className="flex flex-col items-center text-center relative space-y-6">
        <Link href="/apr-25">
          <ShinyButton>Recent Updates</ShinyButton>
        </Link>
        <TextEffect
          preset="fade-in-blur"
          speedReveal={1.5}
          speedSegment={0.9}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl "
        >
          Databases Are Complex—Your Client Shouldn’t Be
        </TextEffect>
        <SmoothMount>
          <div className="flex flex-col items-center text-center space-y-6">
            <p className="max-w-[600px] text-xl text-muted-foreground">
              Fastbase brings clarity, speed, and elegance to PostgreSQL
              management with a sprinkle of AI
            </p>
            <div className="flex gap-4">
              <WaitlistDialog />
            </div>
            <HeroBanner />
          </div>
        </SmoothMount>
      </div>
      <SmoothMount>
        <Image src={screenshot} alt="ss" className="rounded-xl border-4" />
      </SmoothMount>
    </section>
  );
}
