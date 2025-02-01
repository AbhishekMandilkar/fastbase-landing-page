import { Zap, Layout, Database, FileDown, Bot } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  return (
    <section id="features" className="container py-24">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Upcoming Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Zap className="h-6 w-6 text-primary" />
            <CardTitle>Blazing Fast Performance</CardTitle>
            <CardDescription>Optimized for smooth interactions with large PostgreSQL datasets.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Layout className="h-6 w-6 text-primary" />
            <CardTitle>Modern UI</CardTitle>
            <CardDescription>Intuitive interface designed for PostgreSQL workflows.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Database className="h-6 w-6 text-primary" />
            <CardTitle>Advanced PostgreSQL Features</CardTitle>
            <CardDescription>Full support for arrays, JSON, materialized views, and extensions.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>AI-Powered Suggestions</CardTitle>
            <CardDescription>Smart query recommendations optimized for PostgreSQL best practices.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <FileDown className="h-6 w-6 text-primary" />
            <CardTitle>Flexible Exports</CardTitle>
            <CardDescription>Export data in CSV, JSON, JSONL, or PostgreSQL-compatible SQL formats.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="h-6 w-6 text-primary" />
            <CardTitle>Native Table Editing</CardTitle>
            <CardDescription>Edit table data directly with full support for PostgreSQL data types.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

