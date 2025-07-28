"use client"

import { AnimatedGroup } from "@/components/ui/animated-group"
import { Button } from "@/components/ui/button"
import { HaloFeatures } from "@/components/cardGrid"
import Link from "next/link"
import { ArrowRight, Users, Target, Zap, TrendingUp, Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const parasquadCards = [
  {
    title: "Big-picture thinking",
    description: "We see beyond the brief, crafting strategies that transform brand narratives into cultural movements",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Fast-twitch execution",
    description: "Speed meets precision - we deliver campaigns that move at the speed of culture",
    icon: (
      <Zap className="w-5 h-5 text-white" />
    )
  },
  {
    title: "Energy that never drops",
    description: "From first brief to final delivery, our passion fuels every pixel and post",
    icon: (
      <TrendingUp className="w-5 h-5 text-white" />
    )
  },
  {
    title: "Focus on impact & ROI",
    description: "Every campaign is built to perform - creative excellence meets measurable results",
    icon: (
      <Target className="w-5 h-5 text-white" />
    )
  }
]

const industries = [
  "Broadcast", "FMCG", "Tech", "IT", "QSR", 
  "Startups", "Handsets", "Telecom", "RTE"
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "Facebook", icon: Facebook, url: "#" }
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <AnimatedGroup variants={transitionVariants}>
              <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm mb-8">
                <Users className="w-4 h-4" />
                <span>Meet The ParaSquad</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                The <span className="text-blue-400">ParaSquad</span>: Your Dream Team, IRL
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Meet The ParaSquad — the behind-the-scenes heroes making content magic happen.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Every service we offer is backed by dedicated, specialized teams who live and breathe their domain — 
                whether it&apos;s storytelling, strategy, data, design, or creator collabs.
              </p>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* ParaSquad Description */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="max-w-4xl">
                <p className="text-lg leading-relaxed mb-6">
                  We&apos;re talking creative thinkers, campaign slayers, data nerds, trend stalkers, and vibe curators — 
                  a crew built for the creator economy that runs on culture, speed, and scrolls.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  They don&apos;t just get briefs — they decode them, remix them, and deliver results that hit hard.
                </p>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/20">
                  <p className="text-xl font-semibold text-center">
                    Basically, they&apos;re the <span className="text-blue-400 font-bold">Spartans of the scroll</span> — 
                    battle-ready, brand-smart, and never out of ideas.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What makes us different?</h2>
            </div>
            
            <HaloFeatures cards={parasquadCards} />
            
            <div className="text-center mt-12">
              <p className="text-xl font-semibold text-blue-400">
                With the ParaSquad in your corner, you&apos;re not just keeping up — you&apos;re setting the feed on fire.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* From Brief to Brag */}
      <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Brief to Brag</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                At Parasocial, we&apos;ve teamed up with the biggest names across multiple industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="font-medium">{industry}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/20 text-center">
              <p className="text-lg mb-4">
                From strategy to execution, we&apos;ve launched scroll-stopping campaigns that aren&apos;t just creative — 
                they&apos;re efficient, effective, and ROI-slaying.
              </p>
              <p className="text-xl font-bold text-purple-400">
                Big brands, bold ideas, better results. That&apos;s how we roll.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Follow us on:</span>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Join the ParaSquad */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="bg-gradient-to-br from-black/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the ParaSquad</h2>
                <p className="text-xl mb-6">Work shouldn&apos;t feel like... work.</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-lg">
                    At Parasocial, we&apos;re building the ParaSquad — a team of storytellers, strategists, makers, 
                    and doers who live and breathe the Social Age.
                  </p>
                  <p className="text-lg">
                    We&apos;re not here for clock-watchers. We&apos;re here for big-picture thinkers, micro-detail nerds, 
                    design junkies, and creative tech-heads who can dream it and build it.
                  </p>
                  <p className="text-lg">
                    Whether you&apos;re a content wizard, a culture sponge, a pixel-perfect designer, or someone 
                    with a skill we didn&apos;t know we needed — let&apos;s talk.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 mb-8 border border-green-500/20">
                  <p className="text-lg font-semibold">
                    Work from anywhere (or everywhere) — we&apos;re cool with IRL, virtual, or hybrid setups.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Because real talent doesn&apos;t punch in — it shows up.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link href="/ContactUs" className="flex items-center gap-2">
                      Join the Squad
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    View Open Positions
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Internships: For the Real Ones Just Getting Started
                </h2>
                <p className="text-xl text-muted-foreground">Hey, young guns. Ready to step out of the classroom and into the content multiverse?</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-center">
                  If you&apos;re into marketing, branding, design, communication, or tech, and you&apos;ve got 
                  <span className="font-semibold text-blue-400"> curiosity + chaos + creativity </span> 
                  in your DNA — this is the internship you&apos;ve been scrolling for.
                </p>
                
                <p className="text-lg text-center">
                  At Parasocial, you don&apos;t just shadow — you show up. You&apos;ll get real-world, hands-on experience 
                  in building for the Social Age — with the chance to learn, create, mess up, glow up, and maybe 
                  even score a full-time gig if the vibe fits.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-500/20 text-center">
                <h3 className="text-xl font-bold mb-4">Because our career mantra is simple:</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Spot them young.</p>
                  <p className="text-lg font-semibold">Help them grow.</p>
                  <p className="text-lg font-semibold text-pink-400">
                    Let them shine.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Link href="/ContactUs" className="flex items-center gap-2">
                    Apply for Internship
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-br from-black/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the ParaSquad?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let&apos;s build something amazing together in the Social Age
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">                <Link href="/ContactUs" className="flex items-center gap-2">
                  Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
