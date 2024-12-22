import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'component/card/card';
import './LensPage.scss';

const LensPage = () => {
  const [sortBy, setSortBy] = useState('default');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryId = '69a098a4-b270-48ab-a9ae-b367060eb625';
        const res = await fetch(
          `http://localhost:3000/product/getAllProduct?categoryId=${categoryId}`,
        );
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products:', res.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    let sortedProducts = [...products];
    if (e.target.value === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (e.target.value === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="lens-page">
      <div className="filter-section">
        <div className="filter">
          <h3>Thương hiệu</h3>
          <ul>
            <li>
              <input type="checkbox" /> Bevis
            </li>
            <li>
              <input type="checkbox" /> Chemi
            </li>
            <li>
              <input type="checkbox" /> Crizal Rock
            </li>
            <li>
              <input type="checkbox" /> Essilor
            </li>
            <li>
              <input type="checkbox" /> Hoya
            </li>
            <li>
              <input type="checkbox" /> Sky Lens
            </li>
            <li>
              <input type="checkbox" /> Thailand
            </li>
          </ul>
        </div>

        <div className="filter">
          <h3>Tính năng</h3>
          <ul>
            <li>
              <input type="checkbox" /> Đổi màu
            </li>
            <li>
              <input type="checkbox" /> Lọc ánh sáng xanh
            </li>
            <li>
              <input type="checkbox" /> Râm cận
            </li>
            <li>
              <input type="checkbox" /> Siêu mỏng
            </li>
          </ul>
        </div>
      </div>

      <div className="product-section">
        <div className="sort-section">
          <label>Sort By:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="default">Sort By</option>
            <option value="high-to-low">Giá Cao - Thấp</option>
            <option value="low-to-high">Giá Thấp - Cao</option>
            <option value="featured">Nổi bật</option>
          </select>
        </div>

        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
              <Card
                image={product.img}
                title={product.name}
                price={product.price}
                colors={product.colors || []}
                features={product.features || []}
                code={product.id.toString()}
              />
            </Link>
            ))
          ) : (
            <p>No products found containing "Tròng kính".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LensPage;
