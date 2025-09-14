"use client";
import { useState } from "react";
import { contactData } from "@/lib/data/contactData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "6288339274496"; // Ganti 0 dengan 62
    const { name, email, phone, message } = formData;

    const whatsappMessage = `
Assalamualaikum, wr. wb.
Saya ingin bertanya informasi PPDB.

Nama Calon Siswa: ${name}
Email Orang Tua: ${email}
No. Telepon/WA: ${phone}
Pesan: ${message}

Terima kasih.
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect ke WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form setelah beberapa saat (meskipun pengguna sudah dialihkan)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Hubungi Kami</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Silakan hubungi kami melalui
            informasi di bawah ini atau kunjungi kami langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informasi Kontak */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Informasi Kontak
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Alamat:</strong>
                <br />
                {contactData.address}
              </p>
              <p>
                <strong>Telepon:</strong>
                <br />
                <a
                  href={`tel:${contactData.phone}`}
                  className="text-emerald-600 hover:underline"
                >
                  {contactData.phone}
                </a>
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-emerald-600 hover:underline"
                >
                  {contactData.email}
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">
              Lokasi Sekolah
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={contactData.map}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Formulir Kontak (PPDB) */}
          <div id="ppdb" className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kirim Pesan (Informasi PPDB)
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Calon Siswa
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Contoh: Muhammad Al Fatih"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Orang Tua
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Contoh: email@orangtua.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  No. Telepon/WA Aktif
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Contoh: 081234567890"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pesan atau Pertanyaan
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Tuliskan pertanyaan Anda di sini..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-400"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim via WhatsApp"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
