import React from 'react';
import { homeData } from '@/lib/data/homeData';
import { contactData } from '@/lib/data/contactData';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            {homeData.profile.name}
          </h3>
          <p className="text-gray-400">{contactData.address}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/fasilitas" className="text-gray-400 hover:text-white">Fasilitas</Link></li>
            <li><Link href="/prestasi" className="text-gray-400 hover:text-white">Prestasi</Link></li>
            <li><Link href="/berita" className="text-gray-400 hover:text-white">Berita</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
          <p className="text-gray-400">Telepon: {contactData.phone}</p>
          <p className="text-gray-400">Email: {contactData.email}</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {homeData.profile.name}. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

