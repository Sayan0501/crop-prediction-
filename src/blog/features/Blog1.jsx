import React from "react";

function Blog1() {
    const blogPosts = [
        {
          title: 'First Blog Post',
          date: 'May 24, 2024',
          content: 'This is the preview of the first blog post content.',
        },
        {
          title: 'Second Blog Post',
          date: 'May 23, 2024',
          content: 'This is the preview of the second blog post content.',
        },
      ];
    
      return (
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center my-8">Blog</h1>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} title={post.title} date={post.date} content={post.content} />
            ))}
          </div>
        </div>
      );
    };

export default Blog1;
