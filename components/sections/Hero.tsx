import Image from "next/image";
import MPesaBadge from "../ui/MPesaBadge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-28 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none transform-gpu animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            💧 Premium Purification
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight md:leading-none">
            PURIFIED{" "}
            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
              MADINA
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-blue-900 to-sky-700 bg-clip-text text-transparent">
              WATER
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium tracking-wide max-w-xl mx-auto lg:mx-0">
            "Quench Thirst Like a Boss"
          </p>
          <p className="text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience the gold standard of hydration. Clean, refreshing, and
            crisp water processed with cutting-edge filtration technology.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <MPesaBadge />
          </div>
        </div>

        {/* Right Column: Premium Imagery */}
        <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto lg:max-w-none group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-sky-300 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 transform-gpu" />
          <div className="relative w-full h-full rounded-3xl border border-slate-200/60 overflow-hidden shadow-2xl bg-white p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02] transform-gpu">
            <Image
              src="/images/hero-water.jpg" // Place your high-quality hero image here
              alt="Purified Madina Water Hero Dispenser"
              fill
              priority
              className="object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
              sizes="(max-w-7xl) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
