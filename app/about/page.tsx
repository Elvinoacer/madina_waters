"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/sections/ContactCTA";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-16 overflow-hidden">
      {/* Hero Header Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-blue-950 overflow-hidden">
        <Image
          src="/hero-water-bg.jpg"
          alt="Clean Water Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
            Our Story
          </h1>
          <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full" />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Section 1: The Origin */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <Image
              src="/store-front.jpg"
              alt="Purified Madina Water Storefront at The G2 Apartment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          <div className="space-y-6 text-lg text-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              Rooted in Kiamunyi
            </h2>
            <p className="leading-relaxed">
              Located at the heart of Kiamunyi in The G2 Apartment,{" "}
              <strong className="text-blue-900">Purified Madina Water</strong>{" "}
              was founded on a simple principle: everyone deserves access to
              clean, crisp, and safe drinking water without the hassle.
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-6 py-2 bg-white rounded-r-2xl shadow-sm italic text-xl font-medium text-slate-800">
              "Quench Thirst Like a Boss"
            </blockquote>
            <p className="leading-relaxed">
              This isn't just a catchy phrase—it reflects our commitment to
              premium service. Whether you are running a household, managing a
              corporate office, or hosting a major event, your hydration needs
              should be handled with absolute professionalism and speed.
            </p>
          </div>
        </motion.div>

        {/* Section 2: The Standard */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="space-y-6 text-lg text-slate-700 order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950">
              Our Standard of Purity
            </h3>
            <p className="leading-relaxed">
              We operate a state-of-the-art refill station. Every drop that goes
              into our <strong>20L, 10L, and 5L</strong> bottles passes through
              stringent purification processes to ensure it meets the highest
              health standards before it reaches your glass.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["Reverse Osmosis", "UV Sterilized", "pH Balanced"].map(
                (feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm shadow-sm"
                  >
                    ✓ {feature}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] order-1 lg:order-2 group">
            <Image
              src="/purification-system.jpg"
              alt="State-of-the-art water purification system"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Decorative Glass Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white font-medium shadow-lg z-10">
              State-of-the-art purification technology
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-4"
      >
        <ContactCTA />
      </motion.div>
    </main>
  );
}
