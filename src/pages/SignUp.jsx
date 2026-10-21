
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: false,
}

export default function SignUp() {
  const [form, setForm] = useState(initialForm)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
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

    if (form.name.trim().length < 2) {
      setError('Please enter your full name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    if (!/^[+]?[\d\s()-]{7,20}$/.test(form.phone.trim())) {
      setError('Please enter a valid phone number.')
      return
    }

    if (form.password.length < 8) {
      setError('Your password must contain at least 8 characters.')
      return
    }

    if (!/[A-Za-z]/.test(form.password) || !/\d/.test(form.password)) {
      setError('Use at least one letter and one number in your password.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Your passwords do not match.')
      return
    }

    if (!form.terms) {
      setError('Please accept the Terms & Conditions to continue.')
      return
    }

    setLoading(true)

    const result = signUp(form)

    setLoading(false)

    if (!result.ok) {
      setError(result.message)
      return
    }

    setSuccess(result.message)
    navigate('/home', { replace: true })
  }

  function handleGoogleDemo() {
    setError('Google sign-in is a visual demo. No OAuth provider is connected.')
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 pt-24 sm:px-6">
      <div className="grid-pattern absolute inset-0" />
      <div className="glow-orb left-0 top-20 h-64 w-64 bg-violet-600" />
      <div className="glow-orb bottom-0 right-0 h-64 w-64 bg-fuchsia-600" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#101020] shadow-2xl shadow-black/30 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="relative hidden min-h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#28174a] via-[#191431] to-[#111020] p-10 lg:flex">
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
          <Link to="/" className="relative flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500">
              <Sparkles size={20} />
            </span>
            <span className="display-font text-xl font-bold tracking-[0.12em]">AURIX</span>
          </Link>

          <div className="relative py-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07]">
              <Sparkles size={30} className="text-violet-200" />
            </div>
            <h1 className="display-font text-4xl font-semibold leading-tight text-white">
              Make space for your next big idea.
            </h1>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Create your account and step into a world of creative possibilities,
              thoughtful design and modern digital experiences.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'A clean, personalized experience',
                'Explore our featured projects',
                'Discover new creative ideas',
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={17} className="text-violet-300" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-slate-500">
            AURIX · A creative digital concept
          </p>
        </aside>

        <section className="p-6 sm:p-9 lg:p-10">
          <Link to="/" className="mb-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white lg:hidden">
            <ArrowLeft size={16} /> Back to AURIX
          </Link>

          <div className="mb-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
              <Sparkles size={24} />
            </span>
            <h2 className="display-font mt-5 text-3xl font-semibold text-white">
              Create your account
            </h2>
            <p className="muted mt-2 text-sm leading-6">
              Join AURIX and start exploring.
            </p>
          </div>

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
            <span className="text-xs text-slate-500">OR SIGN UP WITH EMAIL</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="mb-2 block text-sm text-slate-300">
                Full name
              </label>
              <input
                id="signup-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter your full name"
                className="field"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="mb-2 block text-sm text-slate-300">
                Email address
              </label>
              <input
                id="signup-email"
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

            <div>
              <label htmlFor="signup-phone" className="mb-2 block text-sm text-slate-300">
                Phone number
              </label>
              <input
                id="signup-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={updateField}
                placeholder="+91 98765 43210"
                className="field"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="mb-2 block text-sm text-slate-300">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={updateField}
                  placeholder="At least 8 characters"
                  className="field pr-12"
                  required
                  minLength={8}
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
              <p className="mt-2 text-xs text-slate-500">
                Use at least 8 characters, including a letter and a number.
              </p>
            </div>

            <div>
              <label htmlFor="signup-confirm" className="mb-2 block text-sm text-slate-300">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="signup-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={updateField}
                  placeholder="Re-enter your password"
                  className="field pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 hover:text-white"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 py-1 text-sm text-slate-400">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={updateField}
                className="mt-1 h-4 w-4 accent-violet-500"
              />
              <span>
                I agree to the{' '}
                <Link to="/terms" className="text-violet-300 hover:text-white">
                  Terms & Conditions
                </Link>{' '}
                and understand this is a frontend demo.
              </span>
            </label>

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

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Creating account...' : 'Create account'}
              {!loading && <ArrowRight size={17} />}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={16} />
            Demo authentication only; no secure backend is connected.
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link to="/signin" className="font-semibold text-violet-300 hover:text-white">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
