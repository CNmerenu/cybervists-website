"use client";

import { Calendar, MapPin, Users, Eye, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  const workshops = [
    {
      id: 1,
      title:
        "Community Cyber Support Hub - Drop-in support for all your digital needs",
      location: "United Kingdom",
      participants: "Community members",
      partners: "The Community",
      description:
        "Walk-in support for anyone needing digital or cybersecurity help, no appointment required. Whether you're facing a tech challenge, need password help, or want to learn how to stay safe online, our team is here to provide the guidance and confidence you need.",
      slug: "community-cyber-support-hub",
      previewImages: [
        "/assets/gallery/Community Cyber Support Hub/1.png",
        "/assets/gallery/Community Cyber Support Hub/2.png",
      ],
      totalImages: 7,
    },
    {
      id: 2,
      title: "Cyber Secure Generation Project",
      location: "United Kingdom",
      participants: "Community wide",
      partners:
        "National Lottery, Community-wide partnership with multiple organisations",
      description:
        "The Cyber-Secured Generation Project is an intergenerational initiative aimed at equipping young people, immigrant parents, and seniors with cybersecurity and digital literacy skills. Built on the success of previous initiatives, it emphasises inclusivity, bilingual communication, and community ownership.",
      slug: "cyber-secure-generation-project",
      previewImages: [
        "/assets/gallery/Cyber Secure Generation project Community Led/1.png",
        "/assets/gallery/Cyber Secure Generation project Community Led/2.png",
      ],
      totalImages: 17,
    },
    {
      id: 3,
      title: "Digitally Confident & Cyber-Safe - Adults Session",
      location: "United Kingdom",
      participants: 47,
      partners: "Our Lady Star of the Sea, Mumbles Community.",
      description:
        "This workshop focuses on adults gaining the cybersecurity knowledge and digital confidence to protect themselves and their families online. Build skills that create safety, and connection.",
      slug: "digitally-confident-cyber-safe-adults",
      previewImages: [
        "/assets/gallery/Digitally Confident & Cyber-Safe - Adults Session/1.png",
        "/assets/gallery/Digitally Confident & Cyber-Safe - Adults Session/2.png",
      ],
      totalImages: 8,
    },
    {
      id: 4,
      title: "Young Cyber Defenders, Secure Futures",
      location: "United Kingdom",
      participants: 67,
      partners: "BMHS, C3 Center for Creativity and Culture.",
      description:
        "This program empowers young people to become cyber defenders who are critical in building secure digital futures from the ground up, protecting themselves, teaching families, and transforming communities one connection at a time.",
      slug: "young-cyber-defenders-secure-futures",
      previewImages: [
        "/assets/gallery/Young Cyber Defenders,Secure Futures/1.png",
        "/assets/gallery/Young Cyber Defenders,Secure Futures/2.png",
      ],
      totalImages: 5,
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
