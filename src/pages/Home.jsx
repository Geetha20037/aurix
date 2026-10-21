
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
  LogOut,
  UserRound,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { useAuth } from '../context/AuthContext'
import {
  categories,
  faqs,
  highlights,
  projects,
  services,
  stats,
  testimonials,
} from '../data'

export default function Home() {
  const [category, setCategory] = useState('All Projects')
  const [query, setQuery] = useState('')
  const [faqOpen, setFaqOpen] = useState(0)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { user, signOut } = useAuth()

  const filteredProjects = useMemo(() => {
    const term = query.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory =
        category === 'All Projects' || project.category === category
      const matchesSearch =
        !term ||
        `${project.name} ${project.category} ${project.description}`
          .toLowerCase()
          .includes(term)

      return matchesCategory && matchesSearch
    })
  }, [category, query])

  function handleNewsletter(event) {
    event.preventDefault()

    if (!newsletterEmail.trim()) {
      setNewsletterMessage('Please enter your email address.')
      return
    }

    setSubscribed(true)
    setNewsletterMessage('You are on the list! This is a demo subscription.')
    setNewsletterEmail('')
  }

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <section className="relative min-h-[670px] pt-28 sm:min-h-[760px] sm:pt-36">
          <div className="grid-pattern absolute inset-0" />
          <div className="glow-orb right-0 top-20 h-72 w-72 bg-violet-600" />
          <div className="section-shell relative grid items-center gap-12 pb-20 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs text-violet-200">
                <Sparkles size={14} />
                WELCOME TO YOUR CREATIVE SPACE
              </div>
              <h1 className="display-font text-5xl font-semibold leading-[1.1] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Make room for
                <span className="gradient-text block">the extraordinary.</span>
              </h1>
              <p className="muted mt-6 max-w-xl text-base leading-8">
                Discover fresh ideas, beautiful digital experiences and
                creative possibilities designed for a world that never stands still.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  Explore projects <ArrowUpRight size={16} />
                </a>
                <a href="#services" className="btn-outline">
                  What we do <ArrowRight size={16} />
                </a>
              </div>
              <div className="mt-9 flex items-center gap-3 text-sm text-slate-400">
                <span className="flex -space-x-2">
                  {['A', 'U', 'X'].map((letter) => (
                    <span key={letter} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a18] bg-violet-500/20 text-xs text-violet-200">
                      {letter}
                    </span>
                  ))}
                </span>
                A space for ideas that move you.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute inset-10 rounded-full bg-violet-600/25 blur-3xl" />
              <div className="glass relative rounded-[28px] p-3">
                <img
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=90"
                  alt="Violet abstract artwork representing creative exploration"
                  className="h-[330px] w-full rounded-[22px] object-cover sm:h-[440px]"
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#101020]/90 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-violet-300">FEATURED COLLECTION</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        The future is a canvas.
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Explore a world of possibility.
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                      <Layers3 size={22} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/[0.06] bg-white/[0.02]">
          <div className="section-shell grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={21} className="shrink-0 text-violet-300" />
                <div>
                  <p className="display-font text-xl font-semibold text-white sm:text-2xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="pb-4 text-center text-[10px] text-slate-600">
            Illustrative portfolio figures for the frontend demonstration.
          </p>
        </section>

        <section id="projects" className="section-space">
          <div className="section-shell">
            <SectionHeading
              eyebrow="01 — SELECTED WORK"
              title="Ideas brought to life."
              description="Explore a curated sample of concepts across brand identity, web design and digital development."
            />

            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(({ name }) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => setCategory(name)}
                    className={`rounded-xl border px-4 py-2.5 text-xs font-medium transition ${
                      category === name
                        ? 'border-violet-400/40 bg-violet-500/15 text-violet-200'
                        : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <label className="flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 focus-within:border-violet-400/50 lg:w-72">
                <Search size={17} className="shrink-0 text-slate-500" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects..."
                  aria-label="Search projects"
                  className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                />
              </label>
            </div>

            {filteredProjects.length ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="soft-card group overflow-hidden rounded-2xl"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} concept`}
                        loading="lazy"
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18]/60 to-transparent opacity-70" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0a0a18] transition group-hover:bg-violet-300">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                      <p className="muted mt-2 text-sm leading-6">{project.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 px-5 py-16 text-center">
                <Search size={28} className="mx-auto text-slate-500" />
                <h3 className="mt-4 font-semibold text-white">No projects found</h3>
                <p className="muted mt-2 text-sm">Try another search or choose a different category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setCategory('All Projects')
                  }}
                  className="btn-outline mt-5"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="about" className="section-space border-y border-white/[0.06] bg-[#0e0d1e]">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
                alt="Creative workspace with a modern desk and collaborative design environment"
                loading="lazy"
                className="relative h-[340px] w-full rounded-3xl border border-white/10 object-cover sm:h-[440px]"
              />
              <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl p-4 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-xs uppercase tracking-[0.15em] text-violet-300">OUR PHILOSOPHY</p>
                <p className="mt-2 font-medium text-white">Creativity is not decoration. It is a way forward.</p>
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="02 — ABOUT AURIX"
                title={<>Curiosity first. <span className="gradient-text">Always.</span></>}
                description="We believe the strongest digital experiences begin with a simple question: how can this be better? AURIX brings thoughtful design and modern technology together to explore the answer."
              />
              <div className="space-y-5">
                {[
                  ['People before pixels', 'Put real people and their needs at the heart of every decision.'],
                  ['Clarity in every detail', 'Make complex ideas feel natural, approachable and easy to use.'],
                  ['Better with every iteration', 'Learn, refine and create experiences that keep improving.'],
                ].map(([title, description]) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-violet-300" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                      <p className="muted mt-1 text-sm leading-6">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/#introduction" className="btn-outline mt-7">
                More about our vision <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="section-space">
          <div className="section-shell">
            <SectionHeading
              eyebrow="03 — OUR CAPABILITIES"
              title="Everything starts with an idea."
              description="Discover the disciplines that turn inspiration into useful, beautiful digital experiences."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ id, title, description, icon: Icon, tag }) => (
                <motion.article key={id} whileHover={{ y: -4 }} className="soft-card rounded-2xl p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <Icon size={23} />
                  </span>
                  <p className="mt-5 text-[10px] tracking-[0.17em] text-violet-300">{tag}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                  <p className="muted mt-3 text-sm leading-7">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06] bg-[#0e0d1e]">
          <div className="section-shell">
            <SectionHeading
              eyebrow="04 — WHY AURIX"
              title="Designed with intention."
              description="A digital experience should look considered, feel intuitive and work beautifully wherever you are."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-white/[0.08] p-7">
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
              eyebrow="05 — CREATIVE IN MOTION"
              title="A little inspiration goes a long way."
              description="A visual collection of spaces, details and ideas that inspire our creative direction."
            />
            <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
              {[
                { image: 'photo-1494438639946-1ebd1d20bf85', alt: 'Minimal contemporary interior', span: 'lg:col-span-2 lg:row-span-2' },
                { image: 'photo-1558655146-d09347e92766', alt: 'Creative design materials', span: '' },
                { image: 'photo-1490312278390-ab64016e0aa9', alt: 'Minimal product styling', span: '' },
                { image: 'photo-1519389950473-47ba0277781c', alt: 'Digital collaboration', span: 'lg:col-span-2' },
                { image: 'photo-1600210492486-724fe5c67fb0', alt: 'Modern living space', span: '' },
              ].map(({ image, alt, span }) => (
                <div key={image} className={`group overflow-hidden rounded-2xl border border-white/10 ${span}`}>
                  <img
                    src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1000&q=85`}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06] bg-[#0e0d1e]">
          <div className="section-shell">
            <SectionHeading
              eyebrow="06 — KIND WORDS"
              title="Good things are built together."
              description="Illustrative feedback from our fictional portfolio clients."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="soft-card rounded-2xl p-6">
                  <div className="flex gap-1 text-amber-300">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
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

        <section className="section-space">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-[#28184b] via-[#17132e] to-[#101020] p-7 sm:p-12">
              <div className="glow-orb right-0 top-0 h-56 w-56 bg-violet-500" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">A NEW PERSPECTIVE</p>
                  <h2 className="display-font mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                    Your next big idea deserves a little room.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                    Step into the AURIX experience and start exploring what is possible.
                  </p>
                </div>
                <Link to="/signup" className="btn-primary w-fit">
                  Get started <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-space border-y border-white/[0.06] bg-[#0e0d1e]">
          <div className="section-shell">
            <SectionHeading
              eyebrow="07 — QUESTIONS"
              title="A few things you might wonder."
              description="Quick answers about the AURIX experience and this demo website."
            />
            <div className="mx-auto max-w-3xl space-y-3">
              {faqs.map((faq, index) => {
                const expanded = faqOpen === index

                return (
                  <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => setFaqOpen(expanded ? -1 : index)}
                      aria-expanded={expanded}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="text-sm font-semibold text-white sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-violet-300 transition-transform ${expanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expanded && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="muted text-sm leading-7">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="newsletter" className="section-space">
          <div className="section-shell">
            <div className="glass mx-auto max-w-3xl rounded-3xl p-7 text-center sm:p-12">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Mail size={23} />
              </span>
              <h2 className="display-font mt-5 text-3xl font-semibold text-white sm:text-4xl">
                A little inspiration, delivered.
              </h2>
              <p className="muted mx-auto mt-4 max-w-lg text-sm leading-7">
                Join our demo newsletter for creative inspiration, fresh perspectives and digital ideas.
              </p>
              <form onSubmit={handleNewsletter} className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(event) => {
                    setNewsletterEmail(event.target.value)
                    setNewsletterMessage('')
                    setSubscribed(false)
                  }}
                  placeholder="Enter your email address"
                  aria-label="Newsletter email address"
                  className="field flex-1"
                />
                <button type="submit" className="btn-primary">
                  {subscribed ? 'Subscribed' : 'Subscribe'} <ArrowRight size={16} />
                </button>
              </form>
              {newsletterMessage && (
                <p role="status" className={`mt-4 text-sm ${subscribed ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {subscribed && <Check size={15} className="mr-1 inline" />}
                  {newsletterMessage}
                </p>
              )}
              <p className="mt-4 text-xs text-slate-600">
                Demo only. No newsletter service or emails are connected.
              </p>
            </div>
          </div>
        </section>

        <section id="account" className="pb-20">
          <div className="section-shell">
            <div className="soft-card flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                  <UserRound size={23} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    {user ? `Welcome, ${user.name}` : 'Make AURIX your creative space'}
                  </h3>
                  <p className="muted mt-1 break-all text-sm">
                    {user ? user.email : 'Create a demo account to try the sign-in experience.'}
                  </p>
                </div>
              </div>
              {user ? (
                <button
                  type="button"
                  onClick={signOut}
                  className="btn-outline w-fit"
                >
                  <LogOut size={16} /> Sign out
                </button>
              ) : (
                <Link to="/signup" className="btn-primary w-fit">
                  Create account <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
