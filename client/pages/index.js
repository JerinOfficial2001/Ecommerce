import ImageSrc from "@/src/component/ImageSrc";
import ProductCard from "@/src/component/ProductCard";
import ProductContainer from "@/src/component/ProductContainer";
import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout navColor={"bg-white"}>
        <div className=" w-[98%] flex flex-col gap-4 items-center justify-center bg-white rounded-md p-2 cursor-pointer">
          <div className="h-[120px]  p-2 flex flex-col items-center justify-center gap-2 ">
            <div>
              <ImageSrc
                src={require("../src/assets/grocery.png")}
                customClass={"h-[100%] w-[100%]"}
              />
            </div>
            <Text name={"Grocery"} customClass={"text-md font-semibold"} />
          </div>
        </div>
        <ProductContainer divertor={true}>
        
          hello
        </ProductContainer>
        <ProductContainer>
          <ProductCard
            src={require("../src/assets/ipad.png")}
            price={"From 10,999"}
            category={"Realme C55"}
          />
          <ProductCard
            src={require("../src/assets/ipad.png")}
            price={"From 10,999"}
            category={"Realme C55"}
          />
        </ProductContainer>
      </Layout>
    </>
  );
}
