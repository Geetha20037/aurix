import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Mail, Heart } from "lucide-react";

const links = [
  { label: "Home", to: "/home" },
  { label: "About", to: "/home#about" },
  { label: "Services", to: "/home#services" },
  { label: "Projects", to: "/home#projects" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080b18] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
                <Sparkles size={22} />
              </span>
              <span className="text-2xl font-black tracking-wider">
                AURIX<span className="text-violet-400">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              We turn ambitious ideas into meaningful digital experiences
              through strategy, creative design, and modern technology.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm text-violet-300 transition hover:text-white"
            >
              <Mail size={16} />
              Get in touch
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Explore</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Let's create</h3>
            <p className="text-sm leading-6 text-slate-400">
              Have an idea worth bringing to life? Let's build something
              remarkable together.
            </p>

            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-400/40 px-4 py-2.5 text-sm font-medium transition hover:border-violet-400 hover:bg-violet-500/10"
            >
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} AURIX Creative Studio. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart size={13} className="text-violet-400" /> and
            creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
