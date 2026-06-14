import { useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ProductImage from "../components/ProductImage"
import { getCategoryClass, products } from "../data/products"
import "../styles/Products.css"

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const galleryImages = useMemo(() => product?.galleryImages || [], [product])
  const [selectedImage, setSelectedImage] = useState(null)

  if (!product) {
    return (
      <main className="product-detail-page">
        <section className="product-not-found">
          <p className="products-kicker">Product</p>

          <h1>Product not found.</h1>

          <Link to="/products">Back to products</Link>
        </section>
      </main>
    )
  }

  const activeImage = selectedImage?.slug === slug ? selectedImage.image : galleryImages[0]
  const infoSections = product.infoSections || []

  return (
    <main className={`product-detail-page ${getCategoryClass(product.category)}`}>
      <Link className="product-back-link" to="/products">
        Back to products
      </Link>

      <section className="product-detail-hero">
        <div className="product-detail-media">
          {activeImage ? (
            <img
              className="product-image product-image-large"
              src={activeImage.src}
              alt={activeImage.alt}
            />
          ) : (
            <ProductImage product={product} large />
          )}
        </div>

        <div className="product-detail-content">
          <span className="product-category">{product.category}</span>

          <h1>{product.name}</h1>

          <p className="product-type">{product.type}</p>

          {product.showMainPrice !== false && (
            <strong className="product-price">{product.priceLabel || `RM${product.price}`}</strong>
          )}

          {product.priceOptions && (
            <div className="product-price-options" aria-label="Product price options">
              {product.priceOptions.map((option) => (
                <span key={option}>{option}</span>
              ))}
            </div>
          )}

          <p>{product.description}</p>

          <div className="product-detail-actions">
            <a
              className="product-order-link"
              href={product.orderUrl || `mailto:kim@sohandmade.co?subject=${encodeURIComponent(product.name)}%20order`}
              target={product.orderUrl ? "_blank" : undefined}
              rel={product.orderUrl ? "noreferrer" : undefined}
            >
              Order with Impact
            </a>
            <a className="product-shopee-link" href={product.shopeeUrl} target="_blank" rel="noreferrer">
              Shopee
            </a>
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="product-gallery" aria-label={`${product.name} image guide`}>
          {galleryImages.map((image) => (
            <button
              className={`product-gallery-thumb ${activeImage?.src === image.src ? "active" : ""}`}
              key={image.src}
              type="button"
              onClick={() => setSelectedImage({ slug, image })}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </section>
      )}

      {infoSections.length > 0 ? (
        <section className="product-info-grid">
          {infoSections.map((section, index) => (
            <article
              className={section.variant === "impact" ? "product-impact-info" : undefined}
              key={`${section.title || "section"}-${index}`}
            >
              {section.coverImage && (
                <div className="product-impact-media">
                  <img src={section.coverImage} alt={section.coverAlt || ""} />
                  {section.logoImage && (
                    <img
                      className="product-impact-logo"
                      src={section.logoImage}
                      alt={section.logoAlt || ""}
                    />
                  )}
                </div>
              )}

              {section.title && <h2>{section.title}</h2>}

              {section.subtitle && <h3>{section.subtitle}</h3>}

              {section.variant === "key-points" && Array.isArray(section.text) ? (
                <ul className="product-key-points">
                  {section.text.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : Array.isArray(section.text) ? (
                section.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              ) : (
                <p>{section.text}</p>
              )}

              {section.note && <p className="product-info-note">{section.note}</p>}
            </article>
          ))}
        </section>
      ) : (
        <section className="product-info-grid">
          <article>
            <h2>How to use</h2>

            {Array.isArray(product.howToUse) ? (
              <ol>
                {product.howToUse.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : (
              <p>{product.howToUse}</p>
            )}
          </article>

          <article className={product.storageTitle ? "product-impact-info" : undefined}>
            <h2>{product.storageTitle || (product.storage ? "Proper storage" : "Made with intention")}</h2>

            <p>
              {product.storage ||
                "Each product is made in small batches and developed with a clear purpose, often inspired by a real customer need, routine, or request."}
            </p>
          </article>

          {product.details?.map((detail) => (
            <article key={detail.title}>
              <h2>{detail.title}</h2>
              <p>{detail.text}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default ProductDetail
