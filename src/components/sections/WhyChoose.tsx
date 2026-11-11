
import {
  Zap,
  ChartColumnIncreasing,
  Globe,
  QrCode,
  Lock,
  Clock,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Lightning Fast",
    description:
      "Shorten URLs instantly with our optimized infrastructure",
    icon: Zap,
  },
  {
    title: "Detailed Analytics",
    description:
      "Track clicks, referrers, locations, and devices",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Global CDN",
    description:
      "Fast redirects from anywhere in the world",
    icon: Globe,
  },
  {
    title: "QR Codes",
    description:
      "Generate QR codes for any shortened link",
    icon: QrCode,
  },
  {
    title: "Secure",
    description:
      "All links are encrypted and malware scanned",
    icon: Lock,
  },
  {
    title: "Expiration Control",
    description:
      "Set expiry dates or click limits",
    icon: Clock,
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-gray-50 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Why Choose Our Platform?
          </h2>

          <p className="mt-4 text-base text-gray-500">
            Everything you need to manage and track your links
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
              >
                {/* Icon */}
                <Icon
                  size={32}
                  strokeWidth={2}
                  className="mb-4 text-violet-600"
                />

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-black">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-[1.6] text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
