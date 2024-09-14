import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/pages/BlogList';
import BlogForm from './components/pages/BlogForm';
import BlogDetail from './components/pages/BlogDetail';

function App() {
  const [blogs, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const handleEditBlog = (updatedBlog, index) => {
    setBlogs(blogs.map((blog, blogIndex) => (blogIndex === index ? updatedBlog : blog)));
  };

  const handleDeleteBlog = (index) => {
    setBlogs(blogs.filter((_, blogIndex) => blogIndex !== index));
  };

  const handleStarToggle = (index) => {
    setBlogs(blogs.map((blog, blogIndex) => {
      if (blogIndex === index) {
        return { ...blog, starred: !blog.starred };
      }
      return blog;
    }));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-500">
        <Navbar blogs={blogs} />
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} handleDeleteBlog={handleDeleteBlog} handleStarToggle={handleStarToggle} />} />
          <Route path="/blogs/:id" element={<BlogDetail blogs={blogs} handleDeleteBlog={handleDeleteBlog} />} />
          <Route path="/blogs/new" element={<BlogForm handleAddBlog={handleAddBlog} />} />
          <Route path="/blogs/edit/:id" element={<BlogForm blogs={blogs} handleEditBlog={handleEditBlog} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
