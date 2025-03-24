"use client";

import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <div className="text-gray-900">
      {/* Blogs Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Blogs</h1>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-accent"
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Image
                  height={200}
                  width={200}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-slate-800 h-full">
                  <h2 className="text-xl text-gray-100 font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-100 mb-4">{post.excerpt}</p>
                  <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button className="bg-accent hover:bg-accent-hover">
                      Read More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
