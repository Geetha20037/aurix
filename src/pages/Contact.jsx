import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const contactItems = [
    {
      icon: Mail,
      title: 'Email us',
      value: 'hello@aurix.studio',
      href: 'mailto:hello@aurix.studio',
    },
    {
      icon: Phone,
      title: 'Call us',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      title: 'Our location',
      value: 'Bengaluru, Karnataka, India',
      href: 'https://maps.google.com/?q=Bengaluru',
    },
    {
      icon: Clock,
      title: 'Working hours',
      value: 'Monday – Friday, 9 AM – 6 PM',
      href: null,
    },
  ]

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#0a0a18] px-5 pb-20 pt-32 text-white sm:px-8">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-violet-700/10 blur-[120px]" />
          <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
        </div>

        <div className="section-shell relative">
          <Link
            to="/home"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium tracking-wide text-violet-300">
              <Sparkles size={14} /> LET'S CONNECT
            </span>

            <h1 className="display-font mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Have a project in mind?
              <span className="block bg-gradient-to-r from-violet-300 to-indigo-400 bg-clip-text text-transparent">
                Let's talk.
              </span>
            </h1>

            <p className="muted mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base">
              Tell us about your idea, your goals, and what you want to create.
              We'd love to hear from you.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="space-y-4">
              <div className="mb-7">
                <h2 className="text-2xl font-semibold">Get in touch</h2>
                <p className="muted mt-3 text-sm leading-6">
                  Have a question or need a creative partner? Reach out through
                  any of the options below.
                </p>
              </div>

              {contactItems.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.05]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-slate-400">{item.title}</p>
                      <p className="mt-1 break-words text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                    {item.href && (
                      <ArrowUpRight
                        size={16}
                        className="ml-auto shrink-0 text-slate-500"
                      />
                    )}
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith('https://') ? '_blank' : undefined}
                    rel={item.href.startsWith('https://') ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#101024]/90 p-6 shadow-2xl shadow-violet-950/10 sm:p-9"
            >
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </span>
                  <h2 className="mt-6 text-2xl font-semibold">
                    Thanks for reaching out!
                  </h2>
                  <p className="muted mt-3 max-w-sm text-sm leading-7">
                    Your form passed validation. This demo does not send messages
                    to a server yet.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-7"
                  >
                    Send another message <ArrowUpRight size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold">Send us a message</h2>
                  <p className="muted mt-2 text-sm">
                    Fill out the form and tell us how we can help.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-2 block text-sm text-slate-300">
                          Full name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          value={form.name}
                          onChange={updateField}
                          placeholder="Your name"
                          required
                          minLength={2}
                          autoComplete="name"
                          className="w-full rounded-xl border border-white/10 bg-[#0a0a18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="mb-2 block text-sm text-slate-300">
                          Email address *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={updateField}
                          placeholder="you@example.com"
                          required
                          autoComplete="email"
                          className="w-full rounded-xl border border-white/10 bg-[#0a0a18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="mb-2 block text-sm text-slate-300">
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={updateField}
                        placeholder="What would you like to discuss?"
                        required
                        className="w-full rounded-xl border border-white/10 bg-[#0a0a18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="mb-2 block text-sm text-slate-300">
                        Your message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={updateField}
                        placeholder="Tell us a little about your project..."
                        required
                        minLength={10}
                        rows={5}
                        className="w-full resize-y rounded-xl border border-white/10 bg-[#0a0a18] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center"
                    >
                      Send message <Send size={16} />
                    </button>

                    <p className="text-center text-xs leading-5 text-slate-500">
                      * Required fields. This is a frontend demonstration form.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
