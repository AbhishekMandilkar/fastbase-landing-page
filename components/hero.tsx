import { ArrowRight, TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";
import Image from "next/image";
import screenshot from "@/resources/img.png";
import SmoothMount from "./smooth-mount";
import { TextEffect } from "./ui/text-effect";
import HeroBanner from "./hero-banners";

export default function Hero() {
  return (
    <section className="container py-12 md:py-24 space-y-6 relative">
      <div className="flex flex-col items-center text-center relative space-y-6">
        <TextEffect
          preset="fade-in-blur"
          speedReveal={.5}
          speedSegment={0.3}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl "
        >
          Databases Are Complex—Your Client Shouldn’t Be
        </TextEffect>
        <SmoothMount>
          <div className="flex flex-col items-center text-center space-y-6">
            <p className="max-w-[600px] text-lg text-muted-foreground">
            Fastbase brings clarity, speed, and elegance to PostgreSQL management.
            </p>
            <div className="flex gap-4">
              <WaitlistDialog>
                <Button size="lg">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </WaitlistDialog>
            </div>
            <HeroBanner />
          </div>
        </SmoothMount>
      </div>
      <SmoothMount>
        <Image src={screenshot} alt="ss" />
      </SmoothMount>
    </section>
  );
}
