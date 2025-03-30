import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ blog }) => {
  const getContentPreview = (html) => {
    // Create a temporary div element
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Get text content (strips HTML tags)
    const text = tempDiv.textContent || tempDiv.innerText || '';
    
    // Return first 100 characters
    return text.length > 100 ? `${text.substring(0, 100)}...` : text;
  };
  

  return (
    <div className="blog-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl border transition-shadow duration-300">
      {/* Image */}
      <div className="blog-card__image h-48 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        
        {/* Author and Date */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">{blog.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={blog.createdAt}>
            {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
          </time>
        </div>
        
        {/* Content Preview */}
        <p className="text-gray-600 mb-4">
        {getContentPreview(blog.content)}
          
          </p>
        
        {/* Read More Link */}
        <Link 
          to={`/blog-detail/${blog._id}`}
          className="inline-flex items-center text-[#a9106b] font-medium hover:text-[#3b0f2a] transition-colors"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;