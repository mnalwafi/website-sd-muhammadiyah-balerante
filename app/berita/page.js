import React from "react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/lib/data/newsData";
import { homeData } from "@/lib/data/homeData";

// --- SEO Metadata untuk Halaman Daftar Berita ---
export const metadata = {
  title: "Arsip Berita",
  description: `Kumpulan informasi, pengumuman, dan liputan kegiatan terbaru dari ${homeData.profile.name}.`,
  openGraph: {
    title: `Arsip Berita | ${homeData.profile.name}`,
    description: `Ikuti informasi dan kegiatan terbaru dari sekolah kami.`,
    images: [
      {
        url: homeData.heroImages[2],
        width: 1920,
        height: 1080,
        alt: `Arsip Berita ${homeData.profile.name}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const NewsListPage = () => {
  // Helper untuk parsing dan pengurutan tanggal
  const monthMap = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };
  const parseDate = (dateString) => {
    if (!dateString) return new Date(0);
    const parts = dateString.split(" ");
    if (parts.length !== 3) return new Date(0);
    const day = parseInt(parts[0], 10);
    const month = monthMap[parts[1]];
    const year = parseInt(parts[2], 10);
    if (isNaN(day) || month === undefined || isNaN(year)) return new Date(0);
    return new Date(year, month, day);
  };

  const sortedArticles = [...newsData.articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            Arsip Berita Sekolah
          </h1>
          <p className="text-gray-600 mt-2">
            Informasi, pengumuman, dan liputan kegiatan terbaru.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {sortedArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden md:flex transition-shadow hover:shadow-2xl"
            >
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {article.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-4">
                    <span>{article.date}</span> &bull;{" "}
                    <span>Oleh: {article.author}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {article.content.substring(0, 120)}...
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/berita/${article.slug}`}
                    className="font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsListPage;
