import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

import { useState } from "react";

import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container"
    >
      <div className="relative flex flex-col justify-center items-start xl:w-2/5 pt-28 max-xl:padding-x w-full">
        <p className="text-coral-red text-xl font-montserrat">Notre collection d'été</p>
        <h1 className="mt-10 font-extrabold text-8xl max-sm:text-[72px] max-md:leading-[82px] font-palanquin">Nos dernières <span className="text-coral-red xl-bg-white xl:whitespace-nowrap z-10 pr-10">Nike</span>sorties</h1>
        <p className="mt-10 mb-14 sm:max-w-sm font-montserrat text-slate-gray text-lg">Découvrez les derniers design arrivés, mêlant confort et tendance au quotidien.</p>
        <Button label="Visiter" iconURL={arrowRight}/>

        <div className="flex justiy-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palaquin text-4xl font-bold leading-normal text-black">{stat.value}</p>
              <p className="ml-5 font-montserrat leading-7 text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-5"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] mx-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero