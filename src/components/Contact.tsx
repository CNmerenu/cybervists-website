import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@cybervists.org",
      action: "mailto:hello@cybervists.org",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 (0) 1792 123456",
      action: "tel:+441792123456",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Swansea, Wales, UK",
      action: "#",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon-Fri: 9AM-5PM GMT",
      action: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full md:w-[1440px] py-16 md:py-24 bg-primary-400"
    >
      <div className="px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Get In Touch
            </h2>
            <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-12">
              Ready to strengthen your digital security? Contact us for
              consultations, training programs, or emergency support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.action}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-primary-800 rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm">
                      {info.content}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-primary-400 rounded-xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Quick Contact
            </h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 md:px-8 md:py-4 text-sm md:text-base bg-accent-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
