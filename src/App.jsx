import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NewProduct from "./components/NewProduct";
import RecommendationProduct from "./components/RecommendationProduct";
import ChooseCategory from "./components/ChooseCategory";
import BestSellingProduct from "./components/BestSellingProduct";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import SearchComponent from "./components/SearchComponent";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop" element={<ProductPage />}/>
        <Route path="/product" element={<SingleProductPage />}/>
        <Route path="/cart" element={< CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/recommendation-product" element={<RecommendationProduct />} />
        <Route path="/choose-category" element={<ChooseCategory />} />
        <Route path="/best-selling-product" element={<BestSellingProduct />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
