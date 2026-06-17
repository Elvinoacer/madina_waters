import Link from "next/link";
import ContactCTA from "@/components/sections/ContactCTA";

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* 
        CRITICAL FIX (Ref: image_8876b2.png): Changed text-blue-900 to text-white 
        to fix the severe text legibility issue against the dark background.
        Added responsive text scaling (text-3xl to text-5xl).
      */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-12 text-center tracking-tight">
        Our Services
      </h1>

      {/* Optimized responsive grid behavior across mobile, tablet, and desktop viewports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {/* Card 1: Station Refills */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-blue-50 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
          <div>
            {/* Semantic wrapper for emojis to avoid screen readers misinterpreting them */}
            <span
              role="img"
              aria-label="Water droplet icon"
              className="block text-4xl mb-4"
            >
              💧
            </span>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Station Refills
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bring your empty bottles to our Kiamunyi station for a fast,
              hygienic refill. We meticulously clean and sanitize the exterior
              of your bottles before sealing them with our fresh, purified
              water.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 -mx-1 w-fit"
            aria-label="View bottle sizes for station refills"
          >
            View Bottle Sizes
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Card 2: Doorstep Delivery */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-blue-50 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
          <div>
            <span
              role="img"
              aria-label="Delivery scooter icon"
              className="block text-4xl mb-4"
            >
              🛵
            </span>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Doorstep Delivery
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Why carry heavy water bottles? We offer a completely free delivery
              network across Nakuru. Just send us a message, and our dispatch
              riders will bring your water straight to your door.
            </p>
          </div>
          <Link
            href="/delivery"
            className="inline-flex items-center text-blue-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 -mx-1 w-fit"
            aria-label="View delivery zones for doorstep delivery"
          >
            View Delivery Zones
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      <ContactCTA />
    </main>
  );
}
