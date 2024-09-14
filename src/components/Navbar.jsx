import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar, FaBlog } from 'react-icons/fa'; // Importing icons
import { FaRegNoteSticky } from "react-icons/fa6";


function Navbar({ blogs }) {
  const starredCount = blogs.filter(blog => blog.starred).length;

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold mb-4 sm:mb-0">🌟 Blog Manager</Link>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
            <FaRegNoteSticky className='text-yellow-400' /> {/* Blog icon */}
              <h4 className="text-sm sm:text-base flex items-center gap-1">
                Blogs: 
                <span className="bg-yellow-50 text-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                  {blogs.length}
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <FaRegStar className="text-yellow-300" /> {/* Starred icon */}
              <h4 className="text-sm sm:text-base flex items-center gap-1">
                Starred: 
                <span className="bg-yellow-50 text-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                  {starredCount}
                </span>
              </h4>
            </div>
          </div>
          <Link 
            to="/blogs/new" 
            className="bg-blue-600 hover:bg-blue-700 transition-all px-4 py-2 rounded-md text-white text-sm sm:text-base whitespace-nowrap"
          >
            Add New Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
