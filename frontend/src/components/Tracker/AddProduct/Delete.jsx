import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
export const Delete = () => {
  const history = useHistory();
  const { id } = useParams();
  const deletedata = async () => {
    const { data } = await axios.delete(
      `http://localhost:5513/api/product/${id}`
    );
    history.push("/");
  };
  useEffect(() => {
    deletedata();
  }, []);
  return (
    <div>
      <div className="container"></div>
    </div>
  );
};
