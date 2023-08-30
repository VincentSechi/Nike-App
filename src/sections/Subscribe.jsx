import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palaquin font-bold">
        Inscrivez vous à notre <span className="text-coral-red">Newsletter</span>
      </h3>
      <div className="lg:max-w-[40%] rounded-full w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray ">
        <input type="text" placeholder="adresse@mail.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="S'inscrire" iconURL={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe