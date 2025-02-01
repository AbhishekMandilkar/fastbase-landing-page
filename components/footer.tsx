import Link from "next/link"
import { Database } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-bold">
          <Database className="h-5 w-5" />
          FastBase
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-primary">
            Privacy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms
          </Link>
          <Link href="#" className="hover:text-primary">
            Contact
          </Link>
          <Link href="#" className="hover:text-primary">
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  )
}

