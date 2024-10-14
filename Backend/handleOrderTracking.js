import axios from 'axios';

const handleOrderTracking = async (e) => {
  e.preventDefault();

  if (orderCode === "" || email === "") {
    setError("Vui lòng điền đầy đủ thông tin");
    return;
  }

  try {
    // Send a request to the backend
    const response = await axios.post('http://localhost:5000/api/order-track', { orderCode, email });
    setOrderDetails(response.data);
    setError("");
  } catch (error) {
    setError("Không tìm thấy thông tin đơn hàng");
  }
};
