import React, { useState } from "react";

export default function PricingSection() {
  const [productCount, setProductCount] = useState(1);

  //   Calculate
  const starterPrice = Math.round(3000 * (productCount / 50));
  const businessPrice = Math.round(6500 * (productCount / 50));
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Starter plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">$ {starterPrice}/mo</p>
          </div>
          {/* Businness */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            Business{" "}
            <p className="text-3xl font-bold mb-6">$ {businessPrice}/mo</p>
          </div>
        </div>
        {/* scroll div */}

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 px-4">
            {productCount} products
          </p>
          {/* stat */}

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                type="range"
                min={"1"}
                max={"50"}
                value={productCount}
                className="flex-1 h-2 bg-amber-50 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>

          {/* end */}

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4">Ready to Get Started</p>
            <button className="bg-amber-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
