'use client'
import React, { useState } from "react";

// --- DATA WEBSITE ---
// Data untuk semua halaman kini dikelompokkan di sini.
const pageData = {
  // Data untuk Halaman Utama (Home)
  home: {
    profile: {
      name: "SD Muhammadiyah Balerante",
      description:
        "SD Muhammadiyah Balerante adalah lembaga pendidikan dasar yang berkomitmen untuk mencetak generasi Qur'ani yang cerdas, berakhlak mulia, dan berprestasi. Dengan kurikulum yang memadukan pendidikan umum dan nilai-nilai keislaman, kami siap membimbing putra-putri Anda menjadi insan kamil yang siap menghadapi tantangan zaman.",
      vision:
        "Terwujudnya generasi Islam yang unggul dalam prestasi, berakhlak mulia, dan berwawasan global.",
      mission: [
        "Menyelenggarakan pendidikan yang berkualitas dan menyenangkan.",
        "Membina akhlakul karimah melalui program pembiasaan Islami.",
        "Mengembangkan potensi siswa di bidang akademik dan non-akademik.",
        "Membangun kerjasama yang harmonis dengan orang tua dan masyarakat.",
      ],
    },
    achievements: [
      {
        title: "Juara 1 Lomba Cerdas Cermat",
        level: "Tingkat Kabupaten",
        year: "2024",
        icon: "trophy",
      },
      {
        title: "Akreditasi A (Unggul)",
        level: "Badan Akreditasi Nasional",
        year: "2023",
        icon: "award",
      },
      {
        title: "Juara 3 Lomba Tahfidz Qur'an",
        level: "Tingkat Provinsi",
        year: "2023",
        icon: "book",
      },
    ],
    news_excerpts: [
      {
        id: 1,
        title: "PPDB 2025/2026 Telah Dibuka!",
        date: "1 Juli 2025",
        excerpt:
          "Penerimaan Peserta Didik Baru untuk tahun ajaran 2025/2026 telah resmi dibuka. Segera daftarkan putra-putri Anda!",
        image: "image/sd-muhammadiyah-balerante.webp",
      },
      {
        id: 2,
        title: "Kegiatan Outing Class ke Taman Pintar",
        date: "15 Juni 2025",
        excerpt:
          "Siswa-siswi kelas 4-6 mengikuti kegiatan outing class yang seru dan edukatif ke Taman Pintar Yogyakarta...",
        image: "https://placehold.co/600x400/60a5fa/ffffff?text=Outing+Class",
      },
      {
        id: 3,
        title: "Peringatan Milad Muhammadiyah",
        date: "28 Mei 2025",
        excerpt:
          "Seluruh warga sekolah merayakan Milad Muhammadiyah dengan berbagai kegiatan positif...",
        image: "https://placehold.co/600x400/fbbf24/ffffff?text=Milad",
      },
    ],
    gallery: [
      {
        id: 1,
        src: "https://placehold.co/500x500/34d399/ffffff?text=Kegiatan+1",
        alt: "Kegiatan Belajar Mengajar di Kelas",
      },
      {
        id: 2,
        src: "https://placehold.co/500x500/60a5fa/ffffff?text=Kegiatan+2",
        alt: "Upacara Bendera Setiap Senin",
      },
      {
        id: 3,
        src: "https://placehold.co/500x500/fbbf24/ffffff?text=Kegiatan+3",
        alt: "Kegiatan Pramuka",
      },
      {
        id: 4,
        src: "https://placehold.co/500x500/f87171/ffffff?text=Kegiatan+4",
        alt: "Lomba 17 Agustus",
      },
      {
        id: 5,
        src: "https://placehold.co/500x500/c084fc/ffffff?text=Kegiatan+5",
        alt: "Manasik Haji Cilik",
      },
      {
        id: 6,
        src: "https://placehold.co/500x500/4ade80/ffffff?text=Kegiatan+6",
        alt: "Praktik Komputer",
      },
      {
        id: 7,
        src: "https://placehold.co/500x500/2dd4bf/ffffff?text=Kegiatan+7",
        alt: "Sholat Dhuha Berjamaah",
      },
      {
        id: 8,
        src: "https://placehold.co/500x500/f472b6/ffffff?text=Kegiatan+8",
        alt: "Wisuda Kelas 6",
      },
    ],
    testimonials: [
      {
        quote:
          "Anak saya menjadi lebih mandiri, disiplin, dan rajin beribadah setelah bersekolah di sini. Lingkungannya sangat mendukung. Terima kasih para guru!",
        name: "Budi Santoso",
        role: "Orang Tua Siswa",
      },
      {
        quote:
          "Saya bangga menjadi alumni SD Muhammadiyah Balerante. Ilmu dan nilai-nilai yang saya dapatkan menjadi bekal berharga hingga saat ini.",
        name: "Citra Lestari",
        role: "Alumni 2015",
      },
    ],
    faq: [
      {
        question: "Bagaimana cara mendaftar di SD Muhammadiyah Balerante?",
        answer:
          'Pendaftaran dapat dilakukan secara online melalui tombol "Daftar Sekarang" di website ini atau datang langsung ke sekolah selama jam kerja untuk mengambil formulir pendaftaran.',
      },
      {
        question: "Apa saja kegiatan ekstrakurikuler yang tersedia?",
        answer:
          "Kami memiliki beragam ekstrakurikuler, antara lain: Pramuka, Tapak Suci, Hizbul Wathan, Tilawah, Robotik, dan Klub Sains.",
      },
      {
        question: "Kapan jam belajar sekolah?",
        answer:
          "Jam belajar dimulai dari pukul 07.00 hingga 14.00 WIB untuk hari Senin-Kamis, dan hingga pukul 11.00 WIB pada hari Jumat.",
      },
      {
        question: "Apakah sekolah menyediakan program tahfidz?",
        answer:
          "Ya, kami memiliki program unggulan Tahfidz Qur'an yang dibimbing oleh guru-guru hafidz yang kompeten, dengan target hafalan minimal 2 juz setelah lulus.",
      },
    ],
  },
  news: {
    articles: [
      {
        id: 1,
        title: "PPDB 2025/2026 Telah Dibuka!",
        date: "1 Juli 2025",
        author: "Admin Sekolah",
        image: "https://placehold.co/800x400/34d399/ffffff?text=PPDB+2025",
        content:
          "Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2025/2026 di SD Muhammadiyah Balerante telah resmi dibuka. Kami mengundang para orang tua untuk mendaftarkan putra-putrinya dan bergabung dengan keluarga besar kami. \n Pendaftaran dapat dilakukan secara online melalui website ini atau dengan datang langsung ke sekretariat sekolah. Jangan lewatkan kesempatan untuk memberikan pendidikan terbaik bagi buah hati Anda. Informasi lebih lanjut mengenai alur pendaftaran, syarat, dan biaya dapat diakses pada menu PPDB.",
      },
      {
        id: 2,
        title: "Kegiatan Outing Class ke Taman Pintar Berjalan Sukses",
        date: "15 Juni 2025",
        author: "Wali Kelas 4",
        image: "https://placehold.co/800x400/60a5fa/ffffff?text=Outing+Class",
        content:
          "Siswa-siswi kelas 4, 5, dan 6 telah mengikuti kegiatan outing class yang seru dan edukatif ke Taman Pintar Yogyakarta. Dalam kegiatan ini, siswa belajar sains secara langsung melalui berbagai alat peraga interaktif. \n Antusiasme siswa sangat tinggi dan mereka mendapatkan banyak pengetahuan baru di luar kelas. Kegiatan ini bertujuan untuk meningkatkan minat siswa terhadap sains dan teknologi, serta memberikan pengalaman belajar yang tak terlupakan. Terima kasih kepada semua pihak yang telah mendukung kelancaran acara ini.",
      },
      {
        id: 3,
        title: "Semarak Peringatan Milad Muhammadiyah di Sekolah",
        date: "28 Mei 2025",
        author: "Humas Sekolah",
        image: "https://placehold.co/800x400/fbbf24/ffffff?text=Milad",
        content:
          "Dalam rangka memperingati Milad Muhammadiyah, seluruh warga sekolah mengadakan serangkaian acara yang bermanfaat. Acara puncak diisi dengan pengajian akbar yang dihadiri oleh tokoh masyarakat serta kegiatan bakti sosial berupa pembagian sembako kepada warga sekitar. \n Kegiatan ini diharapkan dapat menumbuhkan semangat berbagi dan kepedulian sosial di kalangan siswa, serta mempererat tali silaturahmi antara sekolah dengan masyarakat sekitar. Semangat pencerahan Muhammadiyah terus kami tanamkan kepada seluruh siswa.",
      },
      {
        id: 4,
        title: "Siswa Raih Juara dalam Lomba Cerdas Cermat Tingkat Kabupaten",
        date: "20 April 2025",
        author: "Tim Lomba",
        image: "https://placehold.co/800x400/f87171/ffffff?text=Juara+LCC",
        content:
          "Tim cerdas cermat SD Muhammadiyah Balerante berhasil meraih Juara 1 dalam Lomba Cerdas Cermat (LCC) tingkat Kabupaten Klaten. Prestasi ini merupakan hasil dari kerja keras siswa dan bimbingan intensif dari para guru. \n Kemenangan ini menjadi kebanggaan bagi seluruh warga sekolah dan memotivasi siswa lain untuk terus berprestasi di berbagai bidang, baik akademik maupun non-akademik. Selamat kepada tim LCC!",
      },
    ],
  },
  facilities: [
    {
      name: "Ruang Kelas Nyaman",
      description:
        "Setiap ruang kelas dilengkapi dengan AC, proyektor, dan papan tulis interaktif untuk menciptakan suasana belajar yang modern dan nyaman.",
      image: "https://placehold.co/600x400/818cf8/ffffff?text=Ruang+Kelas",
    },
    {
      name: "Perpustakaan Lengkap",
      description:
        "Koleksi ribuan buku fiksi, non-fiksi, dan referensi pelajaran tersedia untuk menumbuhkan minat baca siswa.",
      image: "https://placehold.co/600x400/f472b6/ffffff?text=Perpustakaan",
    },
    {
      name: "Laboratorium Komputer",
      description:
        "Siswa dapat belajar teknologi informasi dan komunikasi dengan perangkat komputer modern dan akses internet cepat.",
      image: "https://placehold.co/600x400/fbbf24/ffffff?text=Lab+Komputer",
    },
    {
      name: "Lapangan Olahraga",
      description:
        "Area olahraga serbaguna yang luas untuk kegiatan sepak bola, basket, senam, dan aktivitas fisik lainnya.",
      image: "https://placehold.co/600x400/34d399/ffffff?text=Lapangan",
    },
    {
      name: "Masjid Sekolah",
      description:
        "Sebagai pusat kegiatan keagamaan, masjid digunakan untuk sholat berjamaah, mentoring, dan program tahfidz.",
      image: "https://placehold.co/600x400/60a5fa/ffffff?text=Masjid",
    },
    {
      name: "Unit Kesehatan Sekolah (UKS)",
      description:
        "Memberikan pelayanan kesehatan dasar, pendidikan kesehatan, dan lingkungan sekolah yang sehat bagi seluruh siswa.",
      image: "https://placehold.co/600x400/f87171/ffffff?text=UKS",
    },
  ],
  achievementsPage: {
    title: "Galeri Prestasi",
    description:
      "Kumpulan pencapaian gemilang siswa-siswi kami dalam berbagai bidang, baik akademik maupun non-akademik, sebagai bukti komitmen kami dalam mencetak generasi unggul.",
    achievements: [
      {
        year: 2025,
        category: "Akademik",
        title: "Juara Harapan 1 Kompetisi Sains Nasional (KSN)",
        participants: "Ananda Rizki",
        level: "Tingkat Provinsi",
      },
      {
        year: 2025,
        category: "Olahraga",
        title: "Juara 1 O2SN Cabang Pencak Silat",
        participants: "Bima Sakti",
        level: "Tingkat Kabupaten",
      },
      {
        year: 2024,
        category: "Akademik",
        title: "Juara 1 Lomba Cerdas Cermat",
        participants: "Tim Cerdas Cermat Kelas 5",
        level: "Tingkat Kabupaten",
      },
      {
        year: 2024,
        category: "Keagamaan",
        title: "Juara 2 Lomba MTQ Pelajar",
        participants: "Siti Aisyah",
        level: "Tingkat Kecamatan",
      },
      {
        year: 2024,
        category: "Olahraga",
        title: "Juara 2 O2SN Cabang Bulu Tangkis",
        participants: "Ahmad Fauzi",
        level: "Tingkat Kabupaten",
      },
      {
        year: 2023,
        category: "Akademik",
        title: "Akreditasi A (Unggul)",
        participants: "Seluruh Warga Sekolah",
        level: "Badan Akreditasi Nasional",
      },
      {
        year: 2023,
        category: "Keagamaan",
        title: "Juara 3 Lomba Tahfidz Qur'an Juz 30",
        participants: "Fatimah Azzahra",
        level: "Tingkat Provinsi",
      },
      {
        year: 2023,
        category: "Seni",
        title: "Juara 1 Lomba Menggambar & Mewarnai",
        participants: "Rina Melati",
        level: "Tingkat Kabupaten",
      },
    ],
  },
  contact: {
    address: "Jl. Merapi Jaya No. 1, Balerante, Kemalang, Klaten, Jawa Tengah",
    phone: "(0272) 123-456",
    email: "info@sdmuhbalerante.sch.id",
  },
};

