import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma" // Update the import path if needed
import {Resend} from "resend"
import {EmailTemplate} from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate the email has been provided
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    // Server-side email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // // Create a new waitlist record
    // const record = await prisma.waitlist.create({
    //   data: { email },
    // });

    const { data, error } = await resend.emails.send({
      from: 'Fastbase <fastbase@fastbase.com>',
      to: [email],
      subject: "Welcome to the Waitlist! 🎉",
      react: EmailTemplate(),
    });

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
} 