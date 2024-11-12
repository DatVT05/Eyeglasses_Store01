// PromotionPage.js
import React, { useState } from "react";
import Card from "component/card/card";
import "./PromotionsPage.scss";

const products = [
  {
    id: 1,
    name: "KÍNH KIM LOẠI LILY 6606KOR",
    price: "235.000",
    originalPrice: "470.000",
    image: "path-to-image-1.jpg",
    colors: ["#2B1B18", "#FFFFFF", "#ECECEC"],
    code: "6606KOR",
  },
  {
    id: 2,
    name: "KÍNH KIM LOẠI LILY 77507KOR",
    price: "250.000",
    originalPrice: "500.000",
    image: "path-to-image-2.jpg",
    colors: ["#E8B5B5", "#FFEDED"],
    code: "77507KOR",
  },
];

const PromotionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="promotion-page">
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <Card
            key={product.id}
            image={product.img}
            title={product.name}
            price={product.price}
            colors={product.colors || []}
            features={product.features || []}
            code={product.id.toString()}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => handlePageChange(num + 1)}
            className={currentPage === num + 1 ? "active" : ""}
          >
            {num + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default PromotionPage;
