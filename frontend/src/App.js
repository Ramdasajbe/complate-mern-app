import { Signup } from "./pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import AddProduct from "./components/Tracker/AddProduct/AddProduct";
import ProductInfo1 from "./components/Tracker/AddProduct/ProductInfo1";

import View from "./components/Tracker/AddProduct/View";

import { Delete } from "./components/Tracker/AddProduct/Delete";
import Context from "./Context";
import Login from "./pages/Login";
import Usersignup from "./pages/Admin/Usersignup";
import Edit from "./components/Tracker/AddProduct/Edit";

function App() {
  return (
    <Context>
      {/* <Provider store={store}> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home} />

          <Route exact path={"/AddProduct"} component={AddProduct} />
          <Route exact path={"/Signup"} component={Signup} />
          <Route exact path={"/Login"} component={Login} />

          <Route exact path={"/ProductInfo1"} component={ProductInfo1} />
          <Route exact path={"/View/:id"} component={View} />
          <Route exact path={"/Delete/:id"} component={Delete} />
          <Route exact path={"/Edit/:id"} component={Edit} />
          <Route exact path={"/Usersignup"} component={Usersignup} />

          <Route exact path={"*"} component={Pagenotfound} />
        </Switch>
      </Router>
      {/* </Provider> */}
    </Context>
  );
}

export default App;
