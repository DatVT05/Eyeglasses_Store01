import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/users/homePage"; 
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout/masterLayout";
import ProfilePage from "./pages/users/profilePage"; 
import LoginPage from "./pages/users/loginPage/LoginPage";
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPolicyPage from './pages/Policies/PaymentPolicyPage';
import ShippingPolicyPage from './pages/Policies/ShippingPolicyPage';
import WarrantyPolicyPage from './pages/Policies/WarrantyPolicyPage';
import ReturnPolicyPage from "./pages/Policies/ReturnPolicyPage";
import ExchangePolicyPage from "./pages/Policies/ExchangePolicyPage";
import ProductInfo from './pages/Products/ProductInfo';
import OrderTrackingPage from './pages/Order/OrderTrackingPage';
import CleaningPolicyPage from './pages/Policies/CleaningPolicyPage';
import GlassesFramePage from "./pages/Products/GlassesFramePage";
import LensPage from "pages/Products/LensPage";
import SunGlassesPage from "pages/Products/SunGlassesPage";
import SunGlassesKidPage from "pages/Products/SunGlassesKidPage";
import PaymentPage from 'pages/Payment/PaymentPage';


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />  
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.LOGINPAGE,
            component: <LoginPage />
        },
        {
            path: ROUTERS.USER.CART,
            component: <CartPage />
        },
        {
            path: ROUTERS.USER.CHECKOUT,
            component: <CheckoutPage />
        },
        {
            path: ROUTERS.USER.CLEAN_POLICY,
            component: <CleaningPolicyPage />
        },
        {
            path: ROUTERS.USER.PAYMENT_POLICY,
            component: <PaymentPolicyPage />
        },
        {
            path: ROUTERS.USER.SHIPPING_POLICY,
            component: <ShippingPolicyPage />
        },
        {
            path: ROUTERS.USER.RETURN_POLICY,
            component: <ReturnPolicyPage />
        },
        {
            path: ROUTERS.USER.WARRANTY_POLICY,
            component: <WarrantyPolicyPage />
        },
        {
            path: ROUTERS.USER.EXCHANGE_POLICY,
            component: <ExchangePolicyPage />
        },
        {
            path: ROUTERS.USER.PRODUCT_INFO,
            component: <ProductInfo />
        },
        {
            path: ROUTERS.USER.ORDER_TRACKING,
            component: <OrderTrackingPage />
        },
        {
            path: ROUTERS.USER.GlASSES,
            component: <GlassesFramePage />
        },
        {
            path: ROUTERS.USER.LENS,
            component: <LensPage />
        },
        {
            path: ROUTERS.USER.SUNGLASSES,
            component: <SunGlassesPage />
        },
        {
            path: ROUTERS.USER.SUNGLASSESKID,
            component: <SunGlassesKidPage />
        },
        {
            path: ROUTERS.USER.PAYMENT,
            component: <PaymentPage />
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
