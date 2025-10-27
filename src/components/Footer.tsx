"use client";

import { siFacebook, siYoutube, siInstagram } from "simple-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [status, setStatus] = useState({
    show: false,
    error: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/consultationRequest", {
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
      setFormData({ email: "" }); // Clear form
    } else {
      setStatus({
        show: true,
        error: true,
        message:
          "There was an issue submitting your email. Please try again later or please send us an email.",
      });
    }
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
    <section className="w-full md:w-[1440px] border-t-2 border-blue-500/20">
      <footer className="w-full flex bg-gray-900 p-6">
        <div className="w-full">
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
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-white" />
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
          <div className="w-full flex flex-col items-end mb-6">
            <div className="w-full md:w-1/2 h-full md:pl-5">
              <h2 className="text-white">Newsletter Signup</h2>
              <form
                onSubmit={handleSubmit}
                className="flex w-full md: md:w-[643px]"
              >
                <div className="w-full h-[48px]">
                  <input
                    className=" text-black w-full h-full flex justify-start items-start  p-2 font-medium text-sm"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-[115px] h-[48px] bg-accent-500 rounded-r-md text-white text-base"
                >
                  Submit
                </button>
              </form>
              {status.show && (
                <p
                  className={`text-sm ${
                    status.error ? "text-red-700" : "text-green-700"
                  } `}
                >
                  {status.message}
                </p>
              )}{" "}
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
