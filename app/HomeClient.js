"use client";
import React, { useState, useEffect, useCallback } from "react";
import { homeData } from "@/lib/data/homeData";
import { newsData } from "@/lib/data/newsData";
import {
  TrophyIcon,
  AwardIcon,
  BookIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";
import Link from "next/link";

const ChevronLeftIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- KOMPONEN HALAMAN UTAMA (HOME) ---
const Hero = () => {
  const { heroImages } = homeData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full text-white overflow-hidden">
      {heroImages.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Mencetak Generasi Unggul & Berakhlak Mulia
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
          Selamat datang di {homeData.profile.name}. Tempat terbaik untuk
          pendidikan dasar Islami yang modern dan berprestasi.
        </p>
        <Link
          href="/kontak#ppdb"
          className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          Daftar Sekarang
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/50"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>

      {/* Tombol Kanan */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/50"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </section>
  );
};

const StatsSection = ({ stats }) => (
  <div className="relative z-20 -top-[70px] md:-top-[50px] mx-5">
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 bg-white rounded-4xl shadow-lg border-4 border-emerald-500">
      <dl className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="mx-auto flex max-w-xs flex-col gap-y-4 w-full lg:border-r-2 lg:border-gray-200 last:border-r-0 lg:pr-4"
          >
            <dt className={`text-base leading-7 text-gray-600`}>
              {stat.label}
            </dt>
            <dd
              className={`order-first text-3xl font-bold tracking-tight sm:text-5xl ${stat.color}`}
            >
              {stat.count}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

const AboutSection = () => (
  <section id="deskripsi" className="pt-8 pb-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={homeData.profile.image}
            alt="Gedung Sekolah SD Muhammadiyah Balerante"
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-600 mb-6">{homeData.profile.description}</p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Visi</h3>
          <p className="text-gray-600 mb-4 italic">
            "{homeData.profile.vision}"
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Misi</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {homeData.profile.mission.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const AchievementsSection = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "trophy":
        return <TrophyIcon />;
      case "award":
        return <AwardIcon />;
      case "book":
        return <BookIcon />;
      default:
        return null;
    }
  };
  return (
    <section id="prestasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Prestasi Unggulan
          </h2>
          <p className="text-gray-600 mt-2">
            Kebanggaan kami atas pencapaian luar biasa para siswa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeData.achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              {getIcon(item.icon)}
              <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
              <p className="text-gray-500 mt-1">{item.level}</p>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mt-4">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
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

  const latestNews = [...newsData.articles]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3);

  const truncate = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <section id="berita" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Berita Terkini</h2>
          <p className="text-gray-600 mt-2">
            Ikuti informasi dan kegiatan terbaru dari sekolah kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <div
                  className="text-gray-600 text-sm mb-4"
                  dangerouslySetInnerHTML={{
                    __html: truncate(item.content, 100),
                  }}
                />
                <Link
                  href="/berita"
                  className="font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => (
  <section id="galeri" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Galeri Kegiatan</h2>
        <p className="text-gray-600 mt-2">
          Momen-momen berharga dalam perjalanan pendidikan di sekolah kami.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {homeData.gallery.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === homeData.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? homeData.testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!homeData.testimonials || homeData.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonial" className="py-20 bg-emerald-500 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Apa Kata Mereka?</h2>
          <p className="opacity-80 mt-2">
            Kesan dan pesan dari keluarga besar SD Muhammadiyah Balerante.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg bg-white/10 min-h-[250px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {homeData.testimonials.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-lg italic mb-6">"{item.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src={item.portrait}
                        alt={`Potret ${item.name}`}
                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-white/50"
                      />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm opacity-80">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full bg-black/20 p-2 text-white transition hover:bg-black/40"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full bg-black/20 p-2 text-white transition hover:bg-black/40"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
      >
        <span>{item.question}</span>
        <ChevronDownIcon
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => (
  <section id="faq" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-gray-600 mt-2">
          Jawaban untuk pertanyaan yang sering diajukan.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        {homeData.faq.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default function HomeClient({ achievementStats }) {
  return (
    <>
      <Hero />
      <StatsSection stats={achievementStats} />
      <AboutSection />
      <AchievementsSection />
      <NewsSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
