import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/action/Product";
import Productshow from "./Productshow";

const Productlist = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allproduct.product.products);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div>
      <Productshow />
    </div>
  );
};

export default Productlist;
