"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  CalendarClock,
  ReceiptText,
  Truck,
  Droplets,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// Performant animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6"
            >
              <Droplets className="w-4 h-4" />
              <span>B2B Water Solutions in Nakuru</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Premium Corporate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Water Delivery.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Keep your team hydrated and productive. We provide seamless,
              scheduled water deliveries for offices and businesses, handling
              the heavy lifting so you don't have to.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://wa.me/254728126277?text=Hello%20Madina%20Water!%20I%20would%20like%20to%20schedule%20a%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 transition-all active:scale-95"
              >
                Schedule Delivery
              </Link>

              <Link
                href="https://wa.me/254728126277?text=Hello%20Madina%20Water!%20Could%20you%20please%20share%20your%20current%20pricing%20with%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:border-blue-200 hover:bg-blue-50 rounded-xl font-semibold transition-all active:scale-95"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Hero Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative h-[400px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-10" />
            <Image
              src="/corporate-hero.jpg" // Place your premium office/water image here
              alt="Corporate Water Delivery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: CalendarClock,
                title: "Automated Schedules",
                desc: "Set it and forget it. Weekly or bi-weekly deliveries tailored to your team's consumption rate.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: ReceiptText,
                title: "Monthly Invoicing",
                desc: "Simplified corporate billing. Receive one clean, consolidated invoice at the end of every month.",
                color: "text-cyan-600",
                bg: "bg-cyan-50",
              },
              {
                icon: Truck,
                title: "Priority Dispatch",
                desc: "B2B clients skip the line. Enjoy guaranteed same-day restocking if you ever run out unexpectedly.",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-8 rounded-3xl border border-slate-100 hover:border-blue-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROSE / ABOUT SECTION WITH SPLIT IMAGE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        >
          {/* Image Side */}
          <motion.div
            variants={imageReveal}
            className="md:w-2/5 relative min-h-[300px] md:min-h-full"
          >
            <Image
              src="/water-dispenser-office.jpg" // Place your secondary image here
              alt="Water Dispenser in Office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {/* Subtle overlay to blend image with the blue background */}
            <div className="absolute inset-0 bg-blue-900/20 md:bg-gradient-to-r md:from-transparent md:to-blue-900" />
          </motion.div>

          {/* Content Side */}
          <div className="md:w-3/5 p-10 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Never Run Dry Mid-Workday
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-6 text-blue-100 text-lg"
            >
              <p>
                Running out of water in the middle of a busy workday is a hassle
                your business doesn't need. Madina Water partners with local
                enterprises to ensure the cooler is always ready for the next
                meeting.
              </p>
              <p>
                We handle everything directly on-site—including removing empty
                20L bottles and setting up the fresh ones on the dispenser—so
                your staff doesn't have to lift a finger.
              </p>

              <ul className="pt-4 space-y-3">
                {[
                  "Free dispenser maintenance",
                  "Hygienic bottle handling",
                  "Zero disruption to your workflow",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <ContactCTA />
      </motion.div>
    </main>
  );
}
