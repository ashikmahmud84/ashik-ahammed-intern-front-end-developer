
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
    <section className="w-full bg-background px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-heading sm:text-4xl">
            Why Choose Our Platform?
          </h2>

          <p className="mt-4 text-sm text-body sm:text-base">
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
                className="rounded-2xl border border-gray-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
              >
                {/* Icon */}
                <Icon
                  size={32}
                  strokeWidth={2}
                  className="mb-4 text-primary"
                />

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-heading">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-[1.6] text-body">
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
