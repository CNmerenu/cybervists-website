"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, HeartPulse, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import WorkshopGalleryClient from "@/components/WorkshopGalleryClient";
import { getWorkshopBySlug, Workshop } from "@/lib/galleryData";

export default function WorkshopGallery() {
  const params = useParams();
  const slug = params.slug as string;
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchWorkshop = async () => {
      try {
        const data = getWorkshopBySlug(slug);
        if (data) {
          setWorkshop(data);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching workshop:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchWorkshop();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="w-full md:w-[1440px] min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workshop...</p>
        </div>
      </main>
    );
  }

  if (notFound || !workshop) {
    return (
      <main className="w-full md:w-[1440px] min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The workshop gallery you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full md:w-[1440px] min-h-screen bg-white">
      {/* Navigation */}
      <section className="py-8 px-4 md:px-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {workshop.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            {workshop.description}
          </p>

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
      </section>

      {/* Photo Gallery */}
      <section className="px-4 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <WorkshopGalleryClient
            images={workshop.images}
            workshopTitle={workshop.title}
          />
        </div>
      </section>
    </main>
  );
}
