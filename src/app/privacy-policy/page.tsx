export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-8">
          Privacy Policy
        </h1>

        <div className="text-gray-300 space-y-6">
          <p className="text-lg">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, subscribe to our newsletter, or contact us
              for support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, communicate with you, and protect our users
              and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@cybervists.org"
                className="text-blue-400 hover:text-blue-300"
              >
                privacy@cybervists.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
