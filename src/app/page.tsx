/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="md:w-2/3 hover:shadow-md">
          <Image 
            width={1000} 
            height={1000} 
            className="w-full h-[300px] md:h-[600px] rounded-xl border border-black object-cover hover:shadow-xl" 
            src="/assets/img/3.jpeg" 
            alt="image 1"
          />
        </div>
        <div className="w-full md:w-2/3 md:block hidden">
          <Image 
            width={1000} 
            height={1000} 
            className="w-full h-[600px] rounded-xl border border-black object-cover hover:shadow-xl" 
            src="/assets/img/flo06.jpg" 
            alt="image 2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row mx-auto md:justify-between items-center">
        <div className="xl:w-1/5 md:w-2/5 w-2/4 flex justify-center ">
          <Image 
            className="md:rounded-full rounded-full border border-black w-4/5 h-auto hover:shadow-xl" 
            src="/assets/img/flook.jpg" 
            alt="profil" 
            width={1000} 
            height={1000}
          />
        </div>
        <div className="w-full text-center">
          <h1 className="text-4xl font-cormorant font-semibold sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl uppercase whitespace-nowrap">
            Florence demolder
          </h1>
          <h3 className="text-2xl font-cormorant sm:text-2xl md:text-3xl lg:text-4xl mt-2">
            Aménagement d'intérieur et décoration
          </h3>
        </div>
      </div>
    </div>
  );
}
