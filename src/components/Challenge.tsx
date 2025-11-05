import {
  DollarSign,
  Users,
  Clock,
  UserX,
  Mic,
  Heart,
  LucideIcon,
} from "lucide-react";

interface Challenge {
  icon?: LucideIcon;
  title: string;
  stat: string;
  description: string;
  impact: string;
}

const challengeContent = {
  title: "The prevailing challenge",
  subtitle:
    "Cybersecurity threats are escalating at an unprecedented rate, creating significant challenges for businesses, individuals, and communities worldwide.",
  challenges: [
    {
      icon: DollarSign,
      title: "Global Scam Losses",
      stat: "$1.03T",
      description:
        "Lost to online scams annually worldwide, devastating individuals and families",
      impact: "Lost globally per year",
    },
    {
      icon: Clock,
      title: "Attack Frequency",
      stat: "39 sec",
      description:
        "Average time between cyber attacks, showing the relentless nature of threats",
      impact: "Between attacks",
    },
    {
      icon: UserX,
      title: "Digital Exclusion",
      stat: "2.7B",
      description:
        "People worldwide lack basic digital skills, leaving them vulnerable to exploitation",
      impact: "People digitally excluded",
    },
    {
      icon: Users,
      title: "Senior Isolation",
      stat: "47%",
      description:
        "Of seniors feel left behind digitally, making them prime targets for scammers",
      impact: "Of seniors affected",
    },
    {
      icon: Heart,
      title: "Child Cyberbullying",
      stat: "1 in 3",
      description:
        "Children experience cyberbullying, causing lasting psychological harm",
      impact: "Children affected",
    },
    {
      icon: Mic,
      title: "AI Voice Scams",
      stat: "1 in 10",
      description:
        "Adults have experienced AI voice scams, a rapidly growing threat",
      impact: "Adults targeted",
    },
  ],
  summary: {
    title: "The Human Cost",
    description:
      "Beyond financial losses, cyber attacks cause stress, anxiety, and loss of trust. Vulnerable communities including seniors, small businesses, and digitally excluded individuals are disproportionately affected and often lack the resources to recover.",
  },
};

export default function Challenge() {
  return (
    <section
      className="w-full py-24 md:py-32 bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/websitechallenge.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            {challengeContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {challengeContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {challengeContent.challenges.slice(0, 3).map((challenge, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
                {challenge.stat}
              </div>
              <div className="text-sm text-accent-600 font-medium mb-4">
                {challenge.impact}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {challengeContent.challenges.slice(3).map((challenge, index) => (
            <div key={index + 3} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
                {challenge.stat}
              </div>
              <div className="text-sm text-accent-600 font-medium mb-4">
                {challenge.impact}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {challengeContent.summary.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {challengeContent.summary.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
