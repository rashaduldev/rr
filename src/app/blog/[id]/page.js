// src/app/blog/[id]/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogPosts, comments, addComment, likes, incrementLikes } from "@/lib/data";

export default function BlogPost({ params }) {
  const router = useRouter();
  const post = blogPosts.find((p) => p.id === params.id);

  // State for comment form and likes
  const [user, setUser] = useState("");
  const [commentText, setCommentText] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes[params.id] || 0);

  if (!post) {
    return <div className="min-h-screen text-gray-100 p-8">Post not found</div>;
  }

  const postComments = comments[post.id] || [];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (user.trim() && commentText.trim()) {
      addComment(post.id, user, commentText);
      setUser("");
      setCommentText("");
      router.refresh();
    }
  };

  const handleLike = () => {
    if (!liked) {
      incrementLikes(post.id);
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 container mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold ml-10 text-gray-200">{post.title}</h1>
      {/* Blog Post Content */}
      <div className="px-4 sm:px-8 py-16">
        <Image
        height={200}
        width={200}
          src={post.image}
          alt={post.title}
          className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
        />
        <p className="text-gray-300 mb-4">{post.date}</p>
        <p className="text-gray-400 leading-relaxed mb-8">{post.content}</p>

        {/* Like and Share Buttons */}
        <div className="flex items-center space-x-4 mb-12">
          <Button
            onClick={handleLike}
            className={`flex items-center space-x-2 ${liked ? "bg-accent hover:bg-accent-hover" : "bg-gray-200 hover:bg-gray-300 text-gray-900"}`}
          >
            <Heart className={liked ? "fill-current text-white" : "text-gray-900"} />
            <span>{likeCount} Likes</span>
          </Button>
          <Button
            onClick={handleShare}
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-900"
          >
            <Share2 />
            <span>Share</span>
          </Button>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl text-gray-300 font-semibold mb-4">Comments</h2>
          {postComments.length > 0 ? (
            <div className="space-y-4">
              {postComments.map((comment) => (
                <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-600 text-sm">
                    • {comment.date}
                  </p>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Comment Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Add a Comment</h2>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <Input
              placeholder="Your name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="text-white"
            />
            <Textarea
              placeholder="Your comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="text-white"
            />
            <Button type="submit" className="bg-accent hover:bg-accent-hover">
              Submit Comment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}