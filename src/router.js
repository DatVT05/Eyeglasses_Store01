import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTERS } from "./utils/router";
//User
import HomePage from 'pages/users/homePage/HomePage';
import MasterLayout from "./pages/users/theme/masterLayout/masterLayout";
import LoginPage from "./pages/users/loginPage/LoginPage";
import ProfilePage from 'pages/users/profilePage/ProfilePage';
import Comment from 'pages/Comment/CommentPage';
//Admin
import AdminLogin from 'pages/users/adminPage/AdminLogin';
import AdminDashboard from 'pages/users/adminPage/AdminDashboard';
//Cart
import CartPage from './pages/Cart/CartPage';
import BlankCartPage from 'pages/Cart/BlankCartPage';
import ProductInfo from './pages/Products/ProductInfo';
//Order
import OrderDetails from './pages/Order/OrderDetails';
import OrderStatus from './pages/Order/OrderStatus';
import OrderTrackingPage from './pages/Order/OrderTrackingPage';
//Policies
import PaymentPolicyPage from './pages/Policies/PaymentPolicyPage';
import ShippingPolicyPage from './pages/Policies/ShippingPolicyPage';
import WarrantyPolicyPage from './pages/Policies/WarrantyPolicyPage';
import ReturnPolicyPage from "./pages/Policies/ReturnPolicyPage";
import ExchangePolicyPage from "./pages/Policies/ExchangePolicyPage";
import CleaningPolicyPage from './pages/Policies/CleaningPolicyPage';
//Products
import GlassesFramePage from "./pages/Products/GlassesFramePage";
import LensPage from "pages/Products/LensPage";
import SunGlassesPage from "pages/Products/SunGlassesPage";
import SunGlassesKidPage from "pages/Products/SunGlassesKidPage";
import PaymentPage from 'pages/Payment/PaymentPage';
import PromotionsPage from 'Promotions/PromotionsPage';

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
            path: ROUTERS.USER.PROMOTIONS,
            component: <PromotionsPage />
        },
        {
            path: ROUTERS.USER.COMMENT,
            component: <Comment />
        },
        {
            path: ROUTERS.USER.ADMIN_LOGIN,
            component: <AdminLogin />
        },
        {
            path: ROUTERS.USER.ADMIN_DASHBOARD,
            component: <AdminDashboard />
        },
        {
            path: ROUTERS.USER.CART,
            component: <CartPage />
        },
        {
            path: ROUTERS.USER.BLANKCART,
            component: <BlankCartPage />
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
            path: ROUTERS.USER.ORDER_DETAIL,
            component: <OrderDetails />
        },
        {
            path: ROUTERS.USER.ORDER_STATUS,
            component: <OrderStatus />
        },
        {
            path: ROUTERS.USER.ORDER_TRACKING,
            component: <OrderTrackingPage />
        },
        {
            path: ROUTERS.USER.GLASSES,
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
