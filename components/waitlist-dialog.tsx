"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Confetti from 'react-confetti'

export function WaitlistDialog(props: {children: React.ReactNode}) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const resetState = () => {
    setEmail("")
    setError("")
    setIsLoading(false)
    setIsSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      setIsLoading(false)
      return
    }
    setError("")
 
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setIsSuccess(true)
        setEmail("")
        setError("")
      } else {
        const data = await response.json()
        setError(data.error || "Failed to join waitlist. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }


  const title = isSuccess ? "Welcome to the Waitlist!" : "Join our Waitlist"
  const description = isSuccess ? "We'll keep you posted on our progress." : "Be the first to know when we launch. Enter your email below."

  return (
    <Dialog onOpenChange={(open) => {
      if (!open) resetState()
    }}>
      <DialogTrigger asChild>{props?.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center h-full p-8">
          {/* <Confetti width={400} height={400} /> */}
          <p className="text-8xl">🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              required
              disabled={isLoading}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
} 