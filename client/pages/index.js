import { SLIDES } from "@/src/arrays/Array";
import ImageSrc from "@/src/component/ImageSrc";
import Loaders from "@/src/component/Loaders";
import NavList from "@/src/component/NavList";
import ProductCard from "@/src/component/ProductCard";
import ProductContainer from "@/src/component/ProductContainer";
import { SampleNextArrow, SamplePrevArrow } from "@/src/component/SliderModule";
import { MyContext } from "@/src/context/MyContext";
import Layout from "@/src/layout/Layout";
import { filterNavItems } from "@/src/utils/Filter";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Slider from "react-slick";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <Layout hoverIt={hoverIt} sethoverIt={sethoverIt} navColor={"bg-white"}>
        <NavList />
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
                  onclick={() => {
                    router.push({
                      pathname: "/categoryPage",
                      query: i,
                    });
                  }}
                  key={i._id}
                  img={i.image.url}
                  price={i.price}
                  category={
                    i.title.length > 29 ? i.title.slice(0, 29) + "..." : i.title
                  }
                />
              ))}
            </Slider>
          </div>
        </ProductContainer>
        <ProductContainer
          name={"Today's Fashion Deals"}
          onClick={() => {
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
                  onclick={() => {
                    router.push({
                      pathname: "/categoryPage",
                      query: i,
                    });
                  }}
                  key={i._id}
                  img={i.image.url}
                  price={i.price}
                  category={
                    i.title.length > 25 ? i.title.slice(0, 25) + "..." : i.title
                  }
                />
              ))}
            </Slider>
          </div>
        </ProductContainer>
        <ProductContainer
          onClick={() => {
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
                  onclick={() => {
                    router.push({
                      pathname: "/categoryPage",
                      query: i,
                    });
                  }}
                  key={i._id}
                  img={i.image.url}
                  price={"₹ " + i.price}
                  category={
                    i.title.length > 29 ? i.title.slice(0, 29) + "..." : i.title
                  }
                />
              ))}
            </Slider>
          </div>
        </ProductContainer>
      </Layout>
    </>
  );
}
