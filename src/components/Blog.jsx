import { blogs } from "../utils/blogs";
import Navbar from "./Navbar";

function Blog() {
  return (
    <>
      <Navbar />
      <section className="pt-12">
        <div className="min-h-screen bg-gray-50 px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Latest articles, tutorials, and updates from our team
              </p>
            </div>
            {/* Blog Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {blog.date} · {blog.author}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <button className="text-indigo-600 font-medium hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
