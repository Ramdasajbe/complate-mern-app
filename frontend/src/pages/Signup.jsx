import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import * as yup from "yup";
import { userAction } from "../actions/user-action";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

import { useHistory } from "react-router-dom";
export default function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { signup, isLoading, error } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      cpassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please Fill This Field"),
      email: yup
        .string()
        .email("please enter valid email")
        .required("Please Fill This Field"),
      mobile: yup.string().required("Please Fill This Field"),
      password: yup.string().required("Please Fill This Field"),
      cpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password Do not match")
        .required(),
    }),

    onSubmit: (values, actions) => {
      dispatch(userAction(values));
      history.push("/Login");
      actions.resetForm();
    },
  });

  return (
    <div className="container mt-1">
      {/* {JSON.stringify(formik.errors)} */}
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          {signup && (
            <Alert color="success" message="User Signup Successfully" />
          )}
          {error && <Alert color="danger" message={error} />}
          <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    placeholder="Enter name"
                    name="name"
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.name}
                    className="form-control"
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <br />
                <div>
                  <input
                    placeholder="Enter email"
                    name="email"
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.email}
                    className="form-control"
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <br />
                <div>
                  <input
                    placeholder="Enter Mobile"
                    name="mobile"
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.mobile}
                    className="form-control"
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <br />
                <div>
                  <input
                    placeholder="Enter Password"
                    name="password"
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                    className="form-control"
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <br />
                <div>
                  <input
                    placeholder="Confirm Password"
                    name="cpassword"
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.cpassword}
                    className="form-control"
                  />
                  <span className="invalid-feedback"></span>
                </div>
                <br />
                <button
                  className="btn btn-success btn-lg w-100"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader varient="border" color="light" />
                  ) : (
                    "Signup"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
