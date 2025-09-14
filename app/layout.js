import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { homeData } from "@/lib/data/homeData";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata dasar untuk seluruh situs.
 * Ini akan diterapkan ke semua halaman, dan halaman individual dapat menimpanya.
 */
export const metadata = {
  title: {
    default: homeData.profile.name,
    template: `%s | ${homeData.profile.name}`,
  },
  description: homeData.profile.description,
  keywords: [
    "SD Muhammadiyah Balerante",
    "sekolah dasar islam",
    "sekolah di klaten",
    "pendidikan qurani",
    "sekolah berprestasi",
    "muhammadiyah",
  ],
  creator: homeData.profile.name,
  publisher: homeData.profile.name,
  metadataBase: new URL("https://sd-muhammadiyah-balerante.sch.id"), // Ganti dengan URL domain Anda
};
// Ini adalah layout utama. Header dan Footer di sini akan muncul di semua halaman.
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
