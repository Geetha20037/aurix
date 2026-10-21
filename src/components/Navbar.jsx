import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
  LogOut,
  UserRound,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const links = [
  { label: 'Home', to: '/home' },
  { label: 'Services', to: '/home#services' },
  { label: 'Projects', to: '/home#projects' },
  { label: 'About', to: '/home#about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ landing = false }) {
  const [open, setOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    closeMenu()

    if (location.hash) {
      const sectionId = location.hash.slice(1)
      const timer = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 400)

      return () => window.clearTimeout(timer)
    }
  }, [location.pathname, location.hash])

  const goToSection = (event, to) => {
    event.preventDefault()
    closeMenu()

    const [path, hash] = to.split('#')

    if (location.pathname === path && hash) {
      document.getElementById(hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else if (location.pathname !== path || location.hash !== (hash ? `#${hash}` : '')) {
      navigate(to)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSignOut = () => {
    signOut()
    closeMenu()
    navigate('/')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0a0a18]/95 backdrop-blur-xl">
      <div className="section-shell flex h-[72px] items-center justify-between gap-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 text-white"
          aria-label="AURIX landing page"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-violet-800 shadow-lg shadow-violet-900/30">
            <Sparkles size={19} />
          </span>
          <span className="display-font text-xl font-bold tracking-[0.12em]">
            AURIX
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.to}
              onClick={(event) => goToSection(event, link.to)}
              className="whitespace-nowrap text-sm text-slate-400 transition-colors duration-200 hover:text-violet-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="hidden max-w-32 truncate text-sm text-slate-300 lg:block">
                Hi, {user.name?.split(' ')[0] || 'there'}
              </span>
              <Link
                to="/home#account"
                className="btn-outline !min-h-10 !px-3"
                onClick={closeMenu}
              >
                <UserRound size={15} />
                Profile
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
                aria-label="Sign out"
                title="Sign out"
              >
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                onClick={closeMenu}
                className="whitespace-nowrap text-sm text-slate-300 transition hover:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="btn-primary !min-h-10 !px-4"
              >
                Get started <ArrowUpRight size={15} />
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 md:hidden"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="aurix-mobile-navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div
          id="aurix-mobile-navigation"
          className="border-t border-white/10 bg-[#0d0d20] px-5 pb-6 pt-4 shadow-2xl md:hidden"
        >
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={(event) => goToSection(event, link.to)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3">
              {user ? (
                <>
                  <Link
                    to="/home#account"
                    onClick={closeMenu}
                    className="btn-outline"
                  >
                    <UserRound size={15} /> Profile
                  </Link>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="btn-primary"
                  >
                    <LogOut size={15} /> Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    onClick={closeMenu}
                    className="btn-outline"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="btn-primary"
                  >
                    Get started <ArrowUpRight size={15} />
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

