import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.scss"; // Import the corresponding SCSS file

const ProductInfo = () => {
    const { productId } = useParams(); // To get the product ID from the URL
    const [selectedColor, setSelectedColor] = useState("Đen vàng");
    const [quantity, setQuantity] = useState(1);

    // Sample product data (you can replace this with API call)
    const product = {
        id: productId,
        name: "KÍNH NHỰA LILY 87135",
        code: "C-ND-TT-87135",
        price: 380000,
        description: `* Thương Hiệu: LILY
        * Mã sản phẩm: 87135
        * Thông tin kỹ thuật số: 50-18-137
        * Chất liệu: Nhựa Dẻo
        * Giá sản phẩm: 380000 VND
        * Xuất xứ: Trung Quốc
        * CHỊU TRÁCH NHIỆM SP: CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ LILY GROUP VIỆT NAM
        * CẢNH BÁO: BẢO QUẢN TRONG HỘP KÍNH
        * HDSD: DÙNG ĐỂ ĐEO MẮT, TRÁNH NHIỆT ĐỘ CAO & VA CHẠM MẠNH
        * MH: 466553`,
        images: [
            "path-to-image-1.jpg",
            "path-to-image-2.jpg",
            "path-to-image-3.jpg"
        ],
        colors: ["Đen vàng", "Nâu đậm", "Hồng Đục"]
    };

    const handleColorSelect = (color) => setSelectedColor(color);
    const handleQuantityChange = (type) => {
        if (type === "increase") setQuantity(quantity + 1);
        if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="product-info">
            <div className="product-info-container">
                <div className="product-images">
                    <img src={product.images[0]} alt={product.name} className="main-image" />
                    <div className="thumbnail-images">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
                        ))}
                    </div>
                </div>
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p className="product-code">Mã sản phẩm: {product.code}</p>
                    <p className="product-price">{product.price.toLocaleString()} ₫</p>
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
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
        </div>
    );
};

export default ProductInfo;
