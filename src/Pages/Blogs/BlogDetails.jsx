import { useLoaderData, useNavigation } from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const blog = useLoaderData();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  // This ensures skeleton shows for at least 500ms even if data loads quickly
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Show skeleton loading when data is being loaded
  if (navigation.state === "loading" || isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-3 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Blog post not found
        </h1>
        <p className="mt-2 text-gray-600">
          The requested blog post could not be loaded.
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {blog.title}
      </h1>

      {/* Author and Date */}
      <div className="flex items-center mb-8">
        <div>
          <p className="font-medium text-gray-900">{blog.author.name}</p>
          <p className="text-gray-500 text-sm">
            {format(new Date(blog.createdAt), "MMMM d, yyyy")}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Blog Content */}
      <div
        className="prose max-w-none prose-lg text-gray-700 prose-headings:text-gray-900 
                  prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Author Card at the bottom */}
      <div className="mt-12 bg-gray-100 p-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900">
            Written by {blog.author}
          </h3>
          <p className="text-gray-600 mt-1">
            Web developer and tech enthusiast sharing insights about modern web
            technologies.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
