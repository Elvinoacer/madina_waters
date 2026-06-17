"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  liters: number;
  description: string;
  price: number;
}

export default function ProductCard({
  liters,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-slate-100 rounded-3xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 ease-out flex flex-col items-center hover:-translate-y-2 transform-gpu">
      {/* Product Image Window */}
      <div className="relative w-full h-48 mb-6 bg-linear-to-b from-slate-50 to-white rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-center">
        <Image
          src={`/images/bottle-${liters}l.png`}
          alt={`${liters} Liters Refill Container`}
          width={160}
          height={160}
          className="object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-110 transform-gpu"
        />
      </div>

      {/* Product Information */}
      <div className="relative z-10 flex flex-col items-center grow">
        {/* Fixed the rogue backtick typo here so numbers display correctly */}
        <div className="flex items-baseline gap-1 mb-0.5">
          <span className="text-4xl font-black bg-linear-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent tracking-tight">
            {liters}
          </span>
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
            <span className="sr-only"> </span>Liters
          </span>
        </div>

        {/* Improved Price Accessibility */}
        <p className="text-xl font-extrabold text-blue-600 tracking-tight mt-1">
          <span className="sr-only">Price: </span>
          KSH {price}
          <span className="sr-only"> Kenyan Shillings</span>
        </p>

        <div className="w-12 h-1 bg-blue-500 rounded-full my-3 transform origin-center scale-x-50 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

        <p className="text-slate-600 text-sm leading-relaxed max-w-60 grow">
          {description}
        </p>
      </div>

      {/* Link Component */}
      <Link
        href={`/order?liters=${liters}&price=${price}`}
        className="w-full text-center mt-6 relative overflow-hidden bg-linear-to-r from-blue-900 to-blue-800 text-white py-3 rounded-2xl font-bold tracking-wide shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 active:scale-[0.98] transition-all duration-300 transform-gpu block"
      >
        <span className="relative z-10">Order Refill</span>
        <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </Link>
    </div>
  );
}
