import { productsCreate, productsFetch } from "@/src/controller/User";
import CardContainer from "./CardContainer";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ARRAY_OPTIONS, OPTIONS } from "@/src/arrays/Array";
import { classNames } from "@/src/utils/Classname";

export default function AddProductsContainer() {
     const [productImg, setproductImg] = useState("");
     const [glower, setglower] = useState("");
     const [inputDatas, setinputDatas] = useState({
       title: "",
       category: "",
       price: "",
       description: "",
       spec: "",
       array: "",
     });
     const dispatch = useDispatch();
     const router = useRouter();

     const { title, category, price, description, spec, array } = inputDatas;
     const handleProductImageUpload = (e) => {
       const file = e.target.files[0];
       const imgSize = file?.size;
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
         array !== "" &&
         productImg !== ""
       ) {
         const sendData = await dispatch(
           productsCreate({
             title,
             category,
             price,
             description,
             spec,
             array,
             image: productImg,
           })
         );
         sendData ? router.push("/admin") : null;
         await dispatch(productsFetch());
         sendData ? setproductImg("") : null;
         sendData
           ? setinputDatas({
               title: "",
               category: "",
               price: "",
               description: "",
               spec: "",
               array: "",
             })
           : null;
       } else {
         toast.error("All fields are mandatory");
       }
     };
  return (
    <CardContainer name={"ADD PRODUCTS"}>
      <div className=" w-[100%] h-[245px] flex items-center gap-2">
        <div className=" w-[60%] h-[100%] flex-col flex  gap-2">
          <input
            value={title}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, title: e.target.value });
            }}
            className="p-2 rounded-md w-[100%]"
            type="text"
            placeholder="Product name"
          />
          <select
            value={category}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, category: e.target.value });
            }}
            className="p-2 rounded-md w-[100%] bg-white"
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
            className="p-2 rounded-md w-[100%]"
            type="text"
            placeholder="price"
          />
          <input
            value={spec}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, spec: e.target.value });
            }}
            className="p-2 rounded-md w-[100%]"
            type="text"
            placeholder="specification"
          />
        </div>

        <div className="pb-2 w-[40%] h-[100%] flex-col flex items-center gap-2">
          <div className="bg-[#62fc9098] p-1 w-[100%] h-[80%] rounded-md ">
            {productImg ? (
              <img
                className="bg-[gray] w-[100%] h-[100%] rounded-md"
                src={productImg}
                alt="img"
              />
            ) : (
              <>
                <Image
                  src={require("../../assets/empty.jpg")}
                  alt="loading..."
                  className="h-[100%] w-[100%] rounded-md"
                />
              </>
            )}
          </div>
          <input
            accept="image/"
            onChange={handleProductImageUpload}
            className={classNames(
              glower === "fileRed" ? "border-2 border-[red]" : null,
              "rounded-md w-[100%] bg-white "
            )}
            type="file"
            required
          />
        </div>
      </div>
      <div className="w-[100%] flex-col flex gap-2 items-center">
        <textarea
          value={description}
          onChange={(e) => {
            setinputDatas({ ...inputDatas, description: e.target.value });
          }}
          className="p-2 rounded-md w-[100%] h-[150px]"
          type="text"
          placeholder="description"
        
        />
        <select
          value={array}
          onChange={(e) => {
            setinputDatas({ ...inputDatas, array: e.target.value });
          }}
          className="p-2 rounded-md w-[100%] bg-white"
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
          className="hover:transition hover:text-white hover:bg-[#3fa845d7] border-black rounded-md border-2 w-[30%] p-2 "
        >
          Submit
        </button>
      </div>
    </CardContainer>
  );
}
