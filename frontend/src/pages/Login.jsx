import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/user-action";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("please enter valid email")
        .required("Please Fill This Field"),
      password: yup.string().required("Please Fill This Field"),
    }),
    onSubmit: (values, actions) => {
      dispatch(userLoginAction(values));
      console.log(values);
      actions.resetForm();
      history.push("/");
    },
  });

  return (
    <div className="container">
      <div className="row mt-1">
        <div className="col-sm-6 offset-sm-3">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="email"
                    className={`form-control ${
                      formik.errors.email && "is-invalid"
                    }`}
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="enter email"
                  />
                  <span className="invalid-feedback">
                    {formik.errors.email}
                  </span>
                </div>
                <br />
                <div>
                  <input
                    type="password"
                    className={`form-control ${
                      formik.errors.password && "is-invalid"
                    }`}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="enter password"
                  />
                  <span className="invalid-feedback">
                    {formik.errors.password}
                  </span>
                </div>
                <br />
                <button className="btn btn-success w-100">
                  {isLoading ? <Loader varient="grow" color="dark" /> : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
