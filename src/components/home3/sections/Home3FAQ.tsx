"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Have Any ",
  titleHighlight: "Questions?",
  subtitle:
    "Find answers to common questions about our precision manufacturing services, quality standards, and production capabilities",
  faqItems: [
    {
      question:
        "What manufacturing tolerances can ApexBatch achieve for precision components?",
      answer:
        "We achieve tolerances as tight as \u00B10.01mm for CNC machining and \u00B10.05mm for standard parts. Our Zeiss CMM equipment verifies critical dimensions to ensure your specifications are met consistently across production runs.",
    },
    {
      question:
        "How does ApexBatch ensure quality consistency across production batches?",
      answer:
        "We implement rigorous IPQC (In-Process Quality Control) every 2 hours during production. Combined with first article inspection, final inspection, and full documentation including COC and material certificates, we maintain 99.8% quality rates across all orders.",
    },
    {
      question:
        "What is your typical lead time for prototype vs. batch production?",
      answer:
        "Standard lead times range from 5-10 business days for prototypes and 2-4 weeks for production runs depending on complexity and quantity. We offer expedited services for urgent projects.",
    },
    {
      question:
        "How does ApexBatch handle material selection and certification for regulated industries?",
      answer:
        "Yes, we provide full material traceability and certification for all orders. This includes mill certificates, material test reports, and certificates of conformance. We source materials from approved suppliers with documented quality standards.",
    },
    {
      question:
        "What after-sales solutions does ApexBatch provide?",
      answer:
        "We provide comprehensive after-sales support including technical consultation, design optimization for future orders, quality issue resolution, and ongoing engineering support. Our dedicated project managers are available to assist with any concerns.",
    },
  ],
  stillHaveQuestionsTitle: "Still Have Questions?",
  stillHaveQuestionsDescription:
    "Our engineering team is ready to discuss your specific manufacturing requirements and provide tailored solutions for your project.",
  contactButton: "Contact Sales Team",
  quoteButton: "Request a Quote",
};

export function Home3FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(
            ellipse 80% 50% at 50% 0%,
            rgba(208,153,71,0.15),
            transparent 50%
          ),
          #1A1A1A
        `
      }}
    >
      {/* Constrained width container - 960px max */}
      <div className="max-w-[960px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-white mb-4 tracking-[-0.02em]" style={{ fontSize: "clamp(36px, 7vw, 68px)", fontWeight: 800 }}>
            <EditableText
              path="faq.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span className="text-[#EEC569]">
              <EditableText
                path="faq.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#888888", fontSize: "clamp(16px, 2.5vw, 21px)" }}>
            <EditableText
              path="faq.subtitle"
              defaultValue={DEFAULTS.subtitle}
              multiline
            />
          </p>
        </motion.div>

        {/* FAQ Accordion - Card Style with proper spacing */}
        <div className="space-y-3 mb-12 mt-12">
          {DEFAULTS.faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "rounded-xl overflow-hidden transition-colors duration-200",
                openIndex === index
                  ? "bg-[#D09947]/30"
                  : "bg-[#2A2A2A] hover:bg-[#D09947]/30"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 min-h-[72px] py-5 px-6 text-left group"
              >
                {/* Number Badge */}
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-[68px] sm:h-[68px]"
                  style={{
                    background: "#EEC569",
                  }}
                >
                  <span className="font-bold text-xl sm:text-[28px]" style={{ color: "#000000" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Question Text - max 85% width, larger font */}
                <span className="flex-1 font-semibold max-w-[85%] leading-snug text-base sm:text-lg md:text-[21px]" style={{ color: "#FFFFFF" }}>
                  <EditableText
                    path={`faq.items.${index}.question`}
                    defaultValue={item.question}
                  />
                </span>

                {/* Chevron with animation - larger size */}
                <div className="pl-4 flex-shrink-0">
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-all duration-[250ms] ease-out text-[#D09947]",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {/* Answer with proper spacing - mt-3, pb-7 */}
                    <div className="px-6 pb-7 pl-6 sm:pl-[76px]">
                      <p className="text-white text-[15px] leading-[1.7] mt-1">
                        <EditableText
                          path={`faq.items.${index}.answer`}
                          defaultValue={item.answer}
                          multiline
                        />
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2A2A2A] rounded-2xl p-10 text-center border border-[#3A3A3A]"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-[#3A3A3A] rounded-xl flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-6 h-6 text-[#D09947]" />
          </div>

          <h3 style={{ fontSize: "clamp(24px, 4vw, 30px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "12px" }}>
            <EditableText
              path="faq.stillHaveQuestionsTitle"
              defaultValue={DEFAULTS.stillHaveQuestionsTitle}
            />
          </h3>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 21px)", color: "#F9EBBC", maxWidth: "480px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.5, marginBottom: "32px" }}>
            <EditableText
              path="faq.stillHaveQuestionsDescription"
              defaultValue={DEFAULTS.stillHaveQuestionsDescription}
              multiline
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
            >
              <EditableText
                path="faq.contactButton"
                defaultValue={DEFAULTS.contactButton}
              />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
            >
              <EditableText
                path="faq.quoteButton"
                defaultValue={DEFAULTS.quoteButton}
              />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
