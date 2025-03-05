import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data.slice(0, 50)); // First 50 Posts
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Posts List with Pagination</h1>

      {loading && <p className="text-blue-500 text-lg">Loading...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      <ul className="w-2/3 bg-white shadow-lg rounded-lg p-4">
        {currentPosts.map((post) => (
          <li
            key={post.id}
            className="p-3 mb-2 border-b border-gray-300 hover:bg-gray-200 rounded-md transition"
          >
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div className="flex mt-6 space-x-2">
        {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 rounded-lg transition ${
              currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            } hover:bg-blue-700`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
