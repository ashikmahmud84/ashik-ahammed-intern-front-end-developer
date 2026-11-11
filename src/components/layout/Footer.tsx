
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "API Docs", href: "/docs" },
    { label: "Browser Extension", href: "/extension" },
    { label: "Report Malicious URL", href: "/report-malicious-url" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/8801880811048",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-surface">
      <div className="mx-auto max-w-[1128px] px-5 sm:px-6 lg:px-0">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.8fr_0.8fr] lg:gap-16">

          {/* Brand & Contact */}
          <div className="flex flex-col items-start">

            {/* Logo */}
            <a
              href="/"
              className="mb-8 inline-block text-xs font-extrabold tracking-[0.28em] text-heading"
            >
              THETINY.SITE
            </a>

            {/* Description */}
            <p className="mb-6 max-w-[330px] text-sm leading-[1.65] text-body">
              The fastest way to shorten, track, and manage your URLs. Trusted
              by thousands of marketers, developers, and businesses across
              Bangladesh and beyond.
            </p>

            {/* Social Links */}
            <div className="mb-4 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-body transition-colors duration-200 hover:bg-secondary hover:text-primary"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-2 text-sm text-body">
              <a
                href="mailto:banglapuzzle@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail
                  size={17}
                  className="shrink-0 fill-primary text-primary"
                />
                <span>banglapuzzle@gmail.com</span>
              </a>

              <a
                href="tel:+8801880811048"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone
                  size={17}
                  className="shrink-0 fill-primary text-primary"
                />
                <span>+880 1880-811048</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.08em] text-heading">
              PRODUCT
            </h3>

            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.08em] text-heading">
              COMPANY
            </h3>

            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-gray-200 py-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-sm leading-6 text-body">
            © 2026{" "}
            <a
              href="/"
              className="font-medium text-primary hover:opacity-80"
            >
              Bangla Puzzle Limited.
            </a>{" "}
            All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-sm text-body transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
