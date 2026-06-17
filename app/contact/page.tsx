"use client"; // Required for framer-motion in Next.js App Router

import ContactCTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";

export default function ContactPage() {
  // Animation configurations for high-performance cascading entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  const branches = [
    { name: "Town Branch", phone: "0798 910 545" },
    { name: "Kiamunyi (HQ)", phone: "0790 349 039" },
    { name: "Naka / JanMar", phone: "0758 282 909" },
    { name: "Barnabas / Pipeline", phone: "0792 254 497" },
    { name: "RaceCourse", phone: "0795 305 171" },
    { name: "Kenlands", phone: "0721 667 822" },
    { name: "Kiratina", phone: "0741 464 543" },
    { name: "Lanet", phone: "0707 690 895" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Premium Hero Section with Image Background */}
      <div
        className="relative h-[45vh] min-h-[380px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/70 to-slate-50 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <span className="text-blue-300 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Fast, Reliable Delivery Across Nakuru
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-sm">
              Get In Touch
            </h1>
            <p className="text-blue-100 max-w-xl mx-auto text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              Quench your thirst like a boss. Call our main lines or contact
              your nearest neighborhood branch for immediate fulfillment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Communication Matrix Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Primary Layout Block: Main Dispatch vs Branch Network */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Central Hotlines (Left Column) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-rose-600" />

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-600 text-lg">
                    ⚡
                  </span>
                  Central Dispatch
                </h2>
                <p className="text-slate-500 mb-6 text-sm sm:text-base leading-relaxed">
                  Call our core support lines for multi-tank bookings, corporate
                  office delivery setups, or urgent event tracking.
                </p>

                <div className="space-y-3.5">
                  {[
                    {
                      num: "0705 707 041",
                      label: "Main Hotline",
                      primary: true,
                    },
                    {
                      num: "0790 349 039",
                      label: "HQ Dispatch",
                      primary: false,
                    },
                    {
                      num: "0728 126 277",
                      label: "Alternative Line",
                      primary: false,
                    },
                  ].map((contact, idx) => (
                    <a
                      key={idx}
                      href={`tel:${contact.num.replace(/\s+/g, "")}`}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group/link ${
                        contact.primary
                          ? "bg-red-50/60 border-red-100 hover:bg-red-50 hover:border-red-300"
                          : "bg-slate-50 border-slate-100 hover:bg-slate-100 hover:border-slate-200"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 group-hover/link:text-red-500 transition-colors">
                          {contact.label}
                        </span>
                        <span
                          className={`font-mono text-xl sm:text-2xl font-black tracking-wider ${
                            contact.primary ? "text-red-600" : "text-slate-900"
                          }`}
                        >
                          {contact.num}
                        </span>
                      </div>
                      <div
                        className={`p-2.5 rounded-xl shadow-sm transition-all duration-300 ${
                          contact.primary
                            ? "bg-red-600 text-white group-hover/link:scale-105"
                            : "bg-white text-slate-700 group-hover/link:bg-slate-900 group-hover/link:text-white"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3 text-xs font-semibold text-emerald-600 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/50">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                🚀 Instant delivery response across all Nakuru estates.
              </div>
            </motion.div>

            {/* Neighborhood Branches Network (Right Column) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 text-lg">
                  📍
                </span>
                Branch Logistics Hubs
              </h2>
              <p className="text-slate-500 mb-6 text-sm sm:text-base">
                Tap your local neighborhood branch directly to minimize route
                transit time and experience lightning-fast free delivery.
              </p>

              {/* Responsive sub-grid structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {branches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200 group/branch"
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-slate-800 truncate group-hover/branch:text-blue-600 transition-colors">
                        {branch.name}
                      </span>
                      <span className="font-mono text-sm font-bold tracking-wider text-slate-500 group-hover/branch:text-slate-900 mt-0.5">
                        {branch.phone}
                      </span>
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="bg-white p-2 rounded-xl border border-slate-200 text-slate-400 group-hover/branch:bg-blue-600 group-hover/branch:text-white group-hover/branch:border-blue-600 transition-all duration-200 shadow-sm"
                      title={`Call ${branch.name}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Secondary Bento-style Matrix: Address, Hours, Hygiene */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Address Block */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-lg min-h-[160px] flex flex-col justify-end p-6 bg-blue-950 md:col-span-1 group"
              style={{
                backgroundImage: "url('/images/station-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/70 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="relative z-10 text-white">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  Visit Refill Station
                </span>
                <h3 className="text-xl font-extrabold tracking-tight">
                  The G2 Apartment
                </h3>
                <p className="text-sm text-blue-200">Kiamunyi, Nakuru County</p>
              </div>
            </div>

            {/* Operating Hours Block */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  Operating Hours
                </h3>
              </div>
              <div className="mt-4 space-y-1.5 text-sm font-medium">
                <p className="text-slate-500 flex justify-between">
                  <span>Mon - Sat:</span>
                  <span className="text-slate-900 font-bold">
                    7:00 AM - 8:00 PM
                  </span>
                </p>
                <p className="text-slate-500 flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-slate-900 font-bold">
                    8:00 AM - 5:00 PM
                  </span>
                </p>
              </div>
            </div>

            {/* Hygiene Block */}
            <div
              className="relative rounded-3xl p-6 shadow-lg overflow-hidden group hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                backgroundImage: "url('/images/hygiene.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-blue-900/90 group-hover:bg-blue-900/85 transition-colors duration-300" />
              <div className="relative z-10 text-white h-full flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-base">Strict Standards</h3>
                </div>
                <p className="text-xs text-blue-100/90 leading-relaxed mt-4">
                  Multi-stage osmosis purification and continuous station
                  chemical sanitation ensure pristine quality.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call To Action Footer Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <ContactCTA />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
