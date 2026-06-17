"use client"; // Required if you are using Next.js App Router

import React, { useState } from "react";
import MPesaBadge from "@/components/ui/MPesaBadge";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "Do you deliver to my area?",
    answer:
      "We offer free delivery primarily around Kiamunyi, Nakuru, and surrounding estates. If you are further out, send us a WhatsApp message and we'll let you know the dispatch schedule for your zone.",
  },
  {
    question: "How do I pay for my water?",
    answer:
      "We accept mobile money for a seamless, cashless experience. You can pay directly to our Safaricom Buy Goods Till Number: 5898147 once your water arrives.",
  },
  {
    question: "Do I need to have an empty bottle?",
    answer:
      "For standard refills, yes. However, if you are a new customer or need extra capacity, you can purchase brand new 20L, 10L, or 5L bottles directly from us.",
  },
  {
    question: "Do you supply water for corporate offices?",
    answer:
      "Absolutely. We can set up a recurring weekly delivery schedule for your office so you never run out of water. Contact us to set up a corporate account.",
  },
];

// Reusable Accordion Item Component
const FAQItem = ({ faq, index }: { faq: Faq; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 bg-white rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-100 group">
      {/* 
        ACCESSIBILITY FIX: Semantic change. The heading now wraps the button trigger 
        so screen readers can accurately interpret the document hierarchy layout.
      */}
      <h3 className="text-lg md:text-xl font-semibold">
        <button
          id={`faq-button-${index}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          className="w-full text-left px-5 sm:px-6 py-5 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl cursor-pointer group-hover:text-blue-700 transition-colors text-blue-900"
        >
          <span className="pr-4 leading-snug">{faq.question}</span>

          {/* Animated Chevron Icon */}
          <div
            className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 bg-blue-100" : ""}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
      </h3>

      {/* Smooth Height Transition using CSS Grid */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-6 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-14">
        {/* 
          CRITICAL CONTRAST FIX (Ref: image_881422.png): 
          Changed text-blue-950 to text-white to pop against the dark background canvas.
        */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        {/* 
          CRITICAL CONTRAST FIX (Ref: image_881422.png): 
          Changed text-gray-600 to text-slate-300 to make subtitle copy legible.
        */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Everything you need to know about our water delivery services in
          Nakuru.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </div>

      {/* Payment Banner */}
      <div className="relative overflow-hidden bg-linear-to-br from-blue-900 to-blue-950 p-6 sm:p-8 md:p-10 rounded-3xl text-center shadow-xl border border-white/5">
        {/* Subtle background decoration */}
        <div
          className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-5 blur-2xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-white opacity-5 blur-xl"
          aria-hidden="true"
        ></div>

        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            Seamless Cashless Payments
          </h2>
          <p className="text-blue-100/90 mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            For your convenience and security, we process all deliveries via
            M-Pesa upon arrival.
          </p>
          <div className="flex justify-center bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm border border-white/20 w-fit mx-auto">
            <MPesaBadge />
          </div>
        </div>
      </div>
    </main>
  );
}
