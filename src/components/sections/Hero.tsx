
import { ArrowRight, Lock, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="bg-background px-5 py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        {/* Trust Badge */}
        <div className="mb-5 flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          <Sparkles size={13} />
          Trusted by thousands of users
        </div>

        {/* Heading */}
        <h1 className="w-full text-4xl font-extrabold leading-tight tracking-tight text-heading md:text-5xl">
          Shorten Your URL
          <span className="block text-primary">
            in seconds
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-lg text-sm leading-6 text-body md:text-base">
          Create short, memorable links that you can share anywhere. Track every click with powerful analytics.
        </p>

        {/* Login Card */}
        <div className="mt-8 w-full max-w-md rounded-xl border border-white bg-surface px-6 py-8 shadow-[0_8px_30px_rgba(79,70,229,0.10)]">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock size={20} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-heading">
            Login to make your URL short
          </h2>

          <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-body">
            Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <Lock size={12} />
              Login to Make URL
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-secondary"
            >
              Sign Up Free
              <ArrowRight size={13} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
