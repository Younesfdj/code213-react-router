import { useParams } from "react-router";
import { useEffect, useState } from "react";
export default function ProductInfoPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  async function getProduct() {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setData(data);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="productInfo">
      <h1>Brand: {data.brand}</h1>
      <h1>Category: {data.category}</h1>
      <h1>Title :{data.title}</h1>
      <h1>Description: {data.description}</h1>
      <h1>Rating: {data.rating}</h1>
      <h1>Price: {data.price}</h1>
    </div>
  );
}
