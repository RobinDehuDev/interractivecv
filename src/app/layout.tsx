import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Robion DEHU dev",
  description: "CV interactif",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${poppins.className}`}>
      <body>
        <TRPCReactProvider>
          <main className="h-full min-h-screen w-full bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {children}
          </main>
        </TRPCReactProvider>{" "}
      </body>
    </html>
  );
}
