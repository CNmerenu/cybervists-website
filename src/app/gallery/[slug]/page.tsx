import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import WorkshopGalleryClient from "@/components/WorkshopGalleryClient";

interface Params {
  params: Promise<{ slug: string }>;
}

const workshopGalleries: Record<string, any> = {
  "cybersecurity-awareness-c3-centre": {
    title: "Cybersecurity Awareness Workshop - C3 Centre Community",
    date: "2024-11-15",
    location: "C3 Centre, London",
    participants: 25,
    description:
      "Interactive workshop focusing on online safety and digital literacy for young people during Youth Mental Health Awareness Week.",
    images: [
      {
        url: "/assets/gallery/workshop1-1.jpg",
        alt: "Participants engaged in cybersecurity discussion",
        caption: "Young participants learning about online safety",
      },
      {
        url: "/assets/gallery/workshop1-2.jpg",
        alt: "Presenter explaining phishing techniques",
        caption: "Interactive demonstration of phishing recognition",
      },
      {
        url: "/assets/gallery/workshop1-3.jpg",
        alt: "Group activity on password security",
        caption: "Hands-on password security exercise",
      },
      {
        url: "/assets/gallery/workshop2-1.jpg",
        alt: "Workshop setup and preparation",
        caption: "Setting up interactive learning stations",
      },
      {
        url: "/assets/gallery/workshop2-2.jpg",
        alt: "Participants working in groups",
        caption: "Collaborative learning in small groups",
      },
      {
        url: "/assets/gallery/workshop3-1.jpg",
        alt: "Q&A session with participants",
        caption: "Engaging discussion about digital threats",
      },
      {
        url: "/assets/gallery/workshop3-2.jpg",
        alt: "Hands-on device security demo",
        caption: "Learning practical security measures",
      },
      {
        url: "/assets/gallery/workshop4-1.jpg",
        alt: "Workshop conclusion and feedback",
        caption: "Gathering feedback and next steps",
      },
    ],
  },
  "digital-literacy-seniors": {
    title: "Digital Literacy Training for Seniors",
    date: "2024-10-28",
    location: "Community Centre, Birmingham",
    participants: 18,
    description:
      "Comprehensive digital literacy program designed specifically for senior citizens, covering basic cybersecurity and safe online practices.",
    images: [
      {
        url: "/assets/gallery/workshop2-1.jpg",
        alt: "Senior participants learning digital skills",
        caption: "Seniors exploring digital security concepts",
      },
      {
        url: "/assets/gallery/workshop2-2.jpg",
        alt: "One-on-one support session",
        caption: "Personalized guidance on device security",
      },
      {
        url: "/assets/gallery/workshop2-3.jpg",
        alt: "Group discussion on online safety",
        caption: "Collaborative learning about online safety",
      },
      {
        url: "/assets/gallery/workshop2-4.jpg",
        alt: "Certificate presentation ceremony",
        caption: "Celebrating completion of digital literacy program",
      },
      {
        url: "/assets/gallery/workshop1-1.jpg",
        alt: "Participants practicing password creation",
        caption: "Learning to create strong passwords",
      },
      {
        url: "/assets/gallery/workshop1-2.jpg",
        alt: "Email security demonstration",
        caption: "Understanding email threats and protection",
      },
      {
        url: "/assets/gallery/workshop3-1.jpg",
        alt: "Social media privacy settings",
        caption: "Configuring privacy settings together",
      },
      {
        url: "/assets/gallery/workshop3-2.jpg",
        alt: "Device setup assistance",
        caption: "Helping with secure device configuration",
      },
      {
        url: "/assets/gallery/workshop4-1.jpg",
        alt: "Group photo with certificates",
        caption: "Proud graduates with their certificates",
      },
      {
        url: "/assets/gallery/workshop4-2.jpg",
        alt: "Feedback and evaluation session",
        caption: "Sharing experiences and improvements",
      },
      {
        url: "/assets/gallery/workshop5-1.jpg",
        alt: "Follow-up support planning",
        caption: "Planning ongoing support sessions",
      },
      {
        url: "/assets/gallery/workshop5-2.jpg",
        alt: "Community networking",
        caption: "Building connections for continued learning",
      },
    ],
  },
  "small-business-cybersecurity": {
    title: "Small Business Cybersecurity Seminar",
    date: "2024-09-20",
    location: "Business Hub, Manchester",
    participants: 35,
    description:
      "Professional development seminar for small business owners focusing on practical cybersecurity measures and risk management.",
    images: [
      {
        url: "/assets/gallery/workshop3-1.jpg",
        alt: "Business owners attending cybersecurity presentation",
        caption: "Business leaders learning about cyber threats",
      },
      {
        url: "/assets/gallery/workshop3-2.jpg",
        alt: "Interactive cybersecurity assessment",
        caption: "Hands-on security assessment workshop",
      },
      {
        url: "/assets/gallery/workshop1-1.jpg",
        alt: "Risk assessment exercise",
        caption: "Identifying business-specific security risks",
      },
      {
        url: "/assets/gallery/workshop2-1.jpg",
        alt: "Policy development workshop",
        caption: "Creating cybersecurity policies",
      },
      {
        url: "/assets/gallery/workshop4-1.jpg",
        alt: "Incident response planning",
        caption: "Preparing for security incidents",
      },
      {
        url: "/assets/gallery/workshop5-1.jpg",
        alt: "Networking and knowledge sharing",
        caption: "Business owners sharing experiences",
      },
    ],
  },
  "school-cybersecurity-education": {
    title: "School Cybersecurity Education Program",
    date: "2024-08-15",
    location: "Greenfield Secondary School, Leeds",
    participants: 120,
    description:
      "Educational program for students aged 13-16, covering digital citizenship, online privacy, and cyberbullying prevention.",
    images: [
      {
        url: "/assets/gallery/workshop4-1.jpg",
        alt: "Students participating in cybersecurity quiz",
        caption: "Interactive cybersecurity knowledge quiz",
      },
      {
        url: "/assets/gallery/workshop4-2.jpg",
        alt: "Classroom presentation on digital privacy",
        caption: "Learning about digital footprints and privacy",
      },
      {
        url: "/assets/gallery/workshop4-3.jpg",
        alt: "Group project on online safety",
        caption: "Collaborative project on creating safe online spaces",
      },
      {
        url: "/assets/gallery/workshop1-1.jpg",
        alt: "Digital citizenship workshop",
        caption: "Understanding rights and responsibilities online",
      },
      {
        url: "/assets/gallery/workshop1-2.jpg",
        alt: "Cyberbullying prevention session",
        caption: "Learning to recognize and prevent cyberbullying",
      },
      {
        url: "/assets/gallery/workshop2-1.jpg",
        alt: "Password security game",
        caption: "Fun activities teaching password security",
      },
      {
        url: "/assets/gallery/workshop2-2.jpg",
        alt: "Social media safety discussion",
        caption: "Discussing safe social media practices",
      },
      {
        url: "/assets/gallery/workshop3-1.jpg",
        alt: "Phishing simulation exercise",
        caption: "Hands-on phishing recognition training",
      },
      {
        url: "/assets/gallery/workshop3-2.jpg",
        alt: "Digital footprint activity",
        caption: "Understanding online presence and privacy",
      },
      {
        url: "/assets/gallery/workshop5-1.jpg",
        alt: "Student presentations",
        caption: "Students presenting their cybersecurity projects",
      },
      {
        url: "/assets/gallery/workshop5-2.jpg",
        alt: "Q&A with cybersecurity experts",
        caption: "Students asking questions about cybersecurity careers",
      },
      {
        url: "/assets/gallery/workshop2-3.jpg",
        alt: "Certificate ceremony",
        caption: "Recognizing student achievements",
      },
      {
        url: "/assets/gallery/workshop2-4.jpg",
        alt: "Teacher training session",
        caption: "Training teachers on cybersecurity education",
      },
      {
        url: "/assets/gallery/workshop1-3.jpg",
        alt: "Interactive technology demo",
        caption: "Demonstrating security technologies",
      },
      {
        url: "/assets/gallery/workshop4-3.jpg",
        alt: "Group reflection session",
        caption: "Students reflecting on their learning",
      },
    ],
  },
  "community-volunteer-training": {
    title: "Community Volunteer Training Session",
    date: "2024-07-10",
    location: "Cybervists Office, London",
    participants: 12,
    description:
      "Training session for new community volunteers, covering cybersecurity fundamentals and teaching methodologies.",
    images: [
      {
        url: "/assets/gallery/workshop5-1.jpg",
        alt: "Volunteer training session in progress",
        caption: "Training future cybersecurity advocates",
      },
      {
        url: "/assets/gallery/workshop5-2.jpg",
        alt: "Hands-on technical demonstration",
        caption: "Technical skills development for volunteers",
      },
      {
        url: "/assets/gallery/workshop1-1.jpg",
        alt: "Teaching methodology workshop",
        caption: "Learning effective teaching techniques",
      },
      {
        url: "/assets/gallery/workshop2-1.jpg",
        alt: "Cybersecurity fundamentals session",
        caption: "Building foundational knowledge",
      },
      {
        url: "/assets/gallery/workshop3-1.jpg",
        alt: "Community outreach planning",
        caption: "Planning community engagement strategies",
      },
      {
        url: "/assets/gallery/workshop4-1.jpg",
        alt: "Role-playing exercises",
        caption: "Practicing workshop delivery",
      },
      {
        url: "/assets/gallery/workshop2-2.jpg",
        alt: "Resource development",
        caption: "Creating educational materials",
      },
      {
        url: "/assets/gallery/workshop3-2.jpg",
        alt: "Volunteer certification",
        caption: "Celebrating new certified volunteers",
      },
      {
        url: "/assets/gallery/workshop4-2.jpg",
        alt: "Team building activities",
        caption: "Building strong volunteer relationships",
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
      </section>

      {/* Photo Gallery */}
      <section className="px-4 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <WorkshopGalleryClient
            images={workshop.images}
            workshopTitle={workshop.title}
            workshopDate={workshop.date}
          />
        </div>
      </section>
    </main>
  );
}
