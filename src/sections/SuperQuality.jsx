import Button from "../components/Button"
import { shoe8 } from "../assets/images"
import { arrowRight } from "../assets/icons"
const SuperQuality = () => {
  return (
    <section id="about-us" className="w-full flex items-center max-lg:flex-col justify-between gap-10 max-containe">
      <div className="flex flex-1 flex-col w-full justify-center items-start">
        <h2 className="font-bold font-palanquin lg:max-w-lg capitalize text-4xl">La <span className="text-coral-red">qualité</span> de nos produits.</h2>
        <p className="mt-4 lg:max-w-lg info-text">Les chaussures sont conçues avec précision et attention aux détails, ce qui garantit un ajustement parfait et un grand confort pour une utilisation prolongée</p>
        <p className="mt-6 lg:max-w-lg info-text">Elles sons sont soumises à des tests de contrôle de qualité rigoureux pour garantir qu'elles répondent à vos attentes</p>
        <div className="mt-11">
          <Button label="Plus d'info"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center w-full">
        <img src={shoe8} alt="shoe"/>
      </div>
    </section>
  )
}

export default SuperQuality