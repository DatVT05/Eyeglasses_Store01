import React from "react";
import './CommentPage.scss';

const comments = [
  {
    id: 1,
    image: "path-to-image-1.jpg", 
    productName: "KÍNH NHỰA LILY 2121",
    comment: "Sản phẩm tốt, mọi người nên mua nha. Shop nhận tin vô cùng tận tình và siêu dễ thương.",
    date: "12/10/2024",
  },
  {
    id: 2,
    image: "path-to-image-2.jpg", 
    productName: "KÍNH NHỰA LILY 280278",
    comment: "Eo ơi xinh cực luôn ý, giao hàng nhanh chuẩn đẹp cực, rất đáng tiền luôn ạ.",
    date: "12/10/2024",
  },
  {
    id: 3,
    image: "path-to-image-3.jpg", 
    productName: "KÍNH KIM LOẠI LILY 15202",
    comment: "Kính siêu xinh luôn, nhận hàng ứng hết sức đúng màu thíchhhhhh.",
    date: "12/10/2024",
  },
  {
    id: 4,
    image: "path-to-image-4.jpg", 
    productName: "NO BRAND 5029",
    comment: "Mắt kính nhẹ xinh xắn đáng yêuuuuuu cảm ơn shop nhìu nhìu nhaaaa.",
    date: "12/10/2024",
  },
];

const CommentPage = () => {
  return (
    <div className="comments-section">
      {comments.map((item) => (
        <div key={item.id} className="comment-card">
          <img src={item.image} alt={item.productName} className="comment-image" />
          <h3>{item.productName}</h3>
          <p>{item.comment}</p>
          <span className="comment-date">{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default CommentPage;
