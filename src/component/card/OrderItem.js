import React from 'react';
import './OrderItem.scss';

const OrderItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="order-item">
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-info">
        <h3>{item.name}</h3>
        <p>{item.price.toLocaleString()} ₫</p>
        <div className="quantity">
          <label>Số lượng</label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
          />
        </div>
      </div>
      <button className="remove-item" onClick={() => onRemove(item.id)}>🗑️</button>
    </div>
  );
};

export default OrderItem;
