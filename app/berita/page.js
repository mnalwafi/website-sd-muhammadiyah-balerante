"use client";
import React, { useState } from "react";
import { newsData } from "@/lib/data/newsData";

// Komponen untuk menampilkan detail satu artikel
const ArticleDetailPage = ({ article, onBack }) => (
  <div className="bg-white py-20">
    <div className="container mx-auto px-6 max-w-4xl">
      <button
        onClick={onBack}
        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          &larr;
        </span>
        &nbsp;Kembali ke Daftar Berita
      </button>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
        {article.title}
      </h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>{article.date}</span> &bull; <span>Oleh: {article.author}</span>
      </div>
      <img
        src={article.image}
        alt={article.title}
        className="w-full rounded-lg shadow-lg mb-8 aspect-video object-cover"
      />
      <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
        {article.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </div>
  </div>
);

// Komponen untuk menampilkan daftar semua artikel
const NewsListPage = ({ onSelectArticle }) => {
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
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);
    const month = monthMap[monthName];

    if (isNaN(day) || month === undefined || isNaN(year)) return new Date(0);

    return new Date(year, month, day);
  };

  const sortedArticles = [...newsData.articles].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA;
  });

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
              <div className="md:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 md:h-full w-full object-cover"
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
                  <button
                    onClick={() => onSelectArticle(article.id)}
                    className="font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    Baca Selengkapnya &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen utama halaman berita yang mengatur tampilan (daftar atau detail)
export default function NewsPage() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  if (selectedArticleId) {
    const article = newsData.articles.find((a) => a.id === selectedArticleId);
    return (
      <ArticleDetailPage
        article={article}
        onBack={() => setSelectedArticleId(null)}
      />
    );
  }
  return (
    <NewsListPage
      articles={newsData.articles}
      onSelectArticle={setSelectedArticleId}
    />
  );
}
