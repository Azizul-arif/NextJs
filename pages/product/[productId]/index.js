import { useRouter } from 'next/router'

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId

  return (
    <div>
      <h1>Product Detail-{productId}</h1>
    </div>
  )
}

export default ProductDetail
