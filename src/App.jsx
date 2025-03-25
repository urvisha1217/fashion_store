import { BrowserRouter as Router, Routes, Route, Navigate ,Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NewProduct from "./components/NewProduct";
import RecommendationProduct from "./components/RecommendationProduct";
import ChooseCategory from "./components/ChooseCategory";
import BestSellingProduct from "./components/BestSellingProduct";
import SearchComponent from "./components/SearchComponent";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import Reviews from "./components/Reviews";
import ProductReview from "./components/ProductReview";
// import Logout from "./components/Logout";
import UserAccount from "./components/UserAccount";
import Navbar from "./Admin1/Navbar";
import Sidebar from "./Admin1/Sidebar";
import Dashboard from "./Admin1/Dashboard";
import Users from "./Admin1/Users";

const AdminLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-64 p-4"> {/* Adjust content for Sidebar */}
      <Navbar />
      <Outlet />
    </div>
  </div>
);


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (example: from localStorage)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/single-review" element={<ProductReview />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/product" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={isAuthenticated ? <CheckoutPage /> : <Navigate to="/sign-in" />} />
        <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/sign-in" element={isAuthenticated ? <Navigate to="/" /> : <SignIn />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/user" element={<UserAccount />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/recommendation-product" element={<RecommendationProduct />} />
        <Route path="/choose-category" element={<ChooseCategory />} />
        <Route path="/best-selling-product" element={<BestSellingProduct />} />


        <Route element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<Dashboard />} />
            {/* <Route path="/admin-orders" element={<Orders />} /> */}
            <Route path="/admin-users" element={<Users />} />
            {/* <Route path="/admin-products" element={<Product1 />} /> Admin Product Page */}
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
