
import React from "react";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f8fc] px-6 pt-[80px] pb-[80px] font-sans">
      <div className="mx-auto max-w-[1154px]">

        {/* Section Header */}
        <div className="mb-[64px] text-center">
          <span className="mb-[18px] block text-[12px] font-bold tracking-[1.2px] text-[#a3a3a3]">
            TESTIMONIALS
          </span>

          <h2 className="text-[40px] leading-[1.2] font-extrabold tracking-[-0.5px] text-[#111111] max-sm:text-[28px]">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="w-full max-w-[368px] rounded-2xl border border-[#e0e3eb] bg-white p-6">

          {/* Star Rating */}
          <div className="mb-[17px] flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
                className="text-[#6525f5]"
              />
            ))}
          </div>

          {/* Review */}
          <p className="mb-[20px] text-[14px] leading-[1.5] text-[#111827]">
            "A good platform for Link management."
          </p>

          {/* User Info */}
          <div>
            <h3 className="text-[14px] font-bold leading-[1.4] text-[#111111]">
              Nadim Majid
            </h3>

            <p className="mt-[2px] text-[13px] text-[#64748b]">
              User
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
