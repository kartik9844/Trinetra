import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TryHomePage from "./pages/TryHomePage";
import Smart from "./pages/Smart";
import Mech from "./pages/Mech";
import D from "./pages/D";
import AddProduct from "./pages/AddProduct";
import RentedUser from "./pages/RentedUser";
import UMechLab from "./pages/UMechLab";
import USmartLab from "./pages/USmartLab";
import UserProfile from "./pages/UserProfile";
import OnRentUser from "./pages/OnRentUser";
import U3dlab from "./pages/U3dlab";
import AdminProfile from "./pages/AdminProfile";
import UserprofileAdmin from "./pages/UserprofileAdmin";
import Payments from "./pages/Payments";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import UserHome from "./pages/UserHome";
import WhenClicked from "./pages/WhenClicked";
import AdminTry from "./pages/AdminTry";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import UserLogin from "./pages/UserLogin";
import RegisterFrom from "./pages/RegisterFrom";
import SignUp from "./pages/SignUp";
import AdminLogin from "./pages/AdminLogin";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/smart":
        title = "";
        metaDescription = "";
        break;
      case "/mech":
        title = "";
        metaDescription = "";
        break;
      case "/3d":
        title = "";
        metaDescription = "";
        break;
      case "/add-product":
        title = "";
        metaDescription = "";
        break;
      case "/rented-user":
        title = "";
        metaDescription = "";
        break;
      case "/u-mech-lab":
        title = "";
        metaDescription = "";
        break;
      case "/u-smart-lab":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/-on-rent-user":
        title = "";
        metaDescription = "";
        break;
      case "/u-3dlab":
        title = "";
        metaDescription = "";
        break;
      case "/admin-profile":
        title = "";
        metaDescription = "";
        break;
      case "/userprofile-admin":
        title = "";
        metaDescription = "";
        break;
      case "/payments":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/user-home":
        title = "";
        metaDescription = "";
        break;
      case "/when-clicked":
        title = "";
        metaDescription = "";
        break;
      case "/admin-try":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
      case "/user-login":
        title = "";
        metaDescription = "";
        break;
      case "/register-from":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/admin-login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TryHomePage />} />
      <Route path="/smart" element={<Smart />} />
      <Route path="/mech" element={<Mech />} />
      <Route path="/3d" element={<D />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/rented-user" element={<RentedUser />} />
      <Route path="/u-mech-lab" element={<UMechLab />} />
      <Route path="/u-smart-lab" element={<USmartLab />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/-on-rent-user" element={<OnRentUser />} />
      <Route path="/u-3dlab" element={<U3dlab />} />
      <Route path="/admin-profile" element={<AdminProfile />} />
      <Route path="/userprofile-admin" element={<UserprofileAdmin />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/user-home" element={<UserHome />} />
      <Route path="/when-clicked" element={<WhenClicked />} />
      <Route path="/admin-try" element={<AdminTry />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/register-from" element={<RegisterFrom />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
}
export default App;
