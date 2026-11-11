
interface PricingPlan {
  name: string
  price: string
  duration: string
  description: string
  features: string[]
  button: string
  featured?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'FREE',
    price: '$0',
    duration: '/forever',
    description: 'Great for individuals and casual use.',
    features: [
      'Unlimited link shortening',
      'Basic click counter',
      'HTTPS security',
      'QR code (basic)',
      'Cross-device support',
    ],
    button: 'Get Started Free',
  },
  {
    name: 'PRO',
    price: '$9',
    duration: '/per month',
    description: 'For creators, marketers, and power users.',
    features: [
      'Everything in Free',
      'Custom short links',
      'Advanced analytics',
      'UTM builder',
      'QR code (custom)',
      'Browser extension',
      'Priority support',
    ],
    button: 'Start 14-Day Trial',
    featured: true,
  },
  {
    name: 'BUSINESS',
    price: '$29',
    duration: '/per month',
    description: 'For teams and growing companies.',
    features: [
      'Everything in Pro',
      'Team dashboard',
      'Developer API',
      'Bulk link creation',
      'White-label domain',
      'App integrations',
      'Dedicated support',
    ],
    button: 'Subscribe Now',
  },
]

function Pricing() {
  return (
    <section className="w-full bg-surface px-6 pt-[90px] pb-[78px]">
      <div className="mx-auto max-w-[1152px]">

        {/* Header */}
        <div className="mb-[57px] text-center">
          <span className="mb-[13px] block text-xs font-bold tracking-[1.2px] text-body">
            PRICING
          </span>

          <h2 className="mb-[13px] text-3xl leading-[1.2] font-extrabold tracking-tight text-heading sm:text-4xl">
            Simple, transparent pricing.
          </h2>

          <p className="text-sm text-body sm:text-base">
            No hidden fees. Start free, scale when you're ready.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex min-h-[494px] flex-col justify-between rounded-2xl border px-8 pt-[34px] pb-[31px] ${
                plan.featured
                  ? 'border-primary bg-primary text-white shadow-[0_18px_40px_rgba(89,32,245,0.18)]'
                  : 'border-gray-200 bg-surface'
              }`}
            >
              <div>
                {/* Plan Name */}
                <h3
                  className={`mb-[10px] text-sm font-bold tracking-[0.5px] ${
                    plan.featured
                      ? 'text-white/80'
                      : 'text-body'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-[10px] flex items-baseline gap-[10px]">
                  <span
                    className={`text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl ${
                      plan.featured
                        ? 'text-white'
                        : 'text-heading'
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`text-sm ${
                      plan.featured
                        ? 'text-white'
                        : 'text-body'
                    }`}
                  >
                    {plan.duration}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mb-[25px] text-sm leading-[1.5] sm:text-base ${
                    plan.featured
                      ? 'text-white'
                      : 'text-body'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-[13px]">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm leading-[1.3] ${
                        plan.featured
                          ? 'text-white'
                          : 'text-heading'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 min-w-5 items-center justify-center rounded-full text-xs font-bold ${
                          plan.featured
                            ? 'bg-white/25 text-white'
                            : 'bg-secondary text-primary'
                        }`}
                      >
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                type="button"
                className={`flex h-[47px] w-full items-center justify-center gap-[10px] rounded-[10px] text-sm font-bold transition-colors ${
                  plan.featured
                    ? 'bg-white text-primary hover:bg-secondary'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {plan.button}
                <span className="text-lg font-normal leading-none">
                  →
                </span>
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Pricing
