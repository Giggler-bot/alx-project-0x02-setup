import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (data: Post) => {
    setPosts([...posts, data]);
  };

  return (
    <>
    <Header />
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

    <button
      onClick={() => setShowModal(true)}
      className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      Add Post
    </button>

    {showModal && (
      <PostModal
        onSubmit={handleAddPost}
        onClose={() => setShowModal(false)}
      />
    )}

    <div className="space-y-4">
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  </div>

    </>
   
)}
