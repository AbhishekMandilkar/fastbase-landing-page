import Link from "next/link"
import { Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import BrandIcon from "./brand-icon"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <BrandIcon className="w-6 h-6" />
          FastBase
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary">
            FAQ
          </Link>
          <Button variant="default">Join Waitlist</Button>
        </nav>
      </div>
    </header>
  )
}

