import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const View = () => {
  const { id } = useParams();
  const [view, setview] = useState();
  const viewdata = async () => {
    const { data } = await axios.get(`http://localhost:5513/api/product/${id}`);
    setview(data.result);
  };

  useEffect(() => {
    viewdata();
  }, []);
  return (
    <div className="container col-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Product</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <h3>name :{view?.name}</h3>
            <h4>barcode :{view?.barcode}</h4>
            <h4>price :{view?.price} Rs</h4>
            <h4 className="mb-5">quantity :{view?.quantity}</h4>
          </h6>

          <button className="btn btn-success ">
            <Link to="/ProductInfo1" className="card-link text-light">
              Product Info
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
