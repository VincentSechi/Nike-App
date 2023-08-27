import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

import { statistics } from "../constants";
import { shoes } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container"
    >
      <div className="relative flex flex-col justify-center items-start xl:w-2/5 pt-28 max-xl:padding-x w-full">
        <p className="text-coral-red text-xl py-10 font-montserrat">Notre collection d'été</p>
        <h1 className="font-extrabold text-8xl font-palanquin">Nos dernières <span className="text-coral-red">Nike</span> sorties</h1>
        <p className="text-sm pt-10 sm:w-1/2 font-montserrat text-slate-gray">Découvrez les derniers design arrivés, mêlant confort et tendance au quotidien</p>
        <Button label="Visiter" iconURL={arrowRight}/>

        <div className="flex justiy-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <p key={item.label} className="font-montserrat font-extrabold leading-normal text-lg text-black">{item.value} {item.label}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero