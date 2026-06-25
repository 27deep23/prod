import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=0")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  },[]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products From Dummy JSON API</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          color:"black"
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
              onClick={() => alert(product.title)}
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