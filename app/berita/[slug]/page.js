import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsData } from "@/lib/data/newsData";
import { homeData } from "@/lib/data/homeData";

// Fungsi untuk menghasilkan metadata dinamis berdasarkan slug berita
export async function generateMetadata({ params }) {
  const article = newsData.articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Berita Tidak Ditemukan",
      description: "Halaman berita yang Anda cari tidak ada.",
    };
  }

  const description = article.content.split("\n")[0].substring(0, 160);

  return {
    title: article.title,
    description: description,
    openGraph: {
      title: `${article.title} | ${homeData.profile.name}`,
      description: description,
      images: [
        {
          url: article.image,
          width: 800,
          height: 400,
          alt: article.title,
        },
      ],
      locale: "id_ID",
      type: "article",
      publishedTime: new Date().toISOString(), // Seharusnya menggunakan tanggal publish artikel jika ada
      authors: [article.author],
    },
  };
}

const ArticleDetailPage = ({ params }) => {
  const { slug } = params;
  const article = newsData.articles.find((a) => a.slug === slug);

  // Jika artikel tidak ditemukan, tampilkan halaman 404
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/berita"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>
          &nbsp;Kembali ke Daftar Berita
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          {article.title}
        </h1>
        <div className="text-sm text-gray-500 mb-6">
          <span>{article.date}</span> &bull; <span>Oleh: {article.author}</span>
        </div>
        <div className="relative w-full h-auto aspect-video rounded-lg shadow-lg mb-8 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
