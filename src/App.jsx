import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products From Dummy JSON API</h1>

      {/* Product Details Card */}
      {selectedProduct && (
        <div
          style={{
            width: "500px",
            margin: "20px auto",
            padding: "20px",
            border: "2px solid #333",
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
            color: "black",
            textAlign: "center",
          }}
        >
          <img
            src={selectedProduct.thumbnail}
            alt={selectedProduct.title}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h2>{selectedProduct.title}</h2>

          <p>
            <strong>Price:</strong> ₹{selectedProduct.price}
          </p>

          <p>
            <strong>Description:</strong> {selectedProduct.description}
          </p>

          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Product Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          color: "black",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "250px",
              border: "1px solid black",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <h3>{product.title}</h3>

            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>

           <button
  onClick={() => {
    console.log("Button clicked");
    console.log(product);
    setSelectedProduct(product);
  }}
  style={{
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  View Details
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
