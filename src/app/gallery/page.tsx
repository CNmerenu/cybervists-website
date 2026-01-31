"use client";

import { useState, useEffect } from "react";
import { MapPin, Users, Eye, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getWorkshopPreview, Workshop } from "@/src/lib/galleryData";

export default function Gallery() {
  const [workshops, setWorkshops] = useState<Omit<Workshop, "images">[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await getWorkshopPreview();
        setWorkshops(data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  if (loading) {
    return (
      <main className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workshops...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
              Workshop Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our community workshops and training sessions where we
              empower individuals and organizations with essential cybersecurity
              knowledge and digital literacy skills.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="space-y-16">
            {workshops.map((workshop) => (
              <div
                key={workshop._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Workshop Header */}
                <div className="p-6 md:p-8 border-b border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {workshop.title}
                      </h2>
                      <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {workshop.participants} participants
                    </div>
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-4 h-4" />
                      Supported by {workshop.partners}
                    </div>
                  </div>
                </div>

                {/* Preview Images */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {workshop.previewImages?.map((imageUrl: string, index: number) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg"
                      >
                        <Image
                          src={imageUrl}
                          alt={`${workshop.title} preview ${index + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      {workshop.totalImages} photos in this gallery
                    </p>
                    <Link
                      href={`/gallery/${workshop.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Full Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Our Impact Through Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                  50+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Sessions planned and delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                  5000+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  People reached across our platforms
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Participant satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
