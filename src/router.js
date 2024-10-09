import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";  // Uppercase import
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout/masterLayout";
import ProfilePage from "./pages/users/profilePage";  // Assume this is correct

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />  // JSX component with uppercase H
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
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
