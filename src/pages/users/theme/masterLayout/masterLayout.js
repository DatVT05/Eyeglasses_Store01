import { memo } from "react";
import Footer from "../footer/footet.js";
import Header from "../header/header.js";

const masterLayout = ({children, ...props}) => {
    return(<div {...props}>
        <Header />
        {children}
        <Footer />
        </div>
        );
}

export default memo(masterLayout);