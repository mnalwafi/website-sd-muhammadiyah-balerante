import React from 'react';
import { facilitiesData } from '@/lib/data/facilitiesData';

export const metadata = {
  title: "Fasilitas - SD Muhammadiyah Balerante",
  description: "Lihat fasilitas modern yang kami sediakan untuk mendukung proses belajar.",
};

export default function FacilitiesPage() {
  return (
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
          {facilitiesData.map((facility, index) => (
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
};

