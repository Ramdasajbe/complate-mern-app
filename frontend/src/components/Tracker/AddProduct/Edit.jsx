import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function Edit() {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      name: "",
      barcode: "",
      price: "",
      quantity: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please Fill This Field"),
      barcode: yup.string().required("Please Fill This Field"),
      price: yup.string().required("Please Fill This Field"),
      quantity: yup.string().required("Please Fill This Field"),
    }),
    onSubmit: async (values, actions) => {
      await axios.put(`http://localhost:5513/api/product/${id}`, values);

      actions.resetForm();
    },
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.name && "is-invalid"
                      }`}
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      placeholder="enter  of name of product"
                    />
                    <span className="invalid-feedback">
                      {formik.errors.name}
                    </span>
                  </div>

                  <div>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.barcode && "is-invalid"
                      }`}
                      name="barcode"
                      onChange={formik.handleChange}
                      value={formik.values.barcode}
                      placeholder="enter barcode"
                    />
                    <span className="invalid-feedback">
                      {formik.errors.barcode}
                    </span>
                  </div>

                  <div>
                    <input
                      type="number"
                      className={`form-control ${
                        formik.errors.price && "is-invalid"
                      }`}
                      name="price"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      placeholder="enter price"
                    />
                    <span className="invalid-feedback">
                      {formik.errors.price}
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.quantity && "is-invalid"
                      }`}
                      name="quantity"
                      onChange={formik.handleChange}
                      value={formik.values.quantity}
                      placeholder="enter quantity"
                    />
                    <span className="invalid-feedback">
                      {formik.errors.quantity}
                    </span>
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
