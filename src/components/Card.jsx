export default function Card({ data, handleProductSelect }) {
  return (
    <div
      onClick={() => handleProductSelect(data.id)}
      style={{
        cursor: "pointer",
      }}
    >
      <div className="card">
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <div className="img">
            <img className="img" src={data.thumbnail} />
          </div>
          <div className="info">
            <h2>
              {data.title} {data.description}
            </h2>
            <div className="product-i">
              <div className="price-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>{data.rating}</p>
              </div>
              <h2 className="price">{data.price}</h2>
            </div>
          </div>
        </div>
        <button className="buy">buy</button>
      </div>
    </div>
  );
}
