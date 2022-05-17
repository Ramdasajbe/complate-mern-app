import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useState } from "react";
const ProductInfo1 = () => {
  const [search, setsearch] = useState("");
  const data = useSelector((state) => state.product.AllProduct.result);
  console.log(search);
  console.log(data);
  return (
    <div>
      <div className="container">
        <div className="col-12">
          <input
            type="text"
            id="serachdata"
            onChange={(e) => setsearch(e.target.value)}
          />
          <label htmlFor="serachdata " className="mx-3">
            serch product by name
          </label>
          <div className="row">
            {data &&
              data
                ?.filter((values) => {
                  if (search === "") {
                    return values;
                  } else if (values?.name.includes(search)) {
                    return values;
                  }
                })
                .map((value, index) => {
                  return (
                    <div className="card col-4 mx-2 my-2">
                      <div className="card-body">
                        <h5 className="card-title">Products {index + 1}</h5>
                        <h2 className="card-subtitle mb-2 text-muted">
                          {value?.name}
                        </h2>
                        <h6>
                          barcode: {value?.barcode}
                          <br />
                          price: {value?.price} Rs
                          <br /> quantity: {value?.quantity}
                          <br />
                          created at: {value?.createdAt}
                        </h6>
                      </div>
                      <div className="card-footer ">
                        <div className="row">
                          <div className="col-3">
                            <Link
                              className="btn  btn-sm  btn-warning "
                              to={`Edit/${value._id}`}
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="col-3">
                            <Link
                              className="btn btn-sm btn-success "
                              to={`View/${value._id}`}
                            >
                              view
                            </Link>
                          </div>
                          <div className="col-3">
                            <Link
                              className="btn  btn-sm  btn-danger "
                              to={`Delete/${value._id}`}
                            >
                              delete
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo1;

//  <Link className="btn btn-success mx-4" to={`View/${value._id}`}>
//    Add
//  </Link>;
