"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/sections/ContactCTA";

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-delivery.jpg" // Place your high-res hero image here
            alt="Purified Madina Water Delivery Truck"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4 tracking-wider uppercase">
            Nakuru&apos;s Fastest
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-md">
            Free Delivery Network
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Convenience is key. We offer{" "}
            <span className="font-bold text-white underline decoration-red-500 decoration-4 underline-offset-4">
              100% FREE Delivery
            </span>{" "}
            for homes, offices, and events across Nakuru.
          </p>
        </motion.div>
      </section>

      {/* --- Hub Section --- */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                Our Hub: Kiamunyi
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Operating out of{" "}
              <strong className="text-blue-900">The G2 Apartment</strong> in
              Kiamunyi, our dedicated fleet of delivery scooters and trucks is
              constantly on the move. We ensure your fresh water refills are
              dispatched and delivered straight to your door with zero delays.
            </p>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-3xl font-bold text-blue-900 mb-1">100%</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  Free Delivery
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-3xl font-bold text-blue-900 mb-1">Fast</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  Dispatch Times
                </p>
              </div>
            </div>
          </motion.div>

          {/* Imagery Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/scooter-delivery.jpg" // Image of your scooter fleet
                  alt="Delivery Scooter"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/water-dispenser-office.jpg" // Image of The G2 Apartment / Hub
                  alt="Kiamunyi Hub"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Cards Section --- */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Tailored Delivery Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you need water for your family, your staff, or a large
              gathering, we have a specialized delivery process for you.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/home-setup.jpg" // Image of home dispenser setup
                  alt="Home Deliveries"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  Home Deliveries
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">
                  Seamless doorstep delivery. We do the heavy lifting, and our
                  team will even handle your kitchen or dispenser setup for
                  free.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/office-delivery.jpg" // Image of corporate office
                  alt="Corporate Office"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  Corporate Offices
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">
                  Keep your team hydrated without the hassle. We offer automated
                  weekly schedules tailored to your office consumption rates.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/event-bulk.jpg" // Image of a wedding/conference
                  alt="Bulk Events"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  Bulk Events
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">
                  Weddings, conferences, and large gatherings. We coordinate
                  bulk drop-offs directly to your venue, perfectly on time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Call To Action Section --- */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ContactCTA />
        </motion.div>
      </section>
    </main>
  );
}
