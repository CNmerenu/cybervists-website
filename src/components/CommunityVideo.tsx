import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { siFacebook, siInstagram, siYoutube } from "simple-icons";

const communityVideoContent = {
  title: "Hear From Our Community",
  subtitle:
    "Listen to what our community members have to say about the impact of our programs",
  videoUrl: "https://youtu.be/7oX3TlQFNJA", // Placeholder - replace with actual YouTube link
  description:
    "Our community members share their experiences and the positive impact our cybersecurity and digital literacy programs have had on their lives and organizations.",
  highlights: [
    "Real stories from community members",
    "Measurable impact on digital confidence",
    "Transformative cybersecurity awareness",
    "Building safer digital communities",
  ],
};

function convertToEmbedUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:shorts\/|v=|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return videoIdMatch
    ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
    : url;
}

export default function CommunityVideo() {
  return (
    <section
      className="w-full py-24 md:py-32 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/bobomi.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Messaging */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              {communityVideoContent.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              {communityVideoContent.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {communityVideoContent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {communityVideoContent.description}
            </p>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center flex-col gap-5">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-900">
              <iframe
                src={convertToEmbedUrl(communityVideoContent.videoUrl)}
                title="Community Impact Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61579074960835"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d={siFacebook.path} />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@Cybervists_community"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d={siYoutube.path} />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/cybervists/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-5 h-5 text-white"
                />
              </Link>
              <Link
                href="https://www.instagram.com/cybervists?igsh=MTNuN2VzNTg2b2Mwdw%3D%3D"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d={siInstagram.path} />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
