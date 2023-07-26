import axios from "axios";
import React, { useState } from "react";
import useRazorpay from "react-razorpay";

export default function PaymentGateway() {
  const [Razorpay] = useRazorpay();
  const [book, setBook] = useState({
    name: "The Fault In Our Stars",
    author: "John Green",
    img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    price: 250,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_j2APEmG1W3vzdr",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:4000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:4000/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <div className="w-[250px] rounded-md bg-[gray] shadow-md">
        <img
          src={book.img}
          alt="book_img"
          className="w-[100%] h-[300px] rounded-md "
        />
        <p className="text-[20px] font-bold m-[5px] align-center">
          {book.name}
        </p>
        <p className="text-[16px] font-[500] m-[5px] align-center">
          By {book.author}
        </p>
        <p className="text-[#21a700]">
          Price : <span>&#x20B9; {book.price}</span>
        </p>
        <button
          onClick={handlePayment}
          className="w-[100%] h-[50px] text-[12px] font-bold cursor-pointer bg-[#f4d072] mt-[10px]"
        >
          buy now
        </button>
      </div>
    </div>
  );
}
