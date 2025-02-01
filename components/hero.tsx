import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <section className="container py-24 space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4 relative">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ">
            The Next-Gen PostgreSQL Client <br />
            Coming Soon to Mac
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Lightning-fast, beautiful, and AI-powered PostgreSQL client. Be the
            first to experience the future of database management.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
