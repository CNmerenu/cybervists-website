"use client";

import { siFacebook, siYoutube, siInstagram } from "simple-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    timestamp: Date.now(),
  });
  const [status, setStatus] = useState({
    show: false,
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (formData.phoneNumber) {
      return; // Silently ignore bot submissions
    }
    
    // Timestamp check - if submitted too quickly, it's likely a bot
    const now = Date.now();
    if (now - formStartTime < 3000) {
      return; // Silently ignore submissions under 3 seconds
    }
    
    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          show: true,
          error: false,
          message: "Submitted. Great! We'll get back to you soon.",
        });
        const newTimestamp = Date.now();
        setFormData({ email: "", phoneNumber: "", timestamp: newTimestamp }); // Clear form
        setFormStartTime(newTimestamp);
      } else {
        console.error("Newsletter subscription failed:", response.status);
        setStatus({
          show: true,
          error: true,
          message:
            "There was an issue submitting your email. Please try again later or please send us an email.",
        });
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus({
        show: true,
        error: true,
        message:
          "There was an issue submitting your email. Please try again later or please send us an email.",
      });
    }

    setLoading(false);
    setTimeout(() => {
      // clear Message
      setStatus({
        show: false,
        error: false,
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full border-t-2 border-blue-500/20">
      <footer className="w-full flex bg-gray-900 p-6">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={"/assets/symbol-light.svg"}
                  alt="cybervists symbol"
                  width={50}
                  height={50}
                />

                <div>
                  <h3 className="text-xl font-bold bg-accent-500 bg-clip-text text-transparent">
                    Cybervists
                  </h3>
                  <div className="text-xs text-gray-400 -mt-1">
                    Cyber awareness & Inclusion
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering organizations and the public with cybersecurity
                inclusion, awarenes and advocating for digital literacy in the
                modern world.
              </p>
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

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cybersecurity Training & Awareness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Digital Literacy & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Tech Research & Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Community Empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Coaching/Employment Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScvuIh_KihpjARqJph8xGXS_8bueIdLYadZ7WC5cEdDZwZX5g/viewform"
                    target="_blank"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.eventbrite.co.uk/o/cybervists-113913212541"
                    target="_blank"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-end mb-6">
            <div className="w-full md:w-1/2 h-full md:pl-5">
              <h2 className="text-white mb-3 text-center md:text-left">
                Newsletter Signup
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0"
              >
                <div className="flex-1">
                  <input
                    className="text-black w-full h-[48px] p-3 font-medium text-sm rounded-l-md sm:rounded-r-none rounded-r-md"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {/* Honeypot field - hidden from users */}
                  <div style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-[115px] h-[48px] bg-accent-500 rounded-r-md sm:rounded-l-none rounded-l-md text-white text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
              {status.show && (
                <p
                  className={`text-sm mt-2 text-center md:text-left ${
                    status.error ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Cybervists. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
