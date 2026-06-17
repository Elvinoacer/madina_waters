"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// 1. Move the core form into a sub-component that consumes the search params safely
function OrderForm() {
  const searchParams = useSearchParams();
  const litersParam = searchParams.get("liters");

  // Initialize state directly on the first render using an initializer function
  const [formData, setFormData] = useState(() => {
    // Check if '?liters=X' exists in the URL, otherwise fallback to "20L Refill"
    const initialProduct = litersParam
      ? `${litersParam}L Refill`
      : "20L Refill";

    return {
      name: "",
      location: "",
      product: initialProduct,
      quantity: "1",
      notes: "",
    };
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if required fields are blank strings
    if (!formData.name.trim() || !formData.location.trim()) return;

    // Construct the WhatsApp message
    const rawMessage = `*Hello Madina Water! I'd like to place an order:*

👤 *Name:* ${formData.name.trim()}
📍 *Location:* ${formData.location.trim()}
💧 *Order:* ${formData.quantity}x ${formData.product}
📝 *Notes:* ${formData.notes.trim() ? formData.notes.trim() : "None"}

Please let me know how long delivery will take.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappNumber = "254728126277";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // UX Check: Determine if the form is valid to style the button responsively
  const isFormValid =
    formData.name.trim() !== "" && formData.location.trim() !== "";

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-900/20 overflow-hidden border border-gray-100">
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-400 via-blue-600 to-indigo-800"></div>

      <div className="p-8 sm:p-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Request Delivery
          </h1>
          <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto">
            Fill out the details below. We&apos;ll finalize your order via
            WhatsApp and dispatch our rider immediately.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 outline-none font-medium"
                placeholder="e.g., John Doe"
              />
            </div>

            {/* Delivery Location Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Delivery Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                required
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 outline-none font-medium"
                placeholder="e.g., Section 58, Nakuru"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Select */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Product
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 outline-none font-medium cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                <option value="20L Refill">20 Liters Refill</option>
                <option value="10L Refill">10 Liters Refill</option>
                <option value="5L Refill">5 Liters Refill</option>
                <option value="New 20L Bottle + Water">
                  New 20L Bottle + Water
                </option>
                <option value="New 10L Bottle + Water">
                  New 10L Bottle + Water
                </option>
                <option value="New 5L Bottle + Water">
                  New 5L Bottle + Water
                </option>
              </select>
            </div>

            {/* Quantity Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 outline-none font-medium"
              />
            </div>
          </div>

          {/* Notes Textarea */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Delivery Notes (Optional)
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 outline-none font-medium resize-y"
              placeholder="e.g., Call when at the gate..."
            ></textarea>
          </div>

          {/* Dynamic Submit Button Section */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full group font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 shadow-md
                ${
                  isFormValid
                    ? "bg-[#25D366] hover:bg-[#1DA851] text-white cursor-pointer hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                }
              `}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isFormValid ? "transform group-hover:scale-110" : "opacity-50"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Complete Order via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 2. Main Page Layout Wrapper (Provides structural consistency and prevents layout shift during load)
export default function OrderPage() {
  return (
    <main className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-900/10 border border-gray-100 flex flex-col items-center justify-center min-h-125">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-slate-500 font-medium tracking-wide">
              Loading order details...
            </p>
          </div>
        }
      >
        <OrderForm />
      </Suspense>
    </main>
  );
}
