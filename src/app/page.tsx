import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <section className="w-full md:w-[1440px] min-h-screen">
      <Hero />
      <Partners />
      <Programs />
      <CTA />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
    </section>
  );

  // <main className="min-h-screen bg-gray-900">
  //
  //   <Stats />
  //   <Services />
  //   <About />

  //   {/* Featured Posts */}
  //   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
  //     <div className="max-w-7xl mx-auto">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
  //           Latest Insights
  //         </h2>
  //         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
  //           Stay informed with our latest research, analysis, and insights on cybersecurity and digital rights
  //         </p>
  //       </div>

  //       {posts.length > 0 ? (
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {posts.slice(0, 6).map((post) => (
  //             <BlogCard key={post._id} post={post} />
  //           ))}
  //         </div>
  //       ) : (
  //         <div className="text-center py-12">
  //           <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-blue-500/30 rounded-xl p-12">
  //             <div className="text-6xl mb-4">📝</div>
  //             <h3 className="text-2xl font-bold text-white mb-4">Content Coming Soon</h3>
  //             <p className="text-gray-300">We're preparing insightful articles on cybersecurity and digital activism. Check back soon!</p>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </section>

  //   <CTA />
  // </main>
}
