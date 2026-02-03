import { Post } from "@/src/types";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        {post.mainImage?.asset?.url && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <time className="flex items-center gap-1">
              <span className="w-1 h-1 bg-primary-600 rounded-full"></span>
              {(() => {
                try {
                  const date = new Date(post.publishedAt);
                  return isNaN(date.getTime())
                    ? "Date unavailable"
                    : date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                } catch {
                  return "Date unavailable";
                }
              })()}
            </time>

            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image?.asset?.url && (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <span className="text-xs text-gray-600">
                  {post.author.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
