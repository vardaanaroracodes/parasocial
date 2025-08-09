"use client"
import React, { useState } from "react"

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })
  const [errors, setErrors] = useState<Record<string,string>>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: "" }))
  }

  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name = "Required"
    if (!form.email.trim()) e.email = "Required"
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email"
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Min 10 chars"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-red-600/10" />
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-28 lg:flex-row lg:items-start lg:gap-32 lg:px-12">
        {/* Intro */}
        <div className="max-w-xl space-y-8">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-wide text-orange-200/80 uppercase">Contact</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-red-500 bg-clip-text text-transparent">Let&apos;s Build Something</span><br />
            <span className="text-white/80">Worth Talking About</span>
          </h1>
          <p className="text-lg leading-relaxed text-orange-100/70">
            Slide in with an idea, a problem, or a crazy ambition. We&apos;ll come back with strategy, structure, and fire. No fluff—just clarity, momentum and ROI-focused execution.
          </p>
          <ul className="grid gap-3 text-sm text-orange-200/70 sm:grid-cols-2">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />Avg response &lt; 2h</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />Remote-friendly</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />Strategy + Execution</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />No bullshit zone</li>
          </ul>
        </div>

        {/* Form */}
        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_-4px_rgba(0,0,0,0.4)]">
            {!sent && (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-orange-200/80">Name</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} autoComplete="name" className={`w-full rounded-lg border bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-orange-400/70 focus:bg-black/40 ${errors.name ? 'border-red-500/70' : 'border-white/10'}`} placeholder="Jane Doe" />
                    {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-orange-200/80">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" className={`w-full rounded-lg border bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-orange-400/70 focus:bg-black/40 ${errors.email ? 'border-red-500/70' : 'border-white/10'}`} placeholder="you@brand.com" />
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-medium uppercase tracking-wide text-orange-200/80">Company (optional)</label>
                  <input id="company" name="company" value={form.company} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-orange-400/70 focus:bg-black/40" placeholder="Parasocial" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-orange-200/80">Message</label>
                  <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} className={`w-full resize-none rounded-lg border bg-black/30 px-4 py-3 text-sm leading-relaxed outline-none transition focus:border-orange-400/70 focus:bg-black/40 ${errors.message ? 'border-red-500/70' : 'border-white/10'}`} placeholder="Tell us what you want to build..." />
                  {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                </div>
                <button type="submit" disabled={loading} className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-950/30 transition hover:from-orange-400 hover:via-orange-300 hover:to-red-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                  <span className="relative flex items-center justify-center gap-2">
                    {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />}
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/30 to-transparent opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
                <p className="pt-2 text-center text-[10px] tracking-wide text-orange-200/60">We respect your time & inbox. No spam—ever.</p>
              </>
            )}
            {sent && (
              <div className="flex flex-col items-center gap-6 py-6 text-center">
                <div className="relative">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-orange-500/20 to-red-500/20 ring-1 ring-white/10 flex items-center justify-center">
                    <svg className="h-10 w-10 text-orange-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">Message Sent</h2>
                <p className="max-w-sm text-sm leading-relaxed text-orange-100/70">We got it. Someone from the squad will reach out shortly (usually within a couple hours).</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", message: "" }) }} className="rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-orange-200 hover:border-orange-400/40 hover:bg-orange-400/10 transition">Send Another</button>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
