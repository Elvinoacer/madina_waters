import Image from "next/image";

const branches = [
  { name: "Town Branch", phone: "0798 910 545" },
  { name: "Naka / JanMar", phone: "0758 282 909" },
  { name: "RaceCourse", phone: "0795 305 171" },
  { name: "Kiratina", phone: "0741 464 543" },
  { name: "Kiamunyi", phone: "0790 349 039" },
  { name: "Barnabas / Pipeline", phone: "0792 254 497" },
  { name: "Kenlands", phone: "0721 667 822" },
  { name: "Lanet", phone: "0707 690 895" },
];

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-slate-900 via-slate-950 to-black text-slate-300 pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-red-600 via-blue-600 to-rose-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-14">
          {/* Column 1: Brand & Payments */}
          <div className="space-y-6">
            <div>
              <div className="relative h-14 w-48 mb-3">
                <Image
                  src="/images/madina-logo.png"
                  alt="Purified Madina Water Logo Footer"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <p className="italic text-blue-400 font-serif tracking-wide text-sm">
                "Quench Thirst Like a Boss"
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Home", "Offices", "Events"].map((service) => (
                  <span
                    key={service}
                    className="text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full shadow-inner"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 inline-flex flex-col items-start gap-1 shadow-inner backdrop-blur-sm">
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
                Buy Goods Till Number
              </span>
              <span className="text-2xl font-black text-white tracking-widest font-mono">
                5898147
              </span>
            </div>
          </div>

          {/* Column 2: HQ Support & Free Delivery */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm uppercase font-bold text-white tracking-widest border-b border-white/5 pb-2">
                HQ & Support
              </h4>

              <div className="space-y-1 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl inline-block">
                <p className="text-[11px] text-red-400 uppercase tracking-widest font-bold mb-1">
                  Central Hotline
                </p>
                <p className="text-2xl font-black text-white tracking-widest font-mono">
                  0705 707 041
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-slate-300">
                <p className="font-semibold text-white">The G2 Apartment</p>
                <p>Kiamunyi, Nakuru</p>
              </div>

              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2.5 rounded-xl">
                <span className="text-2xl">🚚</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                    Free Delivery
                  </span>
                  <span className="text-[10px] text-slate-400">
                    To surrounding areas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columns 3 & 4: Branch Network Sub-Grid */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm uppercase font-bold text-white tracking-widest border-b border-white/5 pb-2">
              Our Branch Network
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="flex justify-between items-center group border-b border-white/5 pb-2 hover:border-blue-500/30 transition-colors"
                >
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400 transition-colors shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                    {branch.name}
                  </span>
                  <a
                    href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                    className="font-mono text-sm tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/[0.05] text-center text-xs text-slate-500 font-medium flex flex-col md:flex-row justify-between items-center gap-2">
        <p>
          &copy; {new Date().getFullYear()} Purified Madina Water. All rights
          reserved.
        </p>
        <p>Delighted to serve Nakuru County.</p>
      </div>
    </footer>
  );
}