// --- KOMPONEN IKON (SVG) ---
const MenuIcon = (props) => (
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
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = (props) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const ChevronDownIcon = (props) => (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-yellow-400 mb-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M9.17 14.08a4 4 0 0 1 5.66 0" />
  </svg>
);
const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-blue-500 mb-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-green-500 mb-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

// --- KOMPONEN BERSAMA ---

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", page: "home", isAnchor: false },
    { name: "Fasilitas", page: "fasilitas", isAnchor: false },
    { name: "Prestasi", page: "prestasi", isAnchor: false },
    { name: "Berita", page: "berita", isAnchor: false },
    { name: "Galeri", page: "galeri", isAnchor: true },
    { name: "FAQ", page: "faq", isAnchor: true },
  ];

  const handleNavClick = (page, isAnchor) => {
    if (isAnchor) {
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      setCurrentPage(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => handleNavClick("home", false)}
          className="text-xl font-bold text-emerald-600"
        >
          SD Muhammadiyah Balerante
        </button>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.page, link.isAnchor)}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.isAnchor)}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            {pageData.home.profile.name}
          </h3>
          <p className="text-gray-400">{pageData.contact.address}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li>
              <a href="#deskripsi" className="text-gray-400 hover:text-white">
                Deskripsi
              </a>
            </li>
            <li>
              <a href="#prestasi" className="text-gray-400 hover:text-white">
                Prestasi
              </a>
            </li>
            <li>
              <a href="#berita" className="text-gray-400 hover:text-white">
                Berita
              </a>
            </li>
            <li>
              <a href="#galeri" className="text-gray-400 hover:text-white">
                Galeri
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
          <p className="text-gray-400">Telepon: {pageData.contact.phone}</p>
          <p className="text-gray-400">Email: {pageData.contact.email}</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {pageData.home.profile.name}. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// --- KOMPONEN HALAMAN UTAMA (HOME) ---
