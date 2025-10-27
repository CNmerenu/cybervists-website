import { ArrowLeft, Calendar, HeartPulse, MapPin, Users } from "lucide-react";
import Link from "next/link";
import WorkshopGalleryClient from "@/components/WorkshopGalleryClient";

interface Params {
  params: Promise<{ slug: string }>;
}

interface WorkshopData {
  title: string;
  location: string;
  participants: number | string;
  partners: string;
  description: string;
  images: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
}

const workshopGalleries: Record<string, WorkshopData> = {
  "community-cyber-support-hub": {
    title: "Community Cyber Support Hub",
    location: "United Kingdom",
    partners: "BMHS, C3 Center for Creativity and Culture.",
    participants: "Community members",
    description:
      "Walk-in support for anyone needing digital or cybersecurity help, no appointment required. Whether you're facing a tech challenge, need password help, or want to learn how to stay safe online, our team is here to provide the guidance and confidence you need.",
    images: [
      {
        url: "/assets/gallery/Community Cyber Support Hub/1.png",
        alt: "Community members receiving digital support",
        caption: "Walk-in support session in progress",
      },
      {
        url: "/assets/gallery/Community Cyber Support Hub/2.png",
        alt: "One-on-one cybersecurity help",
        caption: "Personalized cybersecurity guidance",
      },
      {
        url: "/assets/gallery/Community Cyber Support Hub/3.png",
        alt: "Password help session",
        caption: "Helping community members with password security",
      },
      {
        url: "/assets/gallery/Community Cyber Support Hub/4.png",
        alt: "Digital literacy support",
        caption: "Building digital confidence",
      },
      {
        url: "/assets/gallery/Community Cyber Support Hub/5.png",
        alt: "Tech challenge resolution",
        caption: "Solving technical challenges together",
      },
      {
        url: "/assets/gallery/Community Cyber Support Hub/6.png",
        alt: "Online safety education",
        caption: "Learning to stay safe online",
      },
      {
        url: "/assets/gallery/Community Cyber Support Hub/7.png",
        alt: "Community support hub overview",
        caption: "Overview of our community support services",
      },
    ],
  },
  "cyber-secure-generation-project": {
    title: "Cyber Secure Generation Project",
    location: "United Kingdom",
    participants: "Community wide",
    partners:
      "National Lottery, Community-wide partnership with multiple organisations",
    description:
      "The Cyber-Secured Generation Project is an intergenerational initiative aimed at equipping young people, immigrant parents, and seniors with cybersecurity and digital literacy skills. Built on the success of previous initiatives, it emphasises inclusivity, bilingual communication, and community ownership.",
    images: Array.from({ length: 16 }, (_, i) => ({
      url: `/assets/gallery/Cyber Secure Generation project Community Led/${
        i + 1
      }.png`,
      alt: `Cyber Secure Generation Project activity ${i + 1}`,
      caption: `Intergenerational cybersecurity learning session ${i + 1}`,
    })).concat({
      url: `/assets/gallery/Cyber Secure Generation project Community Led/Project main image.png`,
      alt: "Cyber Secure Generation Project main image",
      caption: "Project overview and community impact",
    }),
  },
  "digitally-confident-cyber-safe-adults": {
    title: "Digitally Confident & Cyber-Safe - Adults Session",
    location: "Our Lady Star of the Sea, Mumbles Community, United Kingdom",
    participants: 47,
    partners: "Our Lady Star of the Sea, Mumbles Community.",
    description:
      "This workshop focuses on adults gaining the cybersecurity knowledge and digital confidence to protect themselves and their families online. Build skills that create safety, and connection.",
    images: Array.from({ length: 8 }, (_, i) => ({
      url: `/assets/gallery/Digitally Confident & Cyber-Safe - Adults Session/${
        i + 1
      }.png`,
      alt: `Adults cybersecurity session ${i + 1}`,
      caption: `Building digital confidence and cyber safety ${i + 1}`,
    })).filter((_, i) => i !== 7), // Skip index 8 as file doesn't exist
  },
  "young-cyber-defenders-secure-futures": {
    title: "Young Cyber Defenders, Secure Futures",
    location: "BMHS, C3 Center for Creativity and Culture, United Kingdom",
    participants: 67,
    partners: "BMHS, C3 Center for Creativity and Culture",
    description:
      "This program empowers young people to become cyber defenders who are critical in building secure digital futures from the ground up, protecting themselves, teaching families, and transforming communities one connection at a time.",
    images: [
      {
        url: "/assets/gallery/Young Cyber Defenders,Secure Futures/1.png",
        alt: "Young cyber defenders in training",
        caption: "Empowering young people as cyber defenders",
      },
      {
        url: "/assets/gallery/Young Cyber Defenders,Secure Futures/2.png",
        alt: "Secure futures workshop session",
        caption: "Building secure digital futures from the ground up",
      },
      {
        url: "/assets/gallery/Young Cyber Defenders,Secure Futures/3.png",
        alt: "Community transformation through learning",
        caption: "Transforming communities one connection at a time",
      },
      {
        url: "/assets/gallery/Young Cyber Defenders,Secure Futures/Nurture 2.png",
        alt: "Nurturing young cyber talent",
        caption: "Nurturing the next generation of cyber defenders",
      },
      {
        url: "/assets/gallery/Young Cyber Defenders,Secure Futures/Screenshot 2025-10-23 233522.png",
        alt: "Program overview and impact",
        caption: "Overview of the Young Cyber Defenders program",
      },
    ],
  },
};

export default async function WorkshopGallery({ params }: Params) {
  const { slug } = await params;
  const workshop = workshopGalleries[slug];

  if (!workshop) {
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
