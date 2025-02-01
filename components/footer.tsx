import Link from "next/link"
import { Database } from "lucide-react"
import BrandIcon from "./brand-icon"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-bold">
          <BrandIcon className="size-5" />
          FastBase
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} FastBase
        </nav>
      </div>
    </footer>
  )
}

