
import { Star } from 'lucide-react'

function Testimonials() {
  return (
    <section className="w-full bg-background px-6 pt-[80px] pb-[80px]">
      <div className="mx-auto max-w-[1154px]">

        {/* Section Header */}
        <div className="mb-[64px] text-center">
          <span className="mb-[18px] block text-xs font-bold tracking-[1.2px] text-body">
            TESTIMONIALS
          </span>

          <h2 className="text-2xl leading-[1.2] font-extrabold tracking-tight text-heading sm:text-4xl">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="w-full max-w-[368px] rounded-2xl border border-gray-200 bg-surface p-6">

          {/* Star Rating */}
          <div className="mb-[17px] flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
                className="text-primary"
              />
            ))}
          </div>

          {/* Review */}
          <p className="mb-[20px] text-sm leading-[1.5] text-heading">
            "A good platform for Link management."
          </p>

          {/* User Info */}
          <div>
            <h3 className="text-sm font-bold leading-[1.4] text-heading">
              Nadim Majid
            </h3>

            <p className="mt-[2px] text-xs text-body">
              User
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
