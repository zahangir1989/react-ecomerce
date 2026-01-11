import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import axios from "axios";

function Product() {
  //   const products = [
  //     {
  //       id: 1,
  //       name: "Wireless Headphones",
  //       price: 149.99,
  //       description: "Noise cancelling wireless headphones",
  //       image: "https://images.unsplash.com/photo-1518441983572-dc3c6d5f9f4a",
  //     },
  //     {
  //       id: 2,
  //       name: "Smart Watch",
  //       price: 99.99,
  //       description: "Fitness tracking smart watch",
  //       image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  //     },
  //     {
  //       id: 3,
  //       name: "Bluetooth Speaker",
  //       price: 79.99,
  //       description: "Portable speaker with deep bass",
  //       image: "https://via.placeholder.com/400",
  //     },
  //     {
  //       id: 4,
  //       name: "Gaming Mouse",
  //       price: 39.99,
  //       description: "High precision RGB gaming mouse",
  //       image: "https://via.placeholder.com/400",
  //     },
  //   ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <section className="pt-12 bg-gray-50 min-h-screen mt-11">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-600">Loading products...</p>
          )}

          {/* Error */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
