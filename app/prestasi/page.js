import React from "react";
import { achievementsData } from "@/lib/data/achievementsData";
import { homeData } from "@/lib/data/homeData";

// --- SEO Metadata untuk Halaman Prestasi ---
export const metadata = {
  title: "Prestasi Siswa",
  description: achievementsData.description,
  openGraph: {
    title: `Prestasi Siswa | ${homeData.profile.name}`,
    description: achievementsData.description,
    images: [
      {
        url: homeData.heroImages[1], // Menggunakan gambar yang relevan untuk pratinjau
        width: 1920,
        height: 1080,
        alt: `Galeri Prestasi Siswa ${homeData.profile.name}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const getCategoryClass = (category) => {
  switch (category) {
    case "Akademik":
      return "bg-blue-100 text-blue-800";
    case "Olahraga":
      return "bg-green-100 text-green-800";
    case "Keagamaan":
      return "bg-yellow-100 text-yellow-800";
    case "Seni":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function AchievementsPage() {
  const achievementsByYear = achievementsData.achievements.reduce(
    (acc, achievement) => {
      const year = achievement.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(achievement);
      return acc;
    },
    {}
  );

  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => b - a);

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            {achievementsData.title}
          </h1>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            {achievementsData.description}
          </p>
        </div>
        {sortedYears.map((year) => (
          <div key={year} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 pl-4 border-l-4 border-emerald-500">
              {year}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievementsByYear[year].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col border-t-4 border-emerald-400 transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex-grow">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 self-start ${getCategoryClass(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.participants}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-emerald-600">
                      {item.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
