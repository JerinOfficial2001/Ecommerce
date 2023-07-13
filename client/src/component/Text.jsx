import React from "react";
import { classNames } from "../utils/Classname";

export default function Text({ name, customClass, onclick }) {
  return (
    <div className={classNames(customClass)} onClick={onclick}>
      {name}
    </div>
  );
}
