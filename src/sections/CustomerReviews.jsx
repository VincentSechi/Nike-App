import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">L'avis de nos <span className="text-coral-red">clients</span></h3>
      <p className="mt-4 m-auto info-text max-w-lg font-montserrat text-center">Consultez les avis de satisfactions des clients ayant utilisé nos services.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews