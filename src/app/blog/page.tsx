"use client";

import { Calendar, User, ArrowRight, X, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setToastMessage("Successfully subscribed to our newsletter!");
      setEmail("");
      setShowModal(false);
    } catch {
      setIsSuccess(false);
      setToastMessage("Failed to subscribe. Please try again.");
    }
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  // Sample blog posts for demonstration
  const posts = [
    {
      _id: "1",
      title: "Essential Cybersecurity Practices for Small Businesses",
      slug: { current: "cybersecurity-practices-small-business" },
      excerpt: "Learn the fundamental cybersecurity measures every small business should implement to protect against common threats and data breaches.",
      publishedAt: "2024-12-15",
      mainImage: {
        asset: { url: "/assets/blog/cybersecurity-business.jpg" },
        alt: "Cybersecurity for small business"
      },
      author: { name: "Cybervists Team" }
    },
    {
      _id: "2",
      title: "Password Security: Beyond the Basics",
      slug: { current: "password-security-beyond-basics" },
      excerpt: "Discover advanced password security strategies including multi-factor authentication, password managers, and creating unbreakable passwords.",
      publishedAt: "2024-12-10",
      mainImage: {
        asset: { url: "/assets/blog/password-security.jpg" },
        alt: "Password security concepts"
      },
      author: { name: "Cybervists Team" }
    },
    {
      _id: "3",
      title: "Phishing Attacks: How to Recognize and Avoid Them",
      slug: { current: "phishing-attacks-recognition-prevention" },
      excerpt: "Stay safe from phishing scams with our comprehensive guide on identifying suspicious emails, links, and social engineering tactics.",
      publishedAt: "2024-12-05",
      mainImage: {
        asset: { url: "/assets/blog/phishing-prevention.jpg" },
        alt: "Phishing attack prevention"
      },
      author: { name: "Cybervists Team" }
    },
    {
      _id: "4",
      title: "Digital Privacy in the Modern Age",
      slug: { current: "digital-privacy-modern-age" },
      excerpt: "Understand your digital footprint and learn practical steps to protect your personal information online in today's connected world.",
      publishedAt: "2024-11-28",
      mainImage: {
        asset: { url: "/assets/blog/digital-privacy.jpg" },
        alt: "Digital privacy protection"
      },
      author: { name: "Cybervists Team" }
    },
    {
      _id: "5",
      title: "Secure Remote Work: Best Practices for Teams",
      slug: { current: "secure-remote-work-best-practices" },
      excerpt: "Essential security guidelines for remote teams including VPN usage, secure communication tools, and home network protection.",
      publishedAt: "2024-11-20",
      mainImage: {
        asset: { url: "/assets/blog/remote-work-security.jpg" },
        alt: "Remote work security"
      },
      author: { name: "Cybervists Team" }
    },
    {
      _id: "6",
      title: "Social Media Security: Protecting Your Online Presence",
      slug: { current: "social-media-security-protection" },
      excerpt: "Learn how to secure your social media accounts, manage privacy settings, and avoid common social media security pitfalls.",
      publishedAt: "2024-11-15",
      mainImage: {
        asset: { url: "/assets/blog/social-media-security.jpg" },
        alt: "Social media security"
      },
      author: { name: "Cybervists Team" }
    }
  ];

  return (
    <main className="w-full md:w-[1440px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
            Cybersecurity Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Stay informed with the latest cybersecurity trends, best practices, and community insights 
            to keep yourself and your organization secure in the digital world.
          </p>
          <div className="text-sm text-gray-500">
            {posts.length} {posts.length === 1 ? "article" : "articles"} available
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {posts.length > 0 && (
        <section className="py-16 bg-gray-50 px-4 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Link href={`/blog/${posts[0].slug.current}`}>
              <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <Image
                      src={posts[0].mainImage?.asset?.url || "/assets/blog/default.jpg"}
                      alt={posts[0].mainImage?.alt || posts[0].title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {posts[0].title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(posts[0].publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {posts[0].author?.name}
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.mainImage?.asset?.url || "/assets/blog/default.jpg"}
                      alt={post.mainImage?.alt || post.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author?.name}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest cybersecurity insights and community updates.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Newsletter Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Subscribe to Newsletter
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {toastMessage}
        </div>
      )}
    </main>
  );
}
