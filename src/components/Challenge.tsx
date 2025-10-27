import { Shield, DollarSign, Users, AlertTriangle } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Rising Cyber Attacks",
    stat: "4,000+",
    description: "Cyber attacks occur every day, targeting businesses and individuals worldwide",
    impact: "Daily attacks globally"
  },
  {
    icon: DollarSign,
    title: "Financial Impact",
    stat: "£4.2B",
    description: "Annual cost of cybercrime to UK businesses, with small businesses hit hardest",
    impact: "Lost annually in UK"
  },
  {
    icon: Users,
    title: "Skills Gap",
    stat: "3.5M",
    description: "Unfilled cybersecurity jobs globally, leaving organizations vulnerable",
    impact: "Open positions worldwide"
  },
  {
    icon: Shield,
    title: "Data Breaches",
    stat: "83%",
    description: "Of organizations experienced multiple data breaches in the past year",
    impact: "Of businesses affected"
  }
];

export default function Challenge() {
  return (
    <section className="w-full md:w-[1440px] py-24 md:py-32 bg-white">
      <div className="px-4 md:px-16">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            The Challenge
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cybersecurity threats are escalating at an unprecedented rate, creating significant 
            challenges for businesses, individuals, and communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-accent-100 rounded-full flex items-center justify-center group-hover:bg-accent-200 transition-colors duration-300">
                <challenge.icon className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
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
              The Human Cost
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Beyond financial losses, cyber attacks cause stress, anxiety, and loss of trust. 
              Vulnerable communities—including seniors, small businesses, and digitally excluded 
              individuals—are disproportionately affected and often lack the resources to recover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}