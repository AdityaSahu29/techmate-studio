import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "TechMate Studio | Mobile Game & App Development",
  description: "TechMate Studio builds engaging mobile games and innovative applications for Android users worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#153E8C] selection:text-white">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}