import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Usersignup = () => {
  const [user, setuser] = useState();
  const getuser = async () => {
    const { data } = await axios.get("http://localhost:5513/api/user");
    console.log(data.result);
    setuser(data?.result);
  };
  useEffect(() => {
    getuser();
  }, []);
  return (
    <div className="container">
      <table class="table border table-striped table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>

            <th scope="col">Email</th>

            <th scope="col">phone Number</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((element, index) => (
            <tr>
              <th scope="row">{index + 1}</th>

              <td key={index}>{element.name}</td>

              <td key={index}>{element.email}</td>
              <td key={index}>{element.mobile}</td>

              <td>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/users/ViewUser/${element.id}`}
                >
                  View
                </Link>

                <Link
                  className="btn btn-warning btn-sm my-2 mx-2"
                  to={`/users/EditUser/${element.id}`}
                >
                  edit
                </Link>
                <Link
                  className="btn btn-danger btn-sm"
                  //   onClick={() => deleteUser(element.id)}
                >
                  delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usersignup;
