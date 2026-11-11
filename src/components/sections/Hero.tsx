
import { ArrowRight, Lock, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      className="bg-[#f5f6ff] px-5 py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        {/* Trust Badge */}
        <div className="mb-5 flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-medium text-violet-600">
          <Sparkles size={13} />
          Trusted by thousands of users
        </div>

        {/* Heading */}
        <h1 className="w-full text-4xl font-extrabold leading-tight tracking-tight text-black md:text-5xl">
          Shorten Your URL
          <span className="block text-violet-600">
            in seconds
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500 md:text-base">
          Create short, memorable links that you can share anywhere.
          Track every click with powerful analytics.
        </p>

        {/* Login Card */}
        <div className="mt-8 w-full max-w-md rounded-xl border border-white bg-white px-6 py-8 shadow-[0_8px_30px_rgba(79,70,229,0.10)]">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
            <Lock size={20} />
          </div>

          <h2 className="mt-5 text-lg font-bold text-gray-900">
            Login to make your URL short
          </h2>

          <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-gray-500">
            Sign in or create a free account to start shortening links,
            generating QR codes, and tracking every click in real time.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-700"
            >
              <Lock size={12} />
              Login to Make URL
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-violet-600 px-4 py-2.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50"
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
