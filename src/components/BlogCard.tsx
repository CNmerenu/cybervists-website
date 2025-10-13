import { Post } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="group h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl cursor-pointer">
        {post.mainImage?.asset?.url && (
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </div>
        )}

        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-6 gap-3 sm:gap-0">
            <time className="text-xs sm:text-sm text-blue-400 font-medium">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>

            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image?.asset?.url && (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-blue-500/50"
                  />
                )}
                <span className="text-xs sm:text-sm text-gray-300">
                  {post.author.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
