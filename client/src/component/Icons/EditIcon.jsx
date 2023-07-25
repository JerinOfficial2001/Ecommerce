import React from 'react'
import {AiOutlineEdit} from "react-icons/ai"

export default function EditIcon() {
  return (
    <AiOutlineEdit
      className={classNames(
        customClass ? customClass : "text-xl",
        "text-[gray] cursor-pointer hover:text-[white]"
      )}
    />
  );
}
