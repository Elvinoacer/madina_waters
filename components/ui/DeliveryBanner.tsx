export default function DeliveryBanner() {
  return (
    <div className="bg-red-600 text-white py-2 px-4 flex justify-center items-center gap-3">
      <svg
        className="w-6 h-6 animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span className="font-bold tracking-wide uppercase text-sm md:text-base">
        Free Home, Office & Events Delivery in Nakuru
      </span>
    </div>
  );
}
