import { Calendar, User, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogPostClient from "@/src/components/BlogPostClient";
import { getPostBySlug } from "@/src/lib/blogData";
import { notFound } from "next/navigation";
import { Reference } from "@/src/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/src/sanity/lib/client";

const builder = imageUrlBuilder(client);

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => {
      const imageUrl = builder.image(value.asset).width(400).url();
      return (
        <div className="my-4">
          <Image
            src={imageUrl}
            alt={value.alt || "Content image"}
            width={400}
            height={250}
            className="w-1/2 mx-auto rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 mt-2 italic text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="px-4 md:px-16 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="px-4 md:px-16 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author.name}
                </div>
              )}
              <BlogPostClient title={post.title} />
            </div>

            {post.mainImage?.asset?.url && (
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>

          {/* References */}
          {post.references && post.references.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                References
              </h3>
              <ul className="space-y-2">
                {post.references.map((ref: Reference, index: number) => (
                  <li key={index}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {ref.title}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
