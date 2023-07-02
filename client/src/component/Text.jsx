import React from "react";
import { classNames } from "../utils/Classname";

export default function Text({ name,customClass }) {
  return (
    <div className={classNames(customClass)}>
      {name}
    </div>
  );
}
