import React from "react";

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
            >
              {/* Blog Image */}
              <div className="h-48 bg-gray-200 w-full"></div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Blog Title {index + 1}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brief
                  description of the blog content.
                </p>
                <button className="mt-auto text-primary font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
