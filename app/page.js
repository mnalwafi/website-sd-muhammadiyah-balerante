import { homeData } from "@/lib/data/homeData";
import { achievementsData } from "@/lib/data/achievementsData";
import HomeClient from "./HomeClient";

// --- SEO Metadata untuk Halaman Utama ---
// Metadata diekspor dari Server Component, ini adalah cara yang benar.
export const metadata = {
  title: "Beranda - Mencetak Generasi Unggul & Berakhlak Mulia",
  description: `Selamat datang di ${homeData.profile.name}. Lembaga pendidikan dasar yang berkomitmen untuk mencetak generasi Qur'ani yang cerdas, berakhlak mulia, dan berprestasi.`,
  openGraph: {
    title: `Beranda | ${homeData.profile.name}`,
    description: `Selamat datang di ${homeData.profile.name}, tempat terbaik untuk pendidikan dasar Islami yang modern dan berprestasi.`,
    images: [
      {
        url: homeData.heroImages[0], // Menggunakan gambar hero pertama untuk pratinjau media sosial
        width: 1920,
        height: 1080,
        alt: "Kegiatan Belajar di SD Muhammadiyah Balerante",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

// Ini sekarang adalah Server Component
export default function Page() {
  const achievementStats = (() => {
    const achievements = achievementsData.achievements;
    const stats = {
      nasional: 0,
      provinsi: 0,
      kota: 0,
      kecamatan: 0,
    };

    achievements.forEach((ach) => {
      const level = ach.level.toLowerCase();
      if (level.includes("nasional")) {
        stats.nasional++;
      } else if (level.includes("provinsi")) {
        stats.provinsi++;
      } else if (level.includes("kabupaten") || level.includes("kota")) {
        stats.kota++;
      } else if (level.includes("kecamatan")) {
        stats.kecamatan++;
      }
    });

    return [
      {
        label: "Prestasi Nasional",
        count: stats.nasional,
        color: "text-orange-400",
      },
      {
        label: "Prestasi Provinsi",
        count: stats.provinsi,
        color: "text-pink-400",
      },
      { label: "Prestasi Kota", count: stats.kota, color: "text-green-400" },
      {
        label: "Prestasi Kecamatan",
        count: stats.kecamatan,
        color: "text-sky-400",
      },
    ];
  })();

  // Me-render Client Component dan memberikan data sebagai props
  return <HomeClient achievementStats={achievementStats} />;
}
