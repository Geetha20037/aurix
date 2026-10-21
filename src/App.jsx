import { Suspense, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import { AuthProvider } from './context/AuthContext'
import ScrollToTop from './components/ScrollToTop'
import Landing from './pages/Landing'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'

function PageLoader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a18]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300"
      >
        <Sparkles size={29} />
      </motion.div>

      <p className="display-font mt-5 text-lg font-bold tracking-[0.2em] text-white">
        AURIX
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Preparing something extraordinary...
      </p>

      <div className="mt-5 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-1/2 rounded-full bg-violet-500"
        />
      </div>
    </div>
  )
}

function Terms() {
  const sections = [
    {
      title: '1. Demo purpose',
      text: 'AURIX is a demonstration project designed to showcase a responsive website, reusable interface components and frontend interactions.',
    },
    {
      title: '2. Demo accounts',
      text: 'Registration and sign-in use browser storage for demonstration purposes only. They are not a production identity or authentication service.',
    },
    {
      title: '3. Sample content',
      text: 'Projects, statistics, testimonials and other illustrative material are sample content. They should not be interpreted as verified client work or business claims.',
    },
    {
      title: '4. External services',
      text: 'Social login, password reset, newsletters and external social links are demonstration interfaces unless a real service is independently configured.',
    },
    {
      title: '5. Privacy and security',
      text: 'Do not enter real passwords or confidential personal information into this demo. Browser storage is not an appropriate place for production credentials.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a18] px-5 pb-16 pt-32 text-white">
      <div className="section-shell mx-auto max-w-3xl">
        <Link
          to="/signup"
          className="mb-8 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-white"
        >
          <ArrowLeft size={16} /> Back to registration
        </Link>

        <h1 className="display-font text-4xl font-semibold">
          Terms &amp; Conditions
        </h1>

        <p className="muted mt-3 text-sm">AURIX frontend demonstration</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="muted mt-3 text-sm leading-7">{section.text}</p>
            </section>
          ))}
        </div>

        <Link to="/signup" className="btn-primary mt-10">
          Return to sign up <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  )
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a18] px-5 pt-20 text-center text-white">
      <div>
        <p className="display-font text-8xl font-bold text-violet-400">
          404
        </p>

        <h1 className="display-font mt-5 text-3xl font-semibold">
          This page went exploring.
        </h1>

        <p className="muted mx-auto mt-4 max-w-md text-sm leading-7">
          The page you are looking for could not be found. Let's get you back
          to AURIX.
        </p>

        <Link to="/" className="btn-primary mt-7">
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </main>
  )
}

function RouteContent() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowLoader(false)
    }, 1800)

    return () => window.clearTimeout(timeout)
  }, [])

  if (showLoader) {
    return <PageLoader />
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RouteContent />
      </BrowserRouter>
    </AuthProvider>
  )
}


