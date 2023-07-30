import TestUpdate from "@/src/component/TestUpdate";
import { url } from "@/src/redux/api";
import { getImg, getimgByID } from "@/src/redux/productsSlices";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function test() {
  const singleImg = useSelector((state) => state.products.singleImg);
  console.log("img", singleImg);
  const dispatch = useDispatch();
  const [productImg, setproductImg] = useState("");
  const [myArray, setmyArray] = useState([]);
  const [clicky, setclicky] = useState("");
  const [name, setname] = useState("");
  const createImage = async (productImg) => {
    try {
      await fetch("http://localhost:4000/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Contol-Allow-Origin": "*",
        },
        body: JSON.stringify({
          image: productImg,
          name,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            toast.success("added");
            setproductImg("");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getImage = async () => {
    try {
      await fetch("http://localhost:4000/api/image", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Contol-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setmyArray(data.data);
          dispatch(getImg(data.data));
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImage();
  }, []);
  const deleteImage = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/image/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Contol-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "deleted") {
            toast.success("Deleted");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const transformFile = (file) => {
    const reader = new FileReader(file);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setproductImg(reader.result);
      };
    } else {
      setproductImg("");
    }
  };
  const handler = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };
  const handleSubmit = () => {
    if (name !== "") {
      createImage(productImg);
      setname("");
    }
  };

  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center gap-2">
      <Toaster position="top-center" />

      <div className="flex-col flex gap-2 justify-center ">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input type="file" accept="image/" onChange={handler} />
        <button
          onClick={handleSubmit}
          className="rounded-md p-2 text-white bg-[gray]"
        >
          OK
        </button>
      </div>
      <TestUpdate
        singleImg={singleImg}
        productImg={productImg}
        clicky={clicky}
        handler={handler}
      />
      <div className="bg-[red] h-[200px] w-[200px]">
        {productImg ? (
          <img src={productImg} className="h-[100%] w-[100%]" />
        ) : null}
      </div>
      <div className="h-[50%] w-[250px] flex-col flex p-2 gap-2 overflow-y-scroll ">
        {myArray.map((i) => (
          <div className="relative">
            <img src={i.image.url} alt="" />
            <div className="z-0 absolute top-0">{i.name}</div>

            <div className="z-10 bottom-0 flex items-center justify-between p-2 absolute w-[100%]">
              <button
                onClick={() => {
                  const id = i._id;
                  dispatch(getimgByID(id));
                }}
                className="rounded-md p-2 text-white bg-[gray]"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteImage(i._id);
                }}
                className=" rounded-md p-2 text-white bg-[red]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
