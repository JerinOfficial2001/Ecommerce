import { SLIDES } from "@/src/arrays/Array";
import ImageSrc from "@/src/component/ImageSrc";
import ProductCard from "@/src/component/ProductCard";
import ProductContainer from "@/src/component/ProductContainer";
import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [index, setIndex] = useState(0);
  const item = SLIDES[index];
  const prevSlide = () => {
    setIndex((index - 1) % SLIDES.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % SLIDES.length);
  };
  const { items: data } = useSelector((state) => state.products);
  const filterNavItems = (type) => {
    const filterdProducts = data?.filter((i) => i.array === type);
    return filterdProducts;
  };
  return (
    <>
      <Layout navColor={"bg-white"}>
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
        <ProductContainer name={"Top Offers"}>
          {filterNavItems("Top Offers").map((i) => (
            <ProductCard
              key={i.id}
              img={i.image.url}
              price={i.price}
              category={i.title}
            />
          ))}
        </ProductContainer>
        <ProductContainer name={"Today's Fashion Deals"}>
          {filterNavItems("Today's Fashion Deals").map((i) => (
            <ProductCard
              key={i.id}
              img={i.image.url}
              price={i.price}
              category={i.title}
            />
          ))}
        </ProductContainer>
      </Layout>
    </>
  );
}
