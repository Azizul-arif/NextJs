import { useRouter } from 'next/router'

function Review() {
  const router = useRouter()
  const { productId, reviewId } = router.query

  return (
    <div>
      <h1>
        product details for product-{productId} and review details for review-
        {reviewId}
      </h1>
    </div>
  )
}

export default Review
