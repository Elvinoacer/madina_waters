import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";

export default function EventsPage() {
  return (
    <main className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 space-y-20 selection:bg-red-500 selection:text-white">
      {/* 1. HERO BANNER SECTION */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/10 bg-blue-950">
        <Image
          src="/event-bulk.jpg"
          alt="Elegant event tables set up with premium water service"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover transform scale-100 transition-transform duration-1000 ease-out hover:scale-105 object-center opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-900/40 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center text-xs font-bold tracking-widest text-red-300 uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            Premium Hydration Services
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-sm">
            Bulk Event Supply
          </h1>
          <p className="text-blue-100/90 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            From pristine corporate setups to grand celebrations, ensure perfect
            execution with zero stress.
          </p>
        </div>
      </div>

      {/* 2. VALUE PROPOSITION / INTRO SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div
            className="w-12 h-1 bg-red-500 rounded-full"
            aria-hidden="true"
          />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Seamless Logistics for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-red-400">
              Memorable Occasions
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Planning a wedding, corporate conference, or a large family
            gathering? Hydration is critical for a successful event.{" "}
            <strong className="text-white font-semibold">
              Purified Madina Water
            </strong>{" "}
            has the dedicated logistical capacity to handle high-volume bulk
            orders effortlessly.
          </p>

          {/* Micro Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full bg-red-500 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-slate-200">
                100% On-Time Guarantee
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full bg-blue-400 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-slate-200">
                Flexible 5L & 20L Formats
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Contextual Image */}
        <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl shadow-xl aspect-4/3 lg:aspect-square xl:aspect-4/3">
          <Image
            src="/hero-delivery.jpg"
            alt="Madina Water delivery rider loaded with pristine bulk multi-gallon bottles"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* 3. GRID CATEGORIES SECTION */}
      <div className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-xs font-bold tracking-widest text-red-400 uppercase">
            Tailored Solutions
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Configured For Your Event Scale
          </p>
        </div>

        {/* Balanced grid cards with sleek dark translucent profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Weddings */}
          <article className="group bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden aspect-16/10">
              <Image
                src="/event-bulk.jpg"
                alt="Beautiful outdoor wedding reception setup"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-bold text-xl text-white mb-2 transition-colors duration-300 group-hover:text-red-400">
                  Weddings
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Keep your guests refreshed throughout the ceremony, dinner
                  setup, and afterparty reception.
                </p>
              </div>
            </div>
          </article>

          {/* Conferences */}
          <article className="group bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden aspect-16/10">
              <Image
                src="/images/events_madina.webp"
                alt="Corporate conference hall setup with water dispensers"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-bold text-xl text-white mb-2 transition-colors duration-300 group-hover:text-red-400">
                  Conferences
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Bulk 20L bottles seamlessly prepared for staging high-capacity
                  catering stations and VIP rooms.
                </p>
              </div>
            </div>
          </article>

          {/* Parties */}
          <article className="group bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden aspect-16/10">
              <Image
                src="/images/event-party.webp"
                alt="Social celebration gathering with guests holding drinks"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-bold text-xl text-white mb-2 transition-colors duration-300 group-hover:text-red-400">
                  Parties & Gatherings
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A perfect mix of 20L systems for modern dispensers alongside
                  sleek 5L bottles for swift table service.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* 4. PREMIUM LOGISTICS NOTICE BOX */}
      <div className="relative overflow-hidden bg-linear-to-br from-red-950/40 via-slate-900/60 to-slate-900/20 border border-red-900/30 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 shadow-xl backdrop-blur-sm">
        <div
          className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/5 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="p-4 bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/20 shrink-0 transform transition-transform duration-300 hover:rotate-6">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-lg font-bold text-white">
            Advance Notice Required
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            For large scale bulk event orders exceeding{" "}
            <span className="font-bold text-red-400">10x 20L containers</span>,
            please coordinate with us at least{" "}
            <span className="font-bold text-red-400">48 hours in advance</span>.
            This allows us to optimize your allocation and lock in our dedicated
            logistics team.
          </p>
        </div>
      </div>

      {/* 5. CALL TO ACTION */}
      <div className="pt-4">
        <ContactCTA />
      </div>
    </main>
  );
}
