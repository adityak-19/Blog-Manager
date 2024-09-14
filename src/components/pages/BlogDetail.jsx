import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function BlogDetail({ blogs, handleDeleteBlog }) {
  const { id } = useParams();
  const blog = blogs[id];
  const navigate = useNavigate();

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  const handleDelete = () => {
    handleDeleteBlog(id);
    navigate('/');
  };

  return (
    <div className="w-full px-4 md:px-20 mt-10">
      <div className="bg-white p-6 md:p-8 rounded-md shadow-lg">
        {/* Blog Title */}
        <h2 className="text-2xl md:text-3xl font-bold">{blog.title}</h2>

        {/* Blog Description rendered as HTML */}
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* Edit and Delete Buttons */}
        <div className="flex gap-2 md:gap-4 mt-6 flex-col md:flex-row">
          <Link
            to={`/blogs/edit/${id}`}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white mb-2 md:mb-0"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}


export default BlogDetail;
