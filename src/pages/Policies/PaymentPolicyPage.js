import React from "react";
import "./PaymentPolicyPage.scss"; 

const PaymentPolicyPage = () => {
    return (
        <div className="payment-policy-page">
            <div className="policy-content">
                <h1>Chính sách thanh toán</h1>
                <ul>
                    <li>Giao hàng tận nơi và được kiểm tra hàng trước khi thanh toán.</li>
                    <li>Khách hàng có thanh toán chuyển khoản hoặc thanh toán sau khi nhận hàng.</li>
                    <li>Với những đơn cắt cận, quý khách vui lòng chuyển khoản cọc trước 50% – 100% tổng giá trị đơn hàng.</li>
                </ul>
            </div>
        </div>
    );
};

export default PaymentPolicyPage;
