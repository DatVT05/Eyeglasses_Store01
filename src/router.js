import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage"; 
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout/masterLayout";
import ProfilePage from "./pages/users/profilePage"; 
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPolicyPage from './pages/Policies/PaymentPolicyPage';
import ShippingPolicyPage from './pages/Policies/ShippingPolicyPage';
import WarrantyPolicyPage from './pages/Policies/WarrantyPolicyPage';
import ProductInfo from './pages/Products/ProductInfo';

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
            path: ROUTERS.USER.CART,
            component: <CartPage />
        },
        {
            path: ROUTERS.USER.CHECKOUT,
            component: <CheckoutPage />
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
            path: ROUTERS.USER.PRODUCT_INFO,
            component: <ProductInfo />
        },
        {
            path: ROUTERS.USER.WARRANTY_POLICY,
            component: <WarrantyPolicyPage />
        }
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
