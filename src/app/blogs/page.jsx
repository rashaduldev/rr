// src/app/blogs/page.js
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="text-gray-900">

      {/* Blogs Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                height={200}
                width={200}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}