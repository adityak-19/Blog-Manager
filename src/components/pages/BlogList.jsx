import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

function BlogList({ blogs, handleStarToggle, handleDeleteBlog }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {blogs.length === 0 ? (
        <p className="text-gray-800 text-center mt-10">
          No blogs available.{' '}
          <Link to="/blogs/new" className="text-blue-500 underline">
            Add a blog
          </Link>
          .
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white/90 p-4 rounded-lg shadow-md backdrop-blur-md border border-gray-300 text-gray-800 transition-transform hover:scale-105">
              <a href={blog.imageUrl} target="_blank" rel="noopener noreferrer" className="block mb-4">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </a>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold truncate flex-grow mr-2">{blog.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStarToggle(index);
                  }}
                  className={`text-2xl flex-shrink-0 ${blog.starred ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  {blog.starred ? <FaStar /> : <FaRegStar />}
                </button>
              </div>

              <p className="text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {blog.description.length > 100
                  ? blog.description.substring(0, 100) + '...'
                  : blog.description}
              </p>

              <div className="flex gap-2 mt-4">
                <Link to={`/blogs/${index}`} className="bg-blue-500 hover:bg-blue-600 transition-all px-4 py-2 rounded-md text-white flex-1 text-center">
                  Open
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteBlog(index);
                  }}
                  className="bg-red-500 hover:bg-red-600 transition-all px-4 py-2 rounded-md text-white flex-1 text-center"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;