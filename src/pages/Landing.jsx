
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Palette,
  Sparkles,
  Zap,
  Play,
  Quote,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { highlights, services, testimonials } from '../data'

export default function Landing() {
  return (
    <>
      <Navbar landing />

      <main className="overflow-hidden">
        <section className="relative flex min-h-[760px] items-center pb-20 pt-32 sm:min-h-[820px]">
          <div className="grid-pattern absolute inset-0" />
          <div className="glow-orb left-[10%] top-[18%] h-64 w-64 bg-violet-600" />
          <div className="glow-orb right-[5%] top-[25%] h-80 w-80 bg-fuchsia-600" />

          <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs text-violet-200">
                <Sparkles size={14} />
                YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h1 className="display-font max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Build beyond
                <span className="gradient-text block">ordinary.</span>
              </h1>

              <p className="muted mt-7 max-w-lg text-base leading-8 sm:text-lg">
                Where creative thinking meets intelligent technology. Explore
                a world of digital experiences made to inspire, connect and
                move ideas forward.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/home" className="btn-primary">
                  Explore AURIX <ArrowUpRight size={17} />
                </Link>
                <a href="#introduction" className="btn-outline">
                  <Play size={15} /> Discover our vision
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                {['Design-led thinking', 'Modern technology', 'Built for everyone'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-violet-400" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute inset-8 rounded-full bg-violet-600/25 blur-3xl" />
              <div className="glass pulse-glow relative overflow-hidden rounded-[32px] p-3 sm:p-5">
                <img
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=90"
                  alt="Abstract violet digital art representing creativity and innovation"
                  className="h-[350px] w-full rounded-[24px] object-cover sm:h-[440px]"
                />
                <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-[#101020]/85 p-4 backdrop-blur-xl sm:inset-x-9 sm:bottom-9 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-violet-300">THE AURIX APPROACH</p>
                      <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                        Ideas into experiences.
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                      <Zap size={22} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="float-animation absolute -right-2 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#16152b] p-4 shadow-2xl sm:flex md:-right-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300">
                  <Palette size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Creative energy</p>
                  <p className="text-xs text-slate-400">Without boundaries</p>
                </div>
              </div>
            </motion.div>
          </div>

          <a
            href="#introduction"
            aria-label="Scroll to introduction"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-white sm:block"
          >
            <ArrowDown size={22} />
          </a>
        </section>

        <section id="introduction" className="section-space border-y border-white/[0.06] bg-white/[0.015]">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="01 — WHO WE ARE"
                title={<>A different way to think about <span className="gradient-text">digital.</span></>}
                description="AURIX is a creative digital concept built around the belief that technology should feel intuitive, design should feel intentional, and every interaction should mean something."
              />
              <Link to="/home#about" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white">
                Discover our story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '01', title: 'Think clearly', icon: Sparkles, desc: 'Start with a meaningful idea.' },
                { number: '02', title: 'Design boldly', icon: Palette, desc: 'Create with purpose.' },
                { number: '03', title: 'Build smartly', icon: Code2, desc: 'Make every detail work.' },
                { number: '04', title: 'Grow together', icon: Zap, desc: 'Keep moving forward.' },
              ].map(({ number, title, icon: Icon, desc }) => (
                <div key={number} className="soft-card rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <Icon size={23} className="text-violet-300" />
                    <span className="text-xs text-slate-600">{number}</span>
                  </div>
                  <h3 className="mt-6 font-semibold text-white">{title}</h3>
                  <p className="muted mt-2 text-sm leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-space">
          <div className="section-shell">
            <SectionHeading
              eyebrow="02 — WHAT WE DO"
              title="Small details. Big possibilities."
              description="Explore the creative and technical disciplines behind thoughtful digital experiences."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ id, title, description, icon: Icon, tag }) => (
                <motion.article
                  key={id}
                  whileHover={{ y: -5 }}
                  className="soft-card rounded-2xl p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                      <Icon size={23} />
                    </span>
                    <span className="text-[10px] tracking-[0.16em] text-slate-500">{tag}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                  <p className="muted mt-3 text-sm leading-7">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06] bg-[#0e0d1e]">
          <div className="section-shell">
            <SectionHeading
              eyebrow="03 — THE DIFFERENCE"
              title="Made to feel different."
              description="A considered approach to creativity, performance and the people who use what we build."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-white/[0.08] p-6 sm:p-8">
                  <Icon size={27} className="text-violet-300" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                  <p className="muted mt-3 text-sm leading-7">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="section-shell">
            <SectionHeading
              eyebrow="04 — KIND WORDS"
              title="Good ideas travel further together."
              description="A sample of the feedback our fictional AURIX clients might share."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="soft-card rounded-2xl p-6">
                  <Quote size={24} className="text-violet-300" />
                  <p className="mt-5 text-sm leading-7 text-slate-300">“{item.quote}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200">
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-[#25164a] via-[#17132e] to-[#101020] px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="glow-orb left-1/2 top-0 h-56 w-56 -translate-x-1/2 bg-violet-500" />
              <div className="relative">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                  YOUR IDEA, YOUR NEXT MOVE
                </p>
                <h2 className="display-font mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-5xl">
                  Ready to explore what comes next?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
                  Discover the AURIX experience and find inspiration for your next digital idea.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link to="/signup" className="btn-primary">
                    Join AURIX <ArrowUpRight size={16} />
                  </Link>
                  <Link to="/home" className="btn-outline">
                    Explore home <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
