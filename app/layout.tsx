import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Modular UI Layout Layout Imports
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purified Madina Water | Quench Thirst Like a Boss",
  description:
    "Free home, office, and events water delivery in Kiamunyi, Nakuru. Refill station for 20L, 10L, and 5L.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} text-slate-900 flex flex-col min-h-screen antialiased`}
      >
        {/* Immersive & High-Contrast Water CSS Animations */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Smooth flowing liquid gradient background */
            @keyframes water-gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .water-nav-bg {
              background: linear-gradient(
                -45deg,
                rgba(240, 249, 255, 0.85) 0%,
                rgba(224, 242, 254, 0.80) 35%,
                rgba(186, 230, 253, 0.65) 70%,
                rgba(240, 249, 255, 0.85) 100%
              );
              background-size: 200% 200%;
              animation: water-gradient 10s ease-in-out infinite;
            }

            /* Highly subtle, transparent rising bubbles that don't block text */
            @keyframes bubble-rise {
              0% { background-position: 0px 140px, 40px 100px; }
              100% { background-position: 0px 0px, 40px 0px; }
            }
            .water-bubbles {
              position: absolute;
              inset: 0;
              background-image: 
                radial-gradient(circle at center, transparent 2px, rgba(255, 255, 255, 0.4) 3px, transparent 4px),
                radial-gradient(circle at center, transparent 1px, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px);
              background-size: 90px 140px, 50px 100px;
              animation: bubble-rise 8s linear infinite;
              pointer-events: none;
              z-index: 1;
              opacity: 0.6;
            }

            /* Gentle underwater light caustics shimmer */
            @keyframes light-caustics {
              0% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(1.08) translate(-1%, 1%); }
              100% { opacity: 0.2; transform: scale(1); }
            }
            .water-caustics {
              position: absolute;
              inset: 0;
              background: 
                radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
                radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.6) 0%, transparent 50%);
              animation: light-caustics 6s ease-in-out infinite alternate;
              pointer-events: none;
              z-index: 1;
            }
          `,
          }}
        />

        {/* Global Navigation Header (Client Dynamic Area) */}
        <Navbar />

        {/* Dynamic Inner Sub-Pages */}
        <main className="grow relative z-10">{children}</main>

        {/* Global Unified Application Footer */}
        <Footer />
      </body>
    </html>
  );
}
