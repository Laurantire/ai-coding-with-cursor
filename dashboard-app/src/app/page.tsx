'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-primary/10 to-background">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your SaaS Headline Here</h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl">A compelling subheadline that explains your value proposition. Edit this text to match your SaaS.</p>
        <Button size="lg" className="mb-8">Get Started</Button>
        <div className="w-full max-w-2xl h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">[Hero Image Placeholder]</div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">[Icon]</div>
                <CardTitle>Feature {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Short description of feature {i}. Edit this to describe your SaaS features.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{title:'Starter',price:'$19/mo'},{title:'Pro',price:'$49/mo'},{title:'Enterprise',price:'Contact Us'}].map((tier, i) => (
            <Card key={tier.title} className="h-full">
              <CardHeader>
                <CardTitle>{tier.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{tier.price}</div>
                <ul className="mb-6 space-y-2 text-left">
                  <li>✔ Feature A</li>
                  <li>✔ Feature B</li>
                  <li>✔ Feature C</li>
                </ul>
                <Button className="w-full">{i === 2 ? 'Contact Sales' : 'Choose Plan'}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>What is your SaaS about?</AccordionTrigger>
            <AccordionContent>
              Brief answer about your SaaS. Edit this FAQ to match your product.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How does pricing work?</AccordionTrigger>
            <AccordionContent>
              Brief answer about pricing. Edit this FAQ to match your product.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>How can I contact support?</AccordionTrigger>
            <AccordionContent>
              Brief answer about support. Edit this FAQ to match your product.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-2xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md bg-background" aria-label="Name" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md bg-background" aria-label="Email" />
          <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-md bg-background" rows={4} aria-label="Message" />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="text-center text-muted-foreground mt-6">Or email us at <a href="mailto:info@example.com" className="underline">info@example.com</a></div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border mt-auto">
        &copy; {new Date().getFullYear()} Your SaaS Name. All rights reserved.
      </footer>
    </div>
  )
}
