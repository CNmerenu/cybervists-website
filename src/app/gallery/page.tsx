"use client";

import { Calendar, MapPin, Users, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  const workshops = [
    {
      id: 1,
      title: "Cybersecurity Awareness Workshop - C3 Centre Community",
      date: "2024-11-15",
      location: "C3 Centre, London",
      participants: 25,
      description:
        "Interactive workshop focusing on online safety and digital literacy for young people during Youth Mental Health Awareness Week.",
      slug: "cybersecurity-awareness-c3-centre",
      previewImages: [
        "/assets/gallery/workshop1-1.jpg",
        "/assets/gallery/workshop1-2.jpg",
      ],
      totalImages: 8,
    },
    {
      id: 2,
      title: "Digital Literacy Training for Seniors",
      date: "2024-10-28",
      location: "Community Centre, Birmingham",
      participants: 18,
      description:
        "Comprehensive digital literacy program designed specifically for senior citizens, covering basic cybersecurity and safe online practices.",
      slug: "digital-literacy-seniors",
      previewImages: [
        "/assets/gallery/workshop2-1.jpg",
        "/assets/gallery/workshop2-2.jpg",
      ],
      totalImages: 12,
    },
    {
      id: 3,
      title: "Small Business Cybersecurity Seminar",
      date: "2024-09-20",
      location: "Business Hub, Manchester",
      participants: 35,
      description:
        "Professional development seminar for small business owners focusing on practical cybersecurity measures and risk management.",
      slug: "small-business-cybersecurity",
      previewImages: [
        "/assets/gallery/workshop3-1.jpg",
        "/assets/gallery/workshop3-2.jpg",
      ],
      totalImages: 6,
    },
    {
      id: 4,
      title: "School Cybersecurity Education Program",
      date: "2024-08-15",
      location: "Greenfield Secondary School, Leeds",
      participants: 120,
      description:
        "Educational program for students aged 13-16, covering digital citizenship, online privacy, and cyberbullying prevention.",
      slug: "school-cybersecurity-education",
      previewImages: [
        "/assets/gallery/workshop4-1.jpg",
        "/assets/gallery/workshop4-2.jpg",
      ],
      totalImages: 15,
    },
    {
      id: 5,
      title: "Community Volunteer Training Session",
      date: "2024-07-10",
      location: "Cybervists Office, London",
      participants: 12,
      description:
        "Training session for new community volunteers, covering cybersecurity fundamentals and teaching methodologies.",
      slug: "community-volunteer-training",
      previewImages: [
        "/assets/gallery/workshop5-1.jpg",
        "/assets/gallery/workshop5-2.jpg",
      ],
      totalImages: 9,
    },
  ];

  return (
    <main className="w-full md:w-[1440px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
            Workshop Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Explore our community workshops and training sessions where we
            empower individuals and organizations with essential cybersecurity
            knowledge and digital literacy skills.
          </p>
          <div className="text-sm text-gray-500">
            {workshops.length} workshops •{" "}
            {workshops.reduce(
              (total, workshop) => total + workshop.participants,
              0
            )}{" "}
            participants reached
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
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
                    <Calendar className="w-4 h-4" />
                    {new Date(workshop.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {workshop.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {workshop.participants} participants
                  </div>
                </div>
              </div>

              {/* Preview Images */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {workshop.previewImages.map((imageUrl, index) => (
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Our Impact Through Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                15+
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Workshops Conducted
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                1000+
              </div>
              <div className="text-sm md:text-base text-gray-600">
                People impacted across our platforms
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Training participant satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
