import React from "react";
import Slider from "react-slick";

export function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className="absolute z-10 right-[0px] top-[30%] h-[90px] w-[40px] p-2 rounded-sm bg-white  flex items-center justify-center"
      style={{ boxShadow: "0px 0px 3px gray" }}
      onClick={onClick}
    >
      {">"}
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 left-[0px] top-[30%] h-[90px] w-[40px] p-2 rounded-sm bg-white  flex items-center justify-center"
      style={{ boxShadow: "0px 0px 3px gray" }}
      onClick={onClick}
    >
      {"<"}
    </div>
  );
}

export default function SliderModule() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-[80%] bg-[red]">
      <h2>Swipe To Slide</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}
