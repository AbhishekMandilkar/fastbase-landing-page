import { ArrowRight, TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";
import Image from "next/image";
import screenshot from "@/resources/img.png";
import SmoothMount from "./smooth-mount";
import { TextEffect } from "./ui/text-effect";

export default function Hero() {
  return (
    <section className="container py-12 md:py-24 space-y-8 relative">
      <div className="flex flex-col items-center text-center space-y-4 relative">
        <TextEffect
          preset="fade-in-blur"
          speedReveal={1.1}
          speedSegment={0.3}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl "
        >
          The Next-Gen PostgreSQL Client Coming Soon to Mac
        </TextEffect>
        <SmoothMount>
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Lightning-fast, beautiful, and AI-powered PostgreSQL client. Be
              the first to experience the future of database management.
            </p>
            <div className="flex gap-4">
              <WaitlistDialog>
                <Button size="lg">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </WaitlistDialog>
            </div>
          </div>
        </SmoothMount>
      </div>
      <SmoothMount>
        <Image src={screenshot} alt="ss" />
      </SmoothMount>
    </section>
  );
}
