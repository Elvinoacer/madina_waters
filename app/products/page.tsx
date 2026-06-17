import ProductCard from "@/components/ui/ProductCard";
import ContactCTA from "@/components/sections/ContactCTA";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            Our Refill Sizes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Purified, crisp water for every occasion. Bring your own bottles or
            purchase a new one from our Kiamunyi station.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ProductCard
            price={150}
            liters={20}
            description="The classic dispenser size. Perfect for homes and busy offices. Guaranteed to last."
          />
          <ProductCard
            price={100}
            liters={10}
            description="Lighter and highly portable. Great for small apartments, couples, and weekend trips."
          />
          <ProductCard
            price={50}
            liters={5}
            description="The ultimate travel companion. Ideal for road trips, picnics, or small gatherings."
          />
        </div>

        {/* Quality Guarantee Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                The Madina Purity Guarantee
              </h2>
              <p className="text-gray-700 mb-4">
                Every drop of Madina Water goes through a rigorous multi-stage
                purification process. We remove impurities while retaining the
                crisp, refreshing taste you love.
              </p>
              <ul className="space-y-3 font-semibold text-blue-800">
                <li className="flex items-center gap-2">
                  ✓ Multi-stage filtration
                </li>
                <li className="flex items-center gap-2">
                  ✓ UV-treated for ultimate hygiene
                </li>
                <li className="flex items-center gap-2">
                  ✓ Sealed for your protection
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Need a new bottle?
              </h3>
              <p className="text-gray-600 mb-6">
                We sell brand new, high-quality durable bottles alongside our
                refill services.
              </p>
              <Link
                href="/order"
                className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-bold"
              >
                Ask on WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <ContactCTA />
      </div>
    </main>
  );
}
