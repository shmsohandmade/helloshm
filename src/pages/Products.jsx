import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import ProductImage from "../components/ProductImage"
import { getCategoryClass, productCategories, products } from "../data/products"
import "../styles/Products.css"

const storeLinks = {
  shopee: "https://shopee.com.my/sohandmadeenterprise"
}

function Products() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [search, setSearch] = useState("")

  const visibleProducts = useMemo(() => {
    const filteredProducts =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory)

    const searchedProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )

    return [...searchedProducts].sort((first, second) => {
      if (sortBy === "price-low") {
        return first.price - second.price
      }

      if (sortBy === "price-high") {
        return second.price - first.price
      }

      return first.name.localeCompare(second.name)
    })
  }, [activeCategory, search, sortBy])

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero-content">
          <p className="products-kicker">Products</p>

          <h1>Thoughtfully made essentials for hair, body, and home.</h1>

          <p>
            Each product is made with care, often in response to a real need,
            routine, or request. Browse the collection, then shop through our
            marketplace stores or inquire for bulk and custom orders.
          </p>

          <div className="store-actions">
            <a href={storeLinks.shopee} target="_blank" rel="noreferrer">
              Visit our Shopee
            </a>
            <a
              className="custom-order-link"
              href="https://tally.so/r/Bz91W4"
              target="_blank"
              rel="noreferrer"
            >
              Custom Orders
              <span className="custom-order-tooltip">
                For events, gifting, and collaborations.
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="products-tools" aria-label="Product filters">
        <div className="product-filters">
          {productCategories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-controls">
          <input
            className="product-search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <label className="product-sort">
            Sort
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="name">Name</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>
      </section>

      <section className="product-grid">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <Link
              className={`product-card ${getCategoryClass(product.category)}`}
              key={product.slug}
              to={`/products/${product.slug}`}
            >
              <ProductImage product={product} />

              <span className="product-category">{product.category}</span>

              <h2>{product.name}</h2>

              <p>{product.type}</p>

              {product.showMainPrice !== false && (
                <strong>{product.priceLabel || `RM${product.price}`}</strong>
              )}
            </Link>
          ))
        ) : (
          <p className="product-empty">No products found.</p>
        )}
      </section>
    </main>
  )
}

export default Products
