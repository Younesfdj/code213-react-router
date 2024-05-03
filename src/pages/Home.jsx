import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {data.map((objet_courant, index) => {
        return (
          <Card
            data={objet_courant}
            key={index}
            handleProductSelect={handleProductSelect}
          />
        );
      })}
    </div>
  );
}
