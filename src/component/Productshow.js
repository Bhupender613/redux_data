import React from "react";
import { useSelector } from "react-redux";

const Productshow = () => {
  const data = useSelector((state) => state.allproduct.product.products);

  return (
    <div className=" row">
      {data &&
        data.map((product) => (
          <div className="col-md-4 my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={product.images[0]}
                style={{ width: "200px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.slice(0, 30)}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Price:</span> {product.price}
                </li>
                <li className="list-group-item">
                  {" "}
                  <span className="fw-bold">DiscountPercentage:</span>{" "}
                  {product.discountPercentage}%
                </li>
                <li className="list-group-item">
                  {" "}
                  <span className="fw-bold">Rating:</span> {product.rating}
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Productshow;
