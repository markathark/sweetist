import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Order from "./pages/Order";
import Success from "./pages/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={user ? <User /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/User" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
