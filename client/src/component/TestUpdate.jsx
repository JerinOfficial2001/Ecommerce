import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function TestUpdate({ productImg, singleImg, handler }) {
  const [name, setname] = useState(singleImg.name ? singleImg.name : "");

  const id = singleImg._id;
  const updateImage = async () => {
    try {
      await fetch(`http://localhost:4000/api/image/${id}`, {
        method: "PUT",
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
          console.log("updated", data.data);
          if (data.status === "updated") {
            toast.success("Updated");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    if (name !== "") {
      updateImage();
    }
  };
  return (
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
        Edit
      </button>
    </div>
  );
}
