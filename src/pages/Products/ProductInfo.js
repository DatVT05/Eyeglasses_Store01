import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.scss"; 

const ProductInfo = () => {
    const { productId } = useParams();
    const [selectedColor, setSelectedColor] = useState("Hồng");
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: productId,
        name: "KÍNH KIM LOẠI LILY 86314KOR",
        code: "C-KLT-VT-86314KOR",
        price: 235000,
        originalPrice: 470000,
        description: `* Thương Hiệu: LILY
        * Mã sản phẩm: C-KLT-VT-86314KOR
        * Chất liệu: Kim loại titan
        * Xuất xứ: Trung Quốc`,
        images: [
            "/image/image-1.jpg",
            "/image/image-2.jpg",
            "/image/image-3.jpg",
        ],
        colors: ["Hồng", "Trắng", "Đen", "Đen trắng"]
    };

    const handleColorSelect = (color) => setSelectedColor(color);
    const handleQuantityChange = (type) => {
        if (type === "increase") setQuantity(quantity + 1);
        if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="product-info">
            <div className="product-info-container">
                {/* Product Images */}
                <div className="product-images">
                    <img src={product.images[0]} alt={product.name} className="main-image" />
                    <div className="thumbnail-images">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p className="product-code">Mã sản phẩm: {product.code}</p>
                    <p className="product-price">
                        <span className="discount-price">{product.price.toLocaleString()} ₫</span>
                        <span className="original-price">{product.originalPrice.toLocaleString()} ₫</span>
                    </p>
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>

                    {/* Color Options */}
                    <div className="product-options">
                        <h3>Màu sắc:</h3>
                        <div className="colors">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={color === selectedColor ? "selected" : ""}
                                    onClick={() => handleColorSelect(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>

                        {/* Quantity Control */}
                        <div className="quantity-control">
                            <h3>Số lượng:</h3>
                            <button onClick={() => handleQuantityChange("decrease")}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange("increase")}>+</button>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button className="add-to-cart">THÊM VÀO GIỎ HÀNG</button>
                        <button className="buy-now">MUA NGAY</button>
                    </div>
                    <p className="exclusive-offer">ĐẶC QUYỀN MUA SẢN PHẨM TẠI LILY</p>
                </div>
            </div>

            {/* Size Information */}
            <div className="product-size">
                <h2>Kiểu kính hợp gương mặt</h2>
                <div className="size-images">
                    <img src="/image/size.png"/>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
