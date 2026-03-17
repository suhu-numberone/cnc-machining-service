"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn, getImageUrl } from "@/lib/utils";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavColumn {
  heading: string;
  href: string;
  links: NavLink[];
}

interface NavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  items?: NavLink[];
}

const navItems: NavItem[] = [
  { label: "Homepage", href: "/" },
  {
    label: "Services",
    columns: [
      {
        heading: "CNC Machining",
        href: "/cnc-machining",
        links: [],
      },
      {
        heading: "Sheet Metal",
        href: "/sheet-metal-fabrication",
        links: [],
      },
      {
        heading: "Molding",
        href: "/injection-molding",
        links: [
          { href: "/injection-molding", label: "Injection Molding" },
          { href: "/extrusion-services", label: "Extrusion Services" },
          { href: "/die-casting", label: "Die Casting" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "/materials", label: "Materials" },
      { href: "/surface-finish", label: "Surface Finish" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/about", label: "About ApexBatch" },
      { href: "/quality", label: "Quality Assurance" },
      { href: "/reviews", label: "Customer Reviews" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

function DropdownMenu({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        className="relative flex items-center gap-1 text-[#000000]/80 hover:text-[#000000] transition-all text-sm font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7F4D0F] after:transition-all hover:after:w-full"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
          style={{ minWidth: item.columns ? "680px" : "200px" }}
        >
          <div
            className="rounded-xl shadow-2xl overflow-hidden"
            style={{
              background: "#1A1A1A",
              borderTop: "3px solid #D09947",
            }}
          >
            {item.columns ? (
              <div className="grid grid-cols-3" style={{ padding: "28px 32px" }}>
                {item.columns.map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col">
                    <Link
                      href={column.href}
                      className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
                    >
                      <span
                        style={{
                          width: "3px",
                          height: "16px",
                          background: "#D09947",
                          borderRadius: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        className="text-[16px] font-bold uppercase tracking-wider"
                        style={{ color: "#D09947" }}
                      >
                        {column.heading}
                      </span>
                    </Link>
                    <div className="flex flex-col gap-1 pl-3">
                      {column.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-[16px] text-white/70 hover:text-white transition-colors py-1.5"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col py-2">
                {item.items?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-3 text-[16px] text-white/80 hover:text-[#EEC569] hover:bg-white/5 transition-all font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Home3Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]"
          : "bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={getImageUrl("apexbatch-logo2.png")}
              alt="Apex Batch"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[#000000]/80 hover:text-[#000000] transition-all text-sm font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7F4D0F] after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ) : (
                <DropdownMenu
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onOpen={() => setOpenDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                />
              )
            )}
          </nav>

          {/* CTA Button */}
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="hidden lg:inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#000000] text-white hover:text-[#D09947] active:text-[#D09947] font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#000000] hover:bg-black/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] shadow-2xl transition-transform duration-300 overflow-y-auto",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col p-6 pt-8">
            {navItems.map((item, index) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between text-white hover:text-[#EEC569] transition-colors text-lg font-medium py-4 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </Link>
              ) : (
                <div key={item.label} className="border-b border-white/10">
                  <button
                    className="flex items-center justify-between w-full text-white hover:text-[#EEC569] transition-colors text-lg font-medium py-4"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 opacity-50 transition-transform",
                        openMobileDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openMobileDropdown === item.label && (
                    <div className="pb-3 pl-4 flex flex-col gap-1">
                      {item.columns
                        ? item.columns.map((col) => (
                            <Link
                              key={col.href}
                              href={col.href}
                              className="text-white/70 hover:text-[#EEC569] transition-colors text-base py-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {col.heading}
                            </Link>
                          ))
                        : (item.items || []).map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-white/70 hover:text-[#EEC569] transition-colors text-base py-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              )
            )}

            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D09947] to-[#EEC569] hover:from-[#EEC569] hover:to-[#D09947] text-black font-semibold px-6 py-4 rounded-xl transition-all text-lg mt-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>

            {/* Contact Info */}
            <div className="mt-auto pt-8 border-t border-white/10 mt-8">
              <p className="text-white/60 text-sm mb-2">Need help?</p>
              <a
                href="mailto:info@apexbatch.com"
                className="text-[#EEC569] text-base font-medium"
              >
                info@apexbatch.com
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
