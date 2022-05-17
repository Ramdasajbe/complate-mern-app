import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetAllProduct } from "../actions/user-action";
import { useEffect } from "react";
import axios from "axios";
export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const getallproduct = () => {
    dispatch(GetAllProduct());
  };

  const product = () => {
    history.push("/ProductInfo1");
  };
  const user = () => {
    history.push("/Usersignup");
  };
  useEffect(() => {
    getallproduct();
  }, []);
  return (
    <div className="container my-5">
      <button className="btn btn-success my-5" onClick={product}>
        View All product
      </button>
      <div>
        <button className="btn btn-success" onClick={user}>
          View All user signup
        </button>
      </div>
    </div>
  );
}
