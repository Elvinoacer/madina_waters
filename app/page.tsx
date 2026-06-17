import ProductCard from "@/components/ui/ProductCard";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 antialiased selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Hero />

      {/* Refill Station Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Station Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Refill Station
          </h2>
          <p className="text-slate-600 text-lg">
            Fast, hygienic, ultra-filtered, and highly affordable refills
            customized to your daily lifestyle constraints.
          </p>
        </div>

        {/* Dynamic Card Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ProductCard
            liters={20}
            price={150}
            description="Perfect for standard home and professional office water dispensers."
          />
          <ProductCard
            liters={10}
            price={100}
            description="Ideal for medium households, remote workspaces, and quick weekend getaways."
          />
          <ProductCard
            liters={5}
            price={50}
            description="Lightweight, easy to carry, perfect for road trips and small dynamic outdoor events."
          />
        </div>
      </section>

      {/* Global Contact & Action CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <ContactCTA />
      </div>
    </main>
  );
}
