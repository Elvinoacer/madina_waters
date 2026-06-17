"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const phoneNumbers = ["0790 349 039", "0705 707 041", "0728 126 277"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-6 sm:px-10 rounded-[2.5rem] shadow-2xl border border-blue-900/40">
      {/* Background Imagery & Textures */}
      <img
        src="/water-texture-dark.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
      />

      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-[-50%] right-[-20%] w-[30rem] h-[30rem] bg-blue-600/30 rounded-full blur-3xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-50%] left-[-20%] w-[30rem] h-[30rem] bg-sky-500/20 rounded-full blur-3xl pointer-events-none transform-gpu" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Need a Refill Now?
          </h2>
          <p className="text-blue-100/80 text-lg sm:text-xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Enjoy ultra-fast,{" "}
            <span className="text-rose-400 font-bold">free delivery</span>{" "}
            directly to your home, office, or event space within Nakuru.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3.5 rounded-2xl text-blue-200 font-semibold text-sm justify-center mx-auto lg:mx-0 shadow-inner">
            <svg
              className="w-5 h-5 text-rose-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Kiamunyi, The G2 Apartment</span>
          </div>
        </div>

        {/* Right Phone Numbers Grid */}
        <div className="lg:col-span-6 w-full flex flex-col gap-4">
          <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-blue-400/80 text-center lg:text-left mb-2">
            Tap Any Number for Instant Delivery
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            {phoneNumbers.map((num, idx) => (
              <motion.a
                variants={itemVariants}
                key={idx}
                href={`tel:${num.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 p-4 sm:p-5 rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-colors shadow-inner">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg sm:text-xl font-bold font-mono tracking-widest text-slate-200 group-hover:text-white transition-colors">
                    {num}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 shadow-md">
                    Call
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
