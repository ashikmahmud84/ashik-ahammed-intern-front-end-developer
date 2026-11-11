
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Custom branded short links',
  'UTM parameter builder',
  'Powerful analytics dashboard',
  'QR Code generator (PNG/SVG)',
  'REST API with full documentation',
]

const analytics = [
  { url: 'shorturl.id/abc123', clicks: '1,247', width: '100%' },
  { url: 'shorturl.id/xy7h31', clicks: '589', width: '65%' },
  { url: 'shorturl.id/k7v21', clicks: '312', width: '42%' },
  { url: 'shorturl.id/fx0w9', clicks: '108', width: '25%' },
]

function PremiumTools() {
  return (
    <section className="w-full bg-[#F7F8FC] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Left Content */}
        <div className="min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5925F5]">
            Premium
          </span>

          <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Unlock powerful tools for serious growth.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Go beyond basic shortening with a full suite of marketing and
            developer tools — custom branded links, UTM builders, deep
            analytics, QR codes, and a REST API for your apps.
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-sm text-gray-700 sm:text-base"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 fill-[#E9E2FF] text-[#5925F5]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Analytics Dashboard */}
        <div className="w-full min-w-0 rounded-xl bg-[#5925F5] p-7 text-white shadow-sm sm:p-9">
          <h3 className="text-base font-bold sm:text-lg">
            Link Analytics Dashboard
          </h3>

          <div className="mt-8 space-y-6">
            {analytics.map((item) => (
              <div
                key={item.url}
                className="flex min-w-0 items-center gap-3"
              >
                <span className="w-28 shrink-0 truncate text-xs text-violet-200 sm:w-32 sm:text-sm">
                  {item.url}
                </span>

                <div className="relative h-6 min-w-0 flex-1">
                  <div
                    className="absolute left-0 top-0 h-full rounded-sm bg-white/10"
                    style={{ width: item.width }}
                  />
                </div>

                <span className="w-12 shrink-0 text-right text-xs font-bold sm:text-sm">
                  {item.clicks}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default PremiumTools
