"use client";

import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/home3", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "/#industries", label: "Industries" },
  { href: "/reviews", label: "Reviews" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#team-structure", label: "Our Team" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Home3Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]">
      {/* Noise texture overlay - monotone noise, size 0.5, density 100% */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4 }}>
        <filter id="footerNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#footerNoise)" style={{ mixBlendMode: "overlay" }} />
      </svg>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 lg:py-16">
          {/* Mobile: Logo and social at top, then 2-col grid for links */}
          {/* Desktop: 4-col grid */}

          {/* Logo Section - full width on mobile */}
          <div className="lg:hidden mb-8">
            <Link href="/home3" className="flex items-center justify-center mb-4">
              <Image
                src={getImageUrl("apexbatch-logo2.png")}
                alt="Apex Batch"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#000000]/70 text-sm leading-relaxed text-center mb-4 max-w-xs mx-auto">
              Leading precision manufacturing services with advanced technology and industrial expertise.
            </p>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#7F4D0F]/20 hover:bg-[#7F4D0F]/30 rounded-full flex items-center justify-center text-[#7F4D0F] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {/* Company Info - hidden on mobile, shown in desktop grid */}
            <div className="hidden lg:block">
              <Link href="/home3" className="flex items-center mb-6">
                <Image
                  src={getImageUrl("apexbatch-logo2.png")}
                  alt="Apex Batch"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-[#000000]/70 text-sm leading-relaxed mb-6">
                Leading precision manufacturing services with advanced technology and industrial expertise.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#7F4D0F]/20 hover:bg-[#7F4D0F]/30 rounded-full flex items-center justify-center text-[#7F4D0F] transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#000000] font-bold text-sm lg:text-base mb-4 lg:mb-6">Quick Links</h4>
              <ul className="space-y-2 lg:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#000000]/70 hover:text-[#000000] transition-colors text-xs lg:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-[#000000] font-bold text-sm lg:text-base mb-4 lg:mb-6">About</h4>
              <ul className="space-y-2 lg:space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#000000]/70 hover:text-[#000000] transition-colors text-xs lg:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us - full width on mobile */}
            <div className="col-span-2 lg:col-span-1 mt-4 lg:mt-0">
              <h4 className="text-[#000000] font-bold text-sm lg:text-base mb-4 lg:mb-6">Contact Us</h4>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start gap-2 lg:gap-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#7F4D0F] mt-0.5 flex-shrink-0" />
                  <span className="text-[#000000]/70 text-xs lg:text-sm leading-relaxed">
                    2nd Floor, Building F, 52 Huangpu Road, Shangliao Community, Xinqiao Street, Baoan District, Shenzhen, China
                  </span>
                </li>
                <li className="flex items-center gap-2 lg:gap-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#7F4D0F] flex-shrink-0" />
                  <a
                    href="tel:+8613302480516"
                    className="text-[#000000]/70 hover:text-[#000000] transition-colors text-xs lg:text-sm"
                  >
                    +86 13302480516
                  </a>
                </li>
                <li className="flex items-center gap-2 lg:gap-3">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#7F4D0F] flex-shrink-0" />
                  <a
                    href="mailto:info@apexbatch.com"
                    className="text-[#000000]/70 hover:text-[#000000] transition-colors text-xs lg:text-sm"
                  >
                    info@apexbatch.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 lg:py-6 border-t border-[#7F4D0F]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-4">
            <p className="text-[#000000]/70 text-xs lg:text-sm">
              &copy; 2026 ApexBatch. All rights reserved.
            </p>
            <div className="flex gap-4 lg:gap-8 text-xs lg:text-sm">
              <Link
                href="/privacy-policy"
                className="text-[#000000]/70 hover:text-[#000000] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[#000000]/70 hover:text-[#000000] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-[#000000]/70 hover:text-[#000000] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
