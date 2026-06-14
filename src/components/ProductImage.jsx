function ProductImage({ product, large = false }) {
  const imageClass = large ? "product-image product-image-large" : "product-image"

  if (product.image) {
    return <img className={imageClass} src={product.image} alt={product.name} />
  }

  return (
    <div className={`${imageClass} product-image-placeholder`}>
      <span>{product.type}</span>
    </div>
  )
}

export default ProductImage
