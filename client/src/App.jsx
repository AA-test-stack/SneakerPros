import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

// 1:35

const App = () => {
  const user=useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/product/:productId">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;