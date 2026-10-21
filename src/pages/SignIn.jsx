
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  Mail,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: true,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [resetMode, setResetMode] = useState(false)
  const [resetMessage, setResetMessage] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  function updateField(event) {
    const { name, value, checked, type } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setError('')
    setSuccess('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    if (!form.password) {
      setError('Please enter your password.')
      return
    }

    setLoading(true)
    const result = signIn(form)
    setLoading(false)

    if (!result.ok) {
      setError(result.message)
      return
    }

    setSuccess(result.message)
    navigate('/home', { replace: true })
  }

  function handleForgotPassword(event) {
    event.preventDefault()
    setResetMessage('Password reset is a demo state. No email service is connected.')
  }

  function handleGoogleDemo() {
    setError('Google sign-in is a visual demo. No OAuth provider is connected.')
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 pt-24 sm:px-6">
      <div className="grid-pattern absolute inset-0" />
      <div className="glow-orb left-0 top-20 h-64 w-64 bg-violet-600" />
      <div className="glow-orb bottom-0 right-0 h-64 w-64 bg-fuchsia-600" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#101020] shadow-2xl shadow-black/30 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative hidden min-h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#28174a] via-[#191431] to-[#111020] p-10 lg:flex">
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
          <Link to="/" className="relative flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500">
              <Sparkles size={20} />
            </span>
            <span className="display-font text-xl font-bold tracking-[0.12em]">AURIX</span>
          </Link>

          <div className="relative py-12">
            <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07]">
              <Mail size={29} className="text-violet-200" />
            </span>
            <h1 className="display-font text-4xl font-semibold leading-tight text-white">
              Welcome back to your creative space.
            </h1>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Sign in to revisit the AURIX experience and continue exploring
              ideas, design and digital possibilities.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-xs uppercase tracking-[0.17em] text-violet-300">
                AURIX PRINCIPLE
              </p>
              <p className="mt-3 text-lg font-medium leading-7 text-white">
                Good design makes the next step feel natural.
              </p>
            </div>
          </div>

          <p className="relative text-xs text-slate-500">
            AURIX · A creative digital concept
          </p>
        </aside>

        <section className="p-6 sm:p-10 lg:p-12">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white lg:hidden">
            <ArrowLeft size={16} /> Back to AURIX
          </Link>

          <div className="mb-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
              <Sparkles size={24} />
            </span>
            <h2 className="display-font mt-5 text-3xl font-semibold text-white">
              {resetMode ? 'Reset your password' : 'Welcome back'}
            </h2>
            <p className="muted mt-2 text-sm leading-6">
              {resetMode
                ? 'Enter your email to explore the password reset demo.'
                : 'Enter your details to sign in to your account.'}
            </p>
          </div>

          {!resetMode && (
            <>
              <button
                type="button"
                onClick={handleGoogleDemo}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-[#4285F4]">
                  G
                </span>
                Continue with Google
              </button>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-slate-500">OR CONTINUE WITH EMAIL</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </>
          )}

          <form
            onSubmit={resetMode ? handleForgotPassword : handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="signin-email" className="mb-2 block text-sm text-slate-300">
                Email address
              </label>
              <input
                id="signin-email"
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                className="field"
                required
              />
            </div>

            {!resetMode && (
              <>
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label htmlFor="signin-password" className="text-sm text-slate-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setResetMode(true)
                        setError('')
                        setSuccess('')
                        setResetMessage('')
                      }}
                      className="text-xs text-violet-300 transition hover:text-white"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="signin-password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      autoComplete="current-password"
                      value={form.password}
                      onChange={updateField}
                      placeholder="Enter your password"
                      className="field pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={updateField}
                    className="h-4 w-4 accent-violet-500"
                  />
                  Remember me
                </label>
              </>
            )}

            {error && (
              <p role="alert" className="rounded-xl border border-rose-500/20 bg-rose-500/[0.08] p-3 text-sm leading-6 text-rose-300">
                {error}
              </p>
            )}

            {success && (
              <p role="status" className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.08] p-3 text-sm text-emerald-300">
                {success}
              </p>
            )}

            {resetMessage && (
              <p role="status" className="rounded-xl border border-violet-500/20 bg-violet-500/[0.08] p-3 text-sm leading-6 text-violet-200">
                {resetMessage}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Signing in...' : resetMode ? 'Continue' : 'Sign in'}
              {!loading && <ArrowRight size={17} />}
            </button>

            {resetMode && (
              <button
                type="button"
                onClick={() => {
                  setResetMode(false)
                  setResetMessage('')
                  setError('')
                }}
                className="w-full py-2 text-sm text-slate-400 transition hover:text-white"
              >
                Back to sign in
              </button>
            )}
          </form>

          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={16} />
            Frontend demo authentication
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-violet-300 hover:text-white">
              Sign up
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
