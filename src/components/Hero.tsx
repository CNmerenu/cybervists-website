"use client";

import { Calendar, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pronoun: "",
    techSkill: "",
    interests: [] as string[],
    otherInterest: "",
    hasExperience: "",
    certifications: [] as string[],
    otherCertification: "",
    wantsCertifications: "",
    stemExperience: "",
    volunteerHours: "",
    otherHours: "",
    preferredTimes: [] as string[],
    comfortableWithDiverse: "",
    consent: false,
    companyName: "",
    timestamp: 0,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (formData.companyName) {
      return; // Silently ignore bot submissions
    }
    
    // Timestamp check - if submitted too quickly, it's likely a bot
    const now = Date.now();
    if (now - formStartTime < 5000) {
      return; // Silently ignore submissions under 5 seconds
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/community-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          pronoun: "",
          techSkill: "",
          interests: [],
          otherInterest: "",
          hasExperience: "",
          certifications: [],
          otherCertification: "",
          wantsCertifications: "",
          stemExperience: "",
          volunteerHours: "",
          otherHours: "",
          preferredTimes: [],
          comfortableWithDiverse: "",
          consent: false,
          companyName: "",
          timestamp: 0,
        });
        setFormStartTime(0);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
    
    setLoading(false);
  };
  return (
    <section className="w-full min-h-[600px] md:h-[828px] border-b-[1px] border-blue-500/20 flex justify-center overflow-hidden bg-transparent">
      <div className="w-full max-w-[1440px] h-full relative">
        <div className="w-full h-full absolute top-0 z-20 bg-none">
          <Image
            src={"/assets/rotating-icon.svg"}
            alt="cybervists target icon"
            width={1200}
            height={1200}
            className="animate-spin absolute -right-[20%] -top-[20%] opacity-15"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="w-full h-full absolute top-0 z-40 bg-transparent">
          <div className="w-full h-full flex items-start md:items-center justify-center py-8 md:py-0">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {/* Key Visuals - Mobile First */}
              <div className="flex justify-center md:order-2 md:w-1/2 px-4">
                <Image
                  src="/assets/symbol.svg"
                  alt="Cybervists Symbol logo"
                  width={500}
                  height={500}
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[500px] h-auto"
                />
              </div>

              {/* Key Message & CTA */}
              <div className="w-full md:w-1/2 text-center md:text-left md:order-1 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-gray-900">
                    Cyber Awareness{" "}
                    <span className="block"> Ethical Use &</span>
                    <span className="block">Digital Inclusion</span>
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed md:w-[65%]">
                  Championing Digital Literacy and Security, Responsible Use &
                  Inclusion
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start w-full">
                  <button
                    onClick={() => {
      const now = Date.now();
      setFormStartTime(now);
      setFormData({ ...formData, timestamp: now });
      setShowModal(true);
    }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-primary-600 text-white text-sm md:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                  >
                    Join Our Community
                  </button>
                  <Link
                    href={
                      "https://www.eventbrite.co.uk/o/cybervists-113913212541"
                    }
                    target="_blank"
                    className="px-4 py-3 md:px-8 md:py-4 border border-blue-500/30 text-accent-600 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2 md:gap-4 justify-center text-sm md:text-base"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">
                      View Upcoming Events
                    </span>
                    <span className="sm:hidden">Events</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Community Signup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto my-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {submitted ? "Welcome!" : "Join Our Community"}
              </h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSubmitted(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {submitted ? (
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Thank you for joining our community! We'll be in touch soon.
                </p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSubmitted(false);
                  }}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Pronoun *</label>
                  <input
                    type="text"
                    value={formData.pronoun}
                    onChange={(e) => setFormData({ ...formData, pronoun: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., she/her, he/him, they/them"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Tech skill and experience level? *</label>
                  <div className="space-y-2">
                    {[
                      "I can write code comfortably",
                      "I can't code but I'm able use Tech tools comfortably (excel, word etc.)",
                      "I have limited knowledge of Tech tools",
                      "I'm looking to start from scratch"
                    ].map((option) => (
                      <label key={option} className="flex items-start gap-2">
                        <input
                          type="radio"
                          name="techSkill"
                          value={option}
                          checked={formData.techSkill === option}
                          onChange={(e) => setFormData({ ...formData, techSkill: e.target.value })}
                          className="mt-1"
                          required
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Areas of Tech/Cybersecurity interest? (Select two) *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Cybersecurity Awareness Training",
                      "Cybersecurity Policy & Compliance",
                      "Penetration Testing & Ethical Hacking",
                      "Cyber Security Consultancy",
                      "Data protection & Privacy",
                      "Cyber Security Research",
                      "Network Security",
                      "Software Development",
                      "UX/UI designer",
                      "Web Development"
                    ].map((option) => (
                      <label key={option} className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          value={option}
                          checked={formData.interests.includes(option)}
                          onChange={(e) => {
                            const interests = e.target.checked
                              ? [...formData.interests, option]
                              : formData.interests.filter(i => i !== option);
                            if (interests.length <= 2) {
                              setFormData({ ...formData, interests });
                            }
                          }}
                          className="mt-1"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                    <div className="md:col-span-2">
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          value="Other"
                          checked={formData.interests.includes("Other")}
                          onChange={(e) => {
                            const interests = e.target.checked
                              ? [...formData.interests, "Other"]
                              : formData.interests.filter(i => i !== "Other");
                            if (interests.length <= 2) {
                              setFormData({ ...formData, interests });
                            }
                          }}
                          className="mt-1"
                        />
                        <span className="text-sm">Other:</span>
                      </label>
                      {formData.interests.includes("Other") && (
                        <input
                          type="text"
                          value={formData.otherInterest}
                          onChange={(e) => setFormData({ ...formData, otherInterest: e.target.value })}
                          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Please specify"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Experience in your area(s) of interest? *</label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="hasExperience"
                          value={option}
                          checked={formData.hasExperience === option}
                          onChange={(e) => setFormData({ ...formData, hasExperience: e.target.value })}
                          required
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Certifications in technology or cybersecurity? (Select all that apply) *</label>
                  <div className="space-y-2">
                    {[
                      "CompTIA Security+",
                      "Certified Ethical Hacker (CEH)",
                      "CISSP (Certified Information Systems Security Professional)",
                      "Cisco Certified CyberOps Associate",
                      "Microsoft Cybersecurity Certification",
                      "Governance, Risk and Compliance Certification",
                      "None"
                    ].map((option) => (
                      <label key={option} className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          value={option}
                          checked={formData.certifications.includes(option)}
                          onChange={(e) => {
                            const certifications = e.target.checked
                              ? [...formData.certifications, option]
                              : formData.certifications.filter(c => c !== option);
                            setFormData({ ...formData, certifications });
                          }}
                          className="mt-1"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                    <div>
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          value="Other"
                          checked={formData.certifications.includes("Other")}
                          onChange={(e) => {
                            const certifications = e.target.checked
                              ? [...formData.certifications, "Other"]
                              : formData.certifications.filter(c => c !== "Other");
                            setFormData({ ...formData, certifications });
                          }}
                          className="mt-1"
                        />
                        <span className="text-sm">Other:</span>
                      </label>
                      {formData.certifications.includes("Other") && (
                        <input
                          type="text"
                          value={formData.otherCertification}
                          onChange={(e) => setFormData({ ...formData, otherCertification: e.target.value })}
                          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Please specify"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Consider for Cyber Security certifications in future?</label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="wantsCertifications"
                          value={option}
                          checked={formData.wantsCertifications === option}
                          onChange={(e) => setFormData({ ...formData, wantsCertifications: e.target.value })}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Experience in the IT or STEM field? *</label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="stemExperience"
                          value={option}
                          checked={formData.stemExperience === option}
                          onChange={(e) => setFormData({ ...formData, stemExperience: e.target.value })}
                          required
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Hours per week available to volunteer? *</label>
                  <div className="flex flex-wrap gap-4">
                    {["2", "4", "6", "8"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="volunteerHours"
                          value={option}
                          checked={formData.volunteerHours === option}
                          onChange={(e) => setFormData({ ...formData, volunteerHours: e.target.value })}
                          required
                        />
                        <span className="text-sm">{option} hours</span>
                      </label>
                    ))}
                    <div>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="volunteerHours"
                          value="Other"
                          checked={formData.volunteerHours === "Other"}
                          onChange={(e) => setFormData({ ...formData, volunteerHours: e.target.value })}
                          required
                        />
                        <span className="text-sm">Other:</span>
                      </label>
                      {formData.volunteerHours === "Other" && (
                        <input
                          type="number"
                          value={formData.otherHours}
                          onChange={(e) => setFormData({ ...formData, otherHours: e.target.value })}
                          className="w-20 mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Hours"
                          min="1"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Days/Times for Volunteering? (Select all that apply) *</label>
                  <div className="space-y-2">
                    {[
                      "Weekdays (Evenings)",
                      "Weekdays (Daytime)",
                      "Weekends (Daytime)",
                      "Weekends (Evenings)"
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={option}
                          checked={formData.preferredTimes.includes(option)}
                          onChange={(e) => {
                            const times = e.target.checked
                              ? [...formData.preferredTimes, option]
                              : formData.preferredTimes.filter(t => t !== option);
                            setFormData({ ...formData, preferredTimes: times });
                          }}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Comfortable working with diverse groups, including those with limited technical experience? *</label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="comfortableWithDiverse"
                          value={option}
                          checked={formData.comfortableWithDiverse === option}
                          onChange={(e) => setFormData({ ...formData, comfortableWithDiverse: e.target.value })}
                          required
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm">Please confirm you consent for your information to be used for volunteer coordination purposes *</span>
                  </label>
                </div>

                {/* Honeypot field - hidden from users */}
                <div style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    placeholder="Company Name"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading || !formData.consent || formData.interests.length === 0 || formData.certifications.length === 0 || formData.preferredTimes.length === 0}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Join Community"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
