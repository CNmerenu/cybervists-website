export interface WorkshopImage {
  url: string;
  alt: string;
  caption: string;
}

export interface Workshop {
  id: number;
  title: string;
  location: string;
  participants: number | string;
  partners: string;
  description: string;
  slug: string;
  previewImages: string[];
  totalImages: number;
  images: WorkshopImage[];
}

const workshopsData: Workshop[] = [
  {
    id: 1,
    title: "Community Cyber Support Hub - Drop-in support for all your digital needs",
    location: "United Kingdom",
    participants: "Community members",
    partners: "The Community",
    description: "Walk-in support for anyone needing digital or cybersecurity help, no appointment required. Whether you're facing a tech challenge, need password help, or want to learn how to stay safe online, our team is here to provide the guidance and confidence you need.",
    slug: "community-cyber-support-hub",
    previewImages: [
      "/assets/gallery/community-cyber-support-hub/1.png",
      "/assets/gallery/community-cyber-support-hub/2.png",
    ],
    totalImages: 7,
    images: [
      {
        url: "/assets/gallery/community-cyber-support-hub/1.png",
        alt: "Community members receiving digital support",
        caption: "Walk-in support session in progress",
      },
      {
        url: "/assets/gallery/community-cyber-support-hub/2.png",
        alt: "One-on-one cybersecurity help",
        caption: "Personalized cybersecurity guidance",
      },
      {
        url: "/assets/gallery/community-cyber-support-hub/3.png",
        alt: "Password help session",
        caption: "Helping community members with password security",
      },
      {
        url: "/assets/gallery/community-cyber-support-hub/4.png",
        alt: "Digital literacy support",
        caption: "Building digital confidence",
      },
      {
        url: "/assets/gallery/community-cyber-support-hub/5.png",
        alt: "Tech challenge resolution",
        caption: "Solving technical challenges together",
      },
      {
        url: "/assets/gallery/community-cyber-support-hub/6.png",
        alt: "Online safety education",
        caption: "Learning to stay safe online",
      },
      {
        url: "/assets/gallery/community-cyber-support-hub/7.png",
        alt: "Community support hub overview",
        caption: "Overview of our community support services",
      },
    ],
  },
  {
    id: 2,
    title: "Cyber Secure Generation Project",
    location: "United Kingdom",
    participants: "Community wide",
    partners: "National Lottery, Community-wide partnership with multiple organisations",
    description: "The Cyber-Secured Generation Project is an intergenerational initiative aimed at equipping young people, immigrant parents, and seniors with cybersecurity and digital literacy skills. Built on the success of previous initiatives, it emphasises inclusivity, bilingual communication, and community ownership.",
    slug: "cyber-secure-generation-project",
    previewImages: [
      "/assets/gallery/cyber-secure-generation-project/1.png",
      "/assets/gallery/cyber-secure-generation-project/2.png",
    ],
    totalImages: 17,
    images: [
      ...Array.from({ length: 16 }, (_, i) => ({
        url: `/assets/gallery/cyber-secure-generation-project/${i + 1}.png`,
        alt: `Cyber Secure Generation Project activity ${i + 1}`,
        caption: `Intergenerational cybersecurity learning session ${i + 1}`,
      })),
      {
        url: "/assets/gallery/cyber-secure-generation-project/Project main image.png",
        alt: "Cyber Secure Generation Project main image",
        caption: "Project overview and community impact",
      },
    ],
  },
  {
    id: 3,
    title: "Digitally Confident & Cyber-Safe - Adults Session",
    location: "United Kingdom",
    participants: 47,
    partners: "Our Lady Star of the Sea, Mumbles Community.",
    description: "This workshop focuses on adults gaining the cybersecurity knowledge and digital confidence to protect themselves and their families online. Build skills that create safety, and connection.",
    slug: "digitally-confident-cyber-safe-adults",
    previewImages: [
      "/assets/gallery/digitally-confident-cyber-safe-adults/1.png",
      "/assets/gallery/digitally-confident-cyber-safe-adults/2.png",
    ],
    totalImages: 8,
    images: [
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/1.png",
        alt: "Adults cybersecurity session 1",
        caption: "Building digital confidence and cyber safety 1",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/2.png",
        alt: "Adults cybersecurity session 2",
        caption: "Building digital confidence and cyber safety 2",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/3.png",
        alt: "Adults cybersecurity session 3",
        caption: "Building digital confidence and cyber safety 3",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/4.png",
        alt: "Adults cybersecurity session 4",
        caption: "Building digital confidence and cyber safety 4",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/5.png",
        alt: "Adults cybersecurity session 5",
        caption: "Building digital confidence and cyber safety 5",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/6.png",
        alt: "Adults cybersecurity session 6",
        caption: "Building digital confidence and cyber safety 6",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/7.png",
        alt: "Adults cybersecurity session 7",
        caption: "Building digital confidence and cyber safety 7",
      },
      {
        url: "/assets/gallery/digitally-confident-cyber-safe-adults/9.png",
        alt: "Adults cybersecurity session 9",
        caption: "Building digital confidence and cyber safety 9",
      },
    ],
  },
  {
    id: 4,
    title: "Young Cyber Defenders, Secure Futures",
    location: "United Kingdom",
    participants: 67,
    partners: "BMHS, C3 Center for Creativity and Culture.",
    description: "This program empowers young people to become cyber defenders who are critical in building secure digital futures from the ground up, protecting themselves, teaching families, and transforming communities one connection at a time.",
    slug: "young-cyber-defenders-secure-futures",
    previewImages: [
      "/assets/gallery/young-cyber-defenders-secure-futures/1.png",
      "/assets/gallery/young-cyber-defenders-secure-futures/2.png",
    ],
    totalImages: 5,
    images: [
      {
        url: "/assets/gallery/young-cyber-defenders-secure-futures/1.png",
        alt: "Young cyber defenders in training",
        caption: "Empowering young people as cyber defenders",
      },
      {
        url: "/assets/gallery/young-cyber-defenders-secure-futures/2.png",
        alt: "Secure futures workshop session",
        caption: "Building secure digital futures from the ground up",
      },
      {
        url: "/assets/gallery/young-cyber-defenders-secure-futures/3.png",
        alt: "Community transformation through learning",
        caption: "Transforming communities one connection at a time",
      },
      {
        url: "/assets/gallery/young-cyber-defenders-secure-futures/Nurture 2.png",
        alt: "Nurturing young cyber talent",
        caption: "Nurturing the next generation of cyber defenders",
      },
      {
        url: "/assets/gallery/young-cyber-defenders-secure-futures/Screenshot 2025-10-23 233522.png",
        alt: "Program overview and impact",
        caption: "Overview of the Young Cyber Defenders program",
      },
    ],
  },
];

// API functions
export const getAllWorkshops = (): Workshop[] => {
  return workshopsData;
};

export const getWorkshopBySlug = (slug: string): Workshop | undefined => {
  return workshopsData.find(workshop => workshop.slug === slug);
};

export const getWorkshopPreview = () => {
  return workshopsData.map(workshop => {
    const { images, ...workshopPreview } = workshop;
    return workshopPreview;
  });
};