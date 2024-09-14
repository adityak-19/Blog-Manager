import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogForm({ handleAddBlog, handleEditBlog, blogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (id !== undefined && blogs.length > 0) {
      const blogIndex = parseInt(id, 10); // Convert id to integer
      const blog = blogs[blogIndex];
      if (blog) {
        setTitle(blog.title);
        setDescription(blog.description);
        setImageUrl(blog.imageUrl);
      }
    }
  }, [id, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && imageUrl) {
      if (id !== undefined) {
        const blogIndex = parseInt(id, 10); // Convert id to integer
        handleEditBlog({ title, description, imageUrl, starred: blogs[blogIndex].starred }, blogIndex);
      } else {
        handleAddBlog({ title, description, imageUrl, starred: false });
      }
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-800 to-teal-700">
      <div className="w-full max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-md border border-gray-300 flex flex-col">
        <h3 className="text-lg font-semibold mb-6 text-center">{id ? 'Edit Blog' : 'Add New Blog'}</h3>
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 shadow-sm"
          />
          <textarea
            placeholder="Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 shadow-sm flex-grow resize-none"
            style={{ minHeight: '200px' }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 shadow-sm"
          />
          <button type="submit" className="w-full bg-orange-500 px-4 py-3 text-white rounded hover:bg-orange-600 transition-all">
            {id ? 'Update Blog' : 'Add Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}



export default BlogForm;
