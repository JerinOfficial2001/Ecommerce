import { ARRAY_OPTIONS, OPTIONS } from "@/src/arrays/Array";
import LeftGo from "@/src/component/Icons/LeftGo";
import { updateProducts } from "@/src/controller/User";
import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function EditProducts() {
  const [productImg, setproductImg] = useState("");
  // const singleProducts = useSelector((state) => state.products.singleProduct);

  const windows =
    typeof window !== "undefined" &&
    window.localStorage.getItem("singleProducts");
  const singleProducts = JSON.parse(windows);
  const userDataStorage =
    typeof window !== "undefined" && window.localStorage.getItem("userData");
  const userData = JSON.parse(userDataStorage);
  const [inputDatas, setinputDatas] = useState({
    title: singleProducts.title ? singleProducts.title : "",
    category: singleProducts.category ? singleProducts.category : "",
    price: singleProducts.price ? singleProducts.price : "",
    description: singleProducts.description ? singleProducts.description : "",
    spec: singleProducts.spec ? singleProducts.spec : "",
    array: singleProducts.array ? singleProducts.array : "",
  });
  const router = useRouter();

  const { title, category, price, description, spec, array } = inputDatas;
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    const imgSize = file.size;
    if (imgSize > 50000) {
      toast.error("Image Size should be below 50kb");
      setglower("fileRed");
    } else {
      setglower("");
    }
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setproductImg(reader.result);
      };
    } else {
      setproductImg("");
    }
  };

  const submitHandler = async () => {
    if (
      title !== "" &&
      category !== "" &&
      price !== "" &&
      description !== "" &&
      spec !== "" &&
      array !== ""
    ) {
      const id = singleProducts._id;
      updateProducts(
        id,
        title,
        category,
        price,
        description,
        spec,
        array,
        productImg
      );

      setproductImg("");
      setinputDatas({
        title: "",
        category: "",
        price: "",
        description: "",
        spec: "",
        array: "",
      });
      router.push("/userDetails");
    } else {
      toast.error("All fields are mandatory");
    }
  };
  return (
    <Layout uname={userData?.uname}>
      <div className="flex gap-2 items-center w-[100%] h-[670px] justify-center relative">
        <LeftGo
          onClick={() => {
            router.push("/userDetails");
          }}
        />
        <div className="p-2 h-[100%] w-[48%] flex flex-col gap-2 items-center justify-center">
          <input
            value={title}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, title: e.target.value });
            }}
            className="p-2 rounded-md w-[90%]"
            type="text"
            placeholder="Product name"
          />
          <select
            value={category}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, category: e.target.value });
            }}
            className="p-2 rounded-md w-[90%] bg-white"
            type="select"
            placeholder="category"
          >
            {OPTIONS.map((i) => (
              <option key={i.id} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
          <input
            value={price}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, price: e.target.value });
            }}
            className="p-2 rounded-md w-[90%]"
            type="text"
            placeholder="price"
          />
          <input
            value={description}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, description: e.target.value });
            }}
            className="p-2 rounded-md w-[90%]"
            type="text"
            placeholder="description"
            multiple
          />
          <input
            value={spec}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, spec: e.target.value });
            }}
            className="p-2 rounded-md w-[90%]"
            type="text"
            placeholder="specification"
          />
          <input
            accept="image/"
            onChange={handleProductImageUpload}
            className="p-2 rounded-md w-[90%] bg-white"
            type="file"
            required
          />
          <select
            value={array}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, array: e.target.value });
            }}
            className="p-2 rounded-md w-[90%] bg-white"
            type="select"
            placeholder="array"
          >
            {ARRAY_OPTIONS.map((i) => (
              <option key={i.id} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
          <button
            onClick={submitHandler}
            className="hover:transition hover:text-white hover:bg-[blue] border-black rounded-md border-2 px-5 p-2"
          >
            Update
          </button>
        </div>
        <div className="bg-[lavender] rounded-ld h-[100%] w-[48%] flex gap-2 justify-center items-center">
          {productImg ? (
            <img src={productImg} alt="img" />
          ) : (
            <>
              <p>Image Preview</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