const Hero = () => (
  <section className="bg-gradient-to-br from-emerald-50 to-teal-100">
    <div className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
        Mencetak Generasi Unggul & Berakhlak Mulia
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Selamat datang di {pageData.home.profile.name}. Tempat terbaik untuk
        pendidikan dasar Islami yang modern dan berprestasi.
      </p>
      <a
        href="#ppdb"
        className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-600 transition-transform transform hover:scale-105 shadow-lg"
      >
        Daftar Sekarang
      </a>
    </div>
  </section>
);
const AboutSection = () => (
  <section id="deskripsi" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://placehold.co/600x400/22c55e/ffffff?text=Gedung+Sekolah"
            alt="Gedung Sekolah SD Muhammadiyah Balerante"
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-600 mb-6">
            {pageData.home.profile.description}
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Visi</h3>
          <p className="text-gray-600 mb-4 italic">
            "{pageData.home.profile.vision}"
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Misi</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {pageData.home.profile.mission.map((item, index) => (
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
          {pageData.home.achievements.map((item, index) => (
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
const NewsSection = ({ setCurrentPage }) => (
  <section id="berita" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Berita Terkini</h2>
        <p className="text-gray-600 mt-2">
          Ikuti informasi dan kegiatan terbaru dari sekolah kami.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pageData.home.news_excerpts.map((item) => (
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
              <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
              <button
                onClick={() => setCurrentPage("berita")}
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
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
        {pageData.home.gallery.map((image) => (
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
const TestimonialsSection = () => (
  <section id="testimonial" className="py-20 bg-emerald-500 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Apa Kata Mereka?</h2>
        <p className="opacity-80 mt-2">
          Kesan dan pesan dari keluarga besar SD Muhammadiyah Balerante.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {pageData.home.testimonials.map((item, index) => (
          <div key={index} className="bg-white/10 p-8 rounded-lg">
            <p className="text-lg italic mb-6">"{item.quote}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-500 font-bold text-xl mr-4">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm opacity-80">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
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
        {pageData.home.faq.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);
const HomePage = ({ setCurrentPage }) => (
  <>
    <Hero />
    <AboutSection />
    <AchievementsSection />
    <NewsSection setCurrentPage={setCurrentPage} />
    <GallerySection />
    <TestimonialsSection />
    <FaqSection />
  </>
);

// --- KOMPONEN HALAMAN BERITA ---
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
const NewsListPage = ({ articles, onSelectArticle }) => (
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
        {articles.map((article) => (
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
const NewsPage = ({ selectedArticleId, setSelectedArticleId }) => {
  if (selectedArticleId) {
    const article = pageData.news.articles.find(
      (a) => a.id === selectedArticleId
    );
    return (
      <ArticleDetailPage
        article={article}
        onBack={() => setSelectedArticleId(null)}
      />
    );
  }
  return (
    <NewsListPage
      articles={pageData.news.articles}
      onSelectArticle={setSelectedArticleId}
    />
  );
};

// --- KOMPONEN HALAMAN FASILITAS ---
const FacilitiesPage = () => (
  <div className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Fasilitas Sekolah</h1>
        <p className="text-gray-600 mt-2">
          Sarana dan prasarana lengkap untuk mendukung proses belajar yang
          optimal.
        </p>
      </div>
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
        {pageData.facilities.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:w-5/12">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="rounded-lg shadow-xl w-full aspect-video object-cover"
                  />
                </div>
                <div className="md:w-6/12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {facility.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-6/12 order-2 md:order-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {facility.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                <div className="md:w-5/12 order-1 md:order-2">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="rounded-lg shadow-xl w-full aspect-video object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- KOMPONEN HALAMAN PRESTASI ---
const AchievementsPage = () => {
  const achievementsByYear = pageData.achievementsPage.achievements.reduce(
    (acc, achievement) => {
      const year = achievement.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(achievement);
      return acc;
    },
    {}
  );

  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => b - a);

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

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            {pageData.achievementsPage.title}
          </h1>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            {pageData.achievementsPage.description}
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
};

// --- KOMPONEN UTAMA APLIKASI ---
export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'berita', 'fasilitas', 'prestasi'
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white font-sans">
      <Header setCurrentPage={handleSetCurrentPage} />
      <main>
        {currentPage === "home" && (
          <HomePage setCurrentPage={handleSetCurrentPage} />
        )}
        {currentPage === "berita" && (
          <NewsPage
            selectedArticleId={selectedArticleId}
            setSelectedArticleId={setSelectedArticleId}
          />
        )}
        {currentPage === "fasilitas" && <FacilitiesPage />}
        {currentPage === "prestasi" && <AchievementsPage />}
      </main>
      <Footer />
    </div>
  );
}
