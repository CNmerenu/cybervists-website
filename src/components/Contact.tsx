"use client";

import { Mail, Phone, CheckCircle, XCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setModalType('success');
        setModalMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setModalType('error');
        setModalMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setModalType('error');
      setModalMessage('An error occurred. Please try again.');
    }
    
    setLoading(false);
    setShowModal(true);
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@cybervists.org",
      action: "mailto:info@cybervists.org",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 (0) 789 7768419",
      action: "tel:+447897768419",
    },
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-primary-400">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
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
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-primary-400 rounded-lg hover:bg-primary-500 transition-colors duration-300 border-[1px]"
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
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 md:px-8 md:py-4 text-sm md:text-base bg-accent-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {modalType === 'success' ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500" />
                  )}
                  <h3 className="text-lg font-bold text-gray-900">
                    {modalType === 'success' ? 'Success!' : 'Error'}
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
