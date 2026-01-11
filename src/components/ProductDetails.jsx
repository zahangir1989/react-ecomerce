import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "./Navbar";
import { useParams } from "react-router";
import Footer from "./Footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Product not found");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-20">{error}</p>;
  }

  return (
    <>
      <Navbar />

      <section className="pt-12 mt-11 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />

            {/* Details */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <p className="text-2xl font-semibold text-green-600 mb-6">
                ${product.price}
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
                <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
