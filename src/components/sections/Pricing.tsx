
import React from "react";

interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  button: string;
  featured?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "FREE",
    price: "$0",
    duration: "/forever",
    description: "Great for individuals and casual use.",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    button: "Get Started Free",
  },
  {
    name: "PRO",
    price: "$9",
    duration: "/per month",
    description: "For creators, marketers, and power users.",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    button: "Start 14-Day Trial",
    featured: true,
  },
  {
    name: "BUSINESS",
    price: "$29",
    duration: "/per month",
    description: "For teams and growing companies.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    button: "Subscribe Now",
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="w-full bg-white px-6 pt-[90px] pb-[78px] font-sans">
      <div className="mx-auto max-w-[1152px]">

        {/* Header */}
        <div className="mb-[57px] text-center">
          <span className="mb-[13px] block text-[12px] font-bold tracking-[1.2px] text-[#a3a3a3]">
            PRICING
          </span>

          <h2 className="mb-[13px] text-[42px] leading-[1.2] font-extrabold tracking-tight text-[#111111] max-sm:text-[30px]">
            Simple, transparent pricing.
          </h2>

          <p className="text-[16px] text-[#64748b] max-sm:text-sm">
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
                  ? "border-[#5920f5] bg-[#5920f5] text-white shadow-[0_18px_40px_rgba(89,32,245,0.18)]"
                  : "border-[#e0e3eb] bg-white"
              }`}
            >
              <div>
                {/* Plan Name */}
                <h3
                  className={`mb-[10px] text-[13px] font-bold tracking-[0.5px] ${
                    plan.featured
                      ? "text-[#d5c5ff]"
                      : "text-[#64748b]"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-[10px] flex items-baseline gap-[10px]">
                  <span
                    className={`text-[44px] leading-[1.1] font-extrabold tracking-[-1.5px] ${
                      plan.featured
                        ? "text-white"
                        : "text-[#111111]"
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`text-[14px] ${
                      plan.featured
                        ? "text-white"
                        : "text-[#64748b]"
                    }`}
                  >
                    {plan.duration}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mb-[25px] text-[15px] leading-[1.5] ${
                    plan.featured
                      ? "text-white"
                      : "text-[#64748b]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-[13px]">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-[14px] leading-[1.3] ${
                        plan.featured
                          ? "text-white"
                          : "text-[#111827]"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 min-w-5 items-center justify-center rounded-full text-[12px] font-bold ${
                          plan.featured
                            ? "bg-white/25 text-white"
                            : "bg-[#eee7ff] text-[#6535f5]"
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
                className={`flex h-[47px] w-full items-center justify-center gap-[10px] rounded-[10px] text-[14px] font-bold transition-none ${
                  plan.featured
                    ? "bg-white text-[#5920f5]"
                    : "bg-[#5920f5] text-white"
                }`}
              >
                {plan.button}
                <span className="text-[19px] font-normal leading-none">
                  →
                </span>
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;
