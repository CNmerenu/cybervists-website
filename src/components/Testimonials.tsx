"use client";

import { Star, Quote, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    role: string;
    experience: string;
    supportLevel: string[];
    supportType: string[];
    feedback: string;
    futureEngagement: string;
    rating: number;
  }>({
    name: "",
    role: "",
    experience: "",
    supportLevel: [],
    supportType: [],
    feedback: "",
    futureEngagement: "",
    rating: 5,
  });

  const experienceOptions = [
    "Attended a workshop or training session",
    "Received one-on-one support",
    "Participated in community events",
    "Used our online resources",
    "Volunteered with us",
    "Other",
  ];

  const supportLevelOptions = [
    "Individual/Personal",
    "Small Group (2-10 people)",
    "Community Group (10+ people)",
    "Organization/Business",
    "Educational Institution",
    "Government/Public Sector",
  ];

  const supportTypeOptions = [
    "Cybersecurity Training",
    "Digital Literacy Support",
    "Technical Troubleshooting",
    "Privacy & Data Protection Guidance",
    "Online Safety Education",
    "Device Setup & Configuration",
    "Software Installation & Training",
    "Incident Response Support",
  ];

  const handleCheckboxChange = (
    value: string,
    field: "supportLevel" | "supportType"
  ) => {
    const currentValues = formData[field] as string[];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [field]: updatedValues });
  };

  const testimonials = [
    {
      name: "Reg",
      role: "Community Member",
      content:
        "Thank you so much. I tried to sort this out two times in the market, the first person couldn&apos;t do it, and the second person charged me £90. Now, I&apos;ve learnt how to do it, I should give you 90 quids. lol",
      rating: 5,
    },
    {
      name: "Chinyere",
      role: "Community Partner",
      content:
        "I had the Cybervists support me in setting up my personal work system. They also delivered an Online Safety workshop for young people at C3 Centre Community during our Youth Mental Health Awareness Week Series.",
      rating: 5,
    },
    {
      name: "Angie",
      role: "Community Partner",
      content:
        "I&apos;ve NEVER really looked at emails properly until now – this game is a total eye-opener!",
      rating: 5,
    },
    {
      name: "Malia",
      role: "Community Member",
      content:
        "Now I know how to join in online for the church service if I can&apos;t drive down. That&apos;s very helpful. Thank you",
      rating: 5,
    },
    {
      name: "Sawari",
      role: "Volunteer",
      content:
        "Volunteering for Cybervists has helped me enhance my penetration testing skills while contributing to cybersecurity awareness. The supportive team and mentoring opportunities make it a great platform for aspiring professionals.",
      rating: 5,
    },
    {
      name: "Jade",
      role: "Community Member",
      content:
        "I&apos;m 81, I don&apos;t use computer very much but now I&apos;ve learnt a lot. I&apos;m so happy, I can share with my grand kids.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full md:w-[1440px] py-16 md:py-24 bg-white">
      <div className="px-4 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What Our Community Says
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Real stories from organizations and individuals who&aposve
            strengthened their digital security with our programs
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setCurrentSlide(currentSlide === 0 ? 1 : currentSlide - 1)
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() =>
              setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1)
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 md:p-8 relative"
                    >
                      <Quote className="w-8 h-8 text-blue-500 mb-4" />
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  {testimonials.slice(3, 6).map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 md:p-8 relative"
                    >
                      <Quote className="w-8 h-8 text-blue-500 mb-4" />
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[0, 1].map((slide) => (
              <button
                key={slide}
                onClick={() => setCurrentSlide(slide)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === slide ? "bg-primary-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feedback Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Give us your feedback
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Share Your Feedback
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Community Member, Partner, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Please provide some details about your experience with us:
                  </label>
                  <div className="space-y-2">
                    {experienceOptions.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="experience"
                          value={option}
                          checked={formData.experience === option}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experience: e.target.value,
                            })
                          }
                          className="mr-2 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    At what level was the support provided:
                  </label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {supportLevelOptions.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.supportLevel.includes(option)}
                          onChange={() =>
                            handleCheckboxChange(option, "supportLevel")
                          }
                          className="mr-2 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What kind of support did you receive from us:
                  </label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {supportTypeOptions.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.supportType.includes(option)}
                          onChange={() =>
                            handleCheckboxChange(option, "supportType")
                          }
                          className="mr-2 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Feedback
                  </label>
                  <textarea
                    rows={4}
                    value={formData.feedback}
                    onChange={(e) =>
                      setFormData({ ...formData, feedback: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Share your experience with us..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    We are keen on creating more impactful community
                    engagements, what would you be interested in seeing
                    regarding Cyber awareness and online safety?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.futureEngagement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        futureEngagement: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your ideas and suggestions..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        className={`w-8 h-8 ${
                          star <= formData.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
