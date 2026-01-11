import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
     <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      </Link>

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm my-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>

        <Link
          to={`/products/${product._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;