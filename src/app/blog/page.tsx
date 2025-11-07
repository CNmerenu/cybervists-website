"use client";

import { Calendar, User, ArrowRight, X, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { Post } from "@/types";
import { getAllPosts, getFeaturedPosts } from "@/lib/blogData";

export default function BlogPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const [allPosts, featured] = await Promise.all([
          getAllPosts(),
          getFeaturedPosts(1),
        ]);
        setPosts(allPosts || []);
        setFeaturedPost(featured && featured.length > 0 ? featured[0] : null);
        setDisplayedPosts((allPosts || []).slice(0, POSTS_PER_PAGE));
        setShowLoadMore((allPosts || []).length > POSTS_PER_PAGE);
      } catch (error) {
        console.error("Failed to load posts:", error);
        setPosts([]);
        setFeaturedPost(null);
        setDisplayedPosts([]);
        setShowLoadMore(false);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Honeypot check - if filled, it's likely a bot
    if (firstName) {
      return; // Silently ignore bot submissions
    }
    
    // Timestamp check - if submitted too quickly, it's likely a bot
    const now = Date.now();
    if (now - formStartTime < 3000) {
      return; // Silently ignore submissions under 3 seconds
    }
    
    setSubmitLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, timestamp: formStartTime }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setToastMessage("Successfully subscribed to our newsletter!");
        setEmail("");
        setFirstName("");
        setFormStartTime(0);
        setShowModal(false);
      } else {
        setIsSuccess(false);
        setToastMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setIsSuccess(false);
      setToastMessage("Failed to subscribe. Please try again.");
    }

    setSubmitLoading(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  const loadMorePosts = () => {
    const currentLength = displayedPosts.length;
    const nextPosts = posts.slice(
      currentLength,
      currentLength + POSTS_PER_PAGE
    );
    const newDisplayedPosts = [...displayedPosts, ...nextPosts];
    setDisplayedPosts(newDisplayedPosts);
    setShowLoadMore(newDisplayedPosts.length < posts.length);
  };

  if (loading) {
    return (
      <main className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Diaries
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Real stories, practical tips, and community insights to help you
            stay ahead and protect your digital world.
          </p>
          <div className="text-sm text-gray-500">
            {posts.length} {posts.length === 1 ? "article" : "articles"}{" "}
            available
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-gray-50 px-4 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              Featured Article
            </h2>
            <Link href={`/blog/${featuredPost.slug.current}`}>
              <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <Image
                      src={
                        featuredPost.mainImage?.asset?.url ||
                        "/assets/blog/default.jpg"
                      }
                      alt={featuredPost.mainImage?.alt || featuredPost.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author?.name}
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          {showLoadMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMorePosts}
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest digital insights and
            community updates.
          </p>
          <button
            onClick={() => {
      const now = Date.now();
      setFormStartTime(now);
      setShowModal(true);
    }}
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
              
              {/* Honeypot field - hidden from users */}
              <div style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  placeholder="First Name"
                />
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
                  disabled={submitLoading}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
            isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {toastMessage}
        </div>
      )}
    </main>
  );
}
