import { SLIDES } from "@/src/arrays/Array";
import ImageSrc from "@/src/component/ImageSrc";
import ProductCard from "@/src/component/ProductCard";
import ProductContainer from "@/src/component/ProductContainer";
import { SampleNextArrow, SamplePrevArrow } from "@/src/component/SliderModule";
import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { filterNavItems } from "@/src/utils/Filter";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setloading] = useState(false);
  const [hoverIt, sethoverIt] = useState("");
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const item = SLIDES[index];
  const prevSlide = () => {
    setIndex((index - 1) % SLIDES.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % SLIDES.length);
  };

  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Layout
        hoverIt={hoverIt}
        sethoverIt={sethoverIt}
        navColor={"bg-white"}
        loading={loading}
        CartOnclick={() => {
          setloading(true);
          router.push("/authReq");
        }}
      >
        <div className=" w-[98%] flex  gap-4 items-center justify-center bg-white rounded-md p-2 cursor-pointer">
          {filterNavItems("none")?.map((i) => (
            <div
              key={i._id}
              className="h-[120px]  p-2 flex flex-col items-center justify-center gap-2 hover:text-[blue]"
            >
              <div>
                <img className="h-[100%] w-[100%]" src={i.image.url} />
              </div>
              <Text name={i.title} customClass={"text-md font-semibold "} />
            </div>
          ))}
        </div>
        <ProductContainer
          divertor={true}
          disabledRight={index === SLIDES.length}
          disabledLeft={index === 0}
          onClickLeft={prevSlide}
          onClickRight={nextSlide}
        >
          <div>
            <ImageSrc src={item.img} />
          </div>
        </ProductContainer>
        <ProductContainer
          name={"Top Offers"}
          onClick={() => {
            setloading(true);
            router.push({
              pathname: "/productPage",
              query: { data: "Top Offers" },
            });
          }}
        >
          <div className="h-[100%] w-[100%] ">
            <Slider {...settings}>
              {filterNavItems("Top Offers").map((i) => (
                <ProductCard
                  // onclick={() => {
                  //   router.push({
                  //     pathname: "/productPage",
                  //     query: i,
                  //   });
                  // }}
                  key={i._id}
                  img={i.image.url}
                  price={i.price}
                  category={i.title}
                />
              ))}
            </Slider>
          </div>
        </ProductContainer>
        <ProductContainer
          name={"Today's Fashion Deals"}
          onClick={() => {
            setloading(true);
            router.push({
              pathname: "/productPage",
              query: { data: "Today's Fashion Deals" },
            });
          }}
        >
          <div className="h-[100%] w-[100%] ">
            <Slider {...settings}>
              {filterNavItems("Today's Fashion Deals").map((i) => (
                <ProductCard
                  key={i._id}
                  img={i.image.url}
                  price={i.price}
                  category={i.title}
                />
              ))}
            </Slider>
          </div>
        </ProductContainer>
        <ProductContainer
          onClick={() => {
            setloading(true);
            router.push({
              pathname: "/productPage",
              query: { data: "Best of Electronics" },
            });
          }}
          name={"Best of Electronics"}
        >
          <div className="h-[100%] w-[100%] ">
            <Slider {...settings}>
              {filterNavItems("Best of Electronics").map((i) => (
                <ProductCard
                  key={i._id}
                  img={i.image.url}
                  price={i.price}
                  category={i.title}
                />
              ))}
            </Slider>
          </div>
        </ProductContainer>
      </Layout>
    </>
  );
}
