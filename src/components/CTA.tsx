import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-800 border border-blue-500/30 rounded-2xl p-12 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Ready to Secure Your Digital Future?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of organizations that trust us to protect their digital assets 
              and defend their right to privacy in the digital age.
            </p>
            
            <div className="flex justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}