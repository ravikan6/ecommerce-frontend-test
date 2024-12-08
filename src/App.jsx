import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/productdetails";
import About from "./Pages/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import HomePage from "./Components/Home/HomePage";
import ShoppingCartPage from "./Components/Cart/Cart";
import Shop from "./Components/Shop";
import OccasionsPage from "./Components/OccasionsPage";
import AdminDashboard from "./adminDashboard";
import Checkout from "./Pages/checkout";
import Product from "./adminPages/product";
import Complaints from "./adminPages/complaints";
import Orders from "./adminPages/orders";
import Customers from "./adminPages/customer";
import CalendarPage from "./adminPages/calendar";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/Signup" element={<Signup></Signup>} />
        <Route path="/OccasionsPage" element={<OccasionsPage></OccasionsPage>} />
        <Route path="/cart" element={<ShoppingCartPage/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard />} /> 
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/products" element={<Product />} />
        <Route path="/admin/complaints" element={<Complaints />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/calendar" element={<CalendarPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
