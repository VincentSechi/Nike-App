import { products } from "../constants"

import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
  <section
    id="products"
    className="max-container max-sm:mt-12"
  >
    <div className=" flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">Nos articles les plus <span className="text-coral-red">populaires</span></h2>
      <p className="mt-10 mb-14 lg:max-w-lg font-montserrat text-slate-gray text-md">Adoptez un look tendance élaboré par nos soins. <br/> Vivez un monde alliant confort et style</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      {products.map((product) => (
        <PopularProductCard 
          key={product.name} {... product}
        />
      ))}
    </div>
  </section>
  )
}

export default PopularProducts