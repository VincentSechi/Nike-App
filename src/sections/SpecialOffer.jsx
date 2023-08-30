import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer} width={773} height={687} className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col w-full justify-center items-start">
        <h2 className="font-bold font-palanquin lg:max-w-lg capitalize text-4xl">Des <span className="text-coral-red">promos</span> chaque mois.</h2>
        <p className="mt-4 lg:max-w-lg info-text">Retrouvez chaque mois une large gamme de produits en promotion.</p>
        <p className="mt-6 lg:max-w-lg info-text">Inscrivez-vous aux ventes privées pour bénéficier d'offres uniques.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="S'inscrire" iconURL={arrowRight}/>
          <Button label="Plus d'infos" backgroundColor="bg-white" borderColor="border-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer