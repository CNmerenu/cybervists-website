export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              Cybersecurity Activism for the Digital Age
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We believe that cybersecurity is not just about protecting data—it&apos;s about 
                defending fundamental human rights in the digital realm. Our mission is to 
                empower organizations and individuals with the knowledge and tools needed 
                to maintain their digital sovereignty.
              </p>
              <p>
                Through cutting-edge security solutions, privacy advocacy, and educational 
                initiatives, we&apos;re building a more secure and equitable digital future for all.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400">Organizations Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">10K+</div>
                <div className="text-gray-400">Threats Mitigated</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🔐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Privacy First</h3>
                    <p className="text-gray-400">Zero-knowledge architecture</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Rapid Response</h3>
                    <p className="text-gray-400">24/7 incident management</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Global Reach</h3>
                    <p className="text-gray-400">Worldwide security coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}