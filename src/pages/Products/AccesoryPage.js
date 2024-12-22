import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'component/card/card';
import "./AccesoryPage.scss"

const AccessoryPage = () => {
  const [sortBy, setSortBy] = useState('default');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryId = '82f32e7e-6973-48d3-8bfd-bdd3cfa292f9';
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

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="glasses-page">
      <div className="filter-section">
        <div className="filter">
          <h3>Màu sắc</h3>
          <ul>
            <li>
              <input type="checkbox" /> Cam
            </li>
            <li>
              <input type="checkbox" /> Đen
            </li>
            <li>
              <input type="checkbox" /> Xanh lá
            </li>
            <li>
              <input type="checkbox" /> Nâu
            </li>
            <li>
              <input type="checkbox" /> Đỏ
            </li>
            <li>
              <input type="checkbox" /> Ghi
            </li>
            <li>
              <input type="checkbox" /> Vàng
            </li>
          </ul>
        </div>

        <div className="filter">
          <h3>Chất liệu</h3>
          <ul>
            <li>
              <input type="checkbox" /> Acetate
            </li>
            <li>
              <input type="checkbox" /> Kim loại
            </li>
            <li>
              <input type="checkbox" /> Nhựa
            </li>
            <li>
              <input type="checkbox" /> Nhựa dẻo
            </li>
            <li>
              <input type="checkbox" /> Titan
            </li>
          </ul>
        </div>
      </div>

      <div className="product-section">
        <div className="sort-section">
          <label>Sort By</label>
          <select value={sortBy} onChange={handleSort}>
            <option value="default">Sort By</option>
            <option value="high-to-low">Giá Cao - Thấp</option>
            <option value="low-to-high">Giá Thấp - Cao</option>
            <option value="featured">Nổi bật</option>
          </select>
        </div>

        <div className="product-grid">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoryPage;
