// Optimized for Light & Dark Theme using Tailwind's `dark:` classes
// Make sure `darkMode: "class"` is enabled in tailwind.config.js

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Zap, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-black dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Secure. Simple. <span className="text-indigo-600 dark:text-indigo-400">Futuristic</span> Authentication
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-10">
            A next-generation authentication platform built for developers and users who care about speed, security, and experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-6 text-lg border-slate-300 dark:border-slate-700"
            >
              View Docs
            </Button>
          </div>
        </motion.div>

        {/* Glow effect */}
        <div className="absolute -z-10 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full" />
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Designed with modern security standards, smooth UX, and developer-first architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Enterprise Security"
            description="JWT, OAuth2, refresh tokens, and encrypted sessions to protect every request."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Lightning Fast"
            description="Optimized backend and minimal frontend overhead for instant response times."
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Privacy First"
            description="Your data stays secure with modern hashing and zero-trust architecture."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Global Ready"
            description="Built to scale across regions with cloud-native deployment."
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 bg-slate-200/60 dark:bg-slate-900/60 backdrop-blur">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Secure Apps Faster?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            Start integrating a modern authentication system into your product today.
          </p>

          <Button size="lg" className="rounded-2xl px-10 py-6 text-lg">
            Create Free Account
          </Button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 text-center text-slate-600 dark:text-slate-500">
        <p>© {new Date().getFullYear()} AuthX Platform. Built with React, shadcn/ui, and modern security standards.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-slate-900/70 border-slate-800 rounded-2xl shadow-xl hover:shadow-indigo-500/20 transition">
      <CardContent className="p-6 flex flex-col items-start">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
