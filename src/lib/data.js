// src/lib/data.js
export const blogPosts = [
    {
      id: "1",
      title: "My Journey as a Web Developer",
      excerpt: "Sharing my experiences and lessons learned in web development.",
      content:
        "Over the past five years, I’ve been working as a web developer, specializing in frontend technologies like React and Next.js. In this blog, I share my journey, from my first HTML page to building complex applications. I’ve learned the importance of clean code, responsive design, and user experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 20, 2025",
      image: "https://via.placeholder.com/600x400?text=Blog+1",
      likes: 42,
    },
    {
      id: "2",
      title: "Top 5 Tips for Building Responsive Websites",
      excerpt: "Learn how to create websites that look great on any device.",
      content:
        "Responsive design is crucial in today’s multi-device world. In this blog, I share my top 5 tips for building responsive websites, including using Tailwind CSS, media queries, and flexible layouts. These techniques have helped me create seamless user experiences across devices. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "March 15, 2025",
      image: "https://via.placeholder.com/600x400?text=Blog+2",
      likes: 28,
    },
    {
      id: "3",
      title: "Why I Love Open Source Contributions",
      excerpt: "Exploring the benefits of contributing to open source projects.",
      content:
        "Contributing to open source has been a game-changer for my career. In this blog, I discuss why I love open source, how it has helped me grow as a developer, and tips for getting started. It’s a great way to give back to the community and learn new skills. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "March 10, 2025",
      image: "https://via.placeholder.com/600x400?text=Blog+3",
      likes: 15,
    },
  ];
  
  // In-memory comments storage (simulating a database)
  export const comments = {
    "1": [
      {
        id: "c1",
        user: "Alice",
        text: "Inspiring journey! Thanks for sharing.",
        date: "March 21, 2025",
      },
    ],
    "2": [
      {
        id: "c2",
        user: "Bob",
        text: "Great tips! I’ll definitely try these in my next project.",
        date: "March 16, 2025",
      },
    ],
    "3": [],
  };
  
  // In-memory likes storage (simulating a database)
  export const likes = {
    "1": 42,
    "2": 28,
    "3": 15,
  };
  
  // Function to add a comment
  export function addComment(postId, user, text) {
    const newComment = {
      id: `c${Object.values(comments).flat().length + 1}`,
      user,
      text,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
  
    if (!comments[postId]) {
      comments[postId] = [];
    }
    comments[postId].push(newComment);
  }
  
  // Function to increment likes
  export function incrementLikes(postId) {
    likes[postId] = (likes[postId] || 0) + 1;
  }