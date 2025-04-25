import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CursorEffect } from "@/components/cursor-effect"

export const metadata = {
  title: "Ali Murtaza - Senior Software Engineer",
  description:
    "Personal portfolio of Ali Murtaza, a Senior Software Engineer specializing in web development, mobile development, migration services, web scraping, e-commerce solutions, SEO, performance optimization, technical consulting, and AI automation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <CursorEffect />
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
