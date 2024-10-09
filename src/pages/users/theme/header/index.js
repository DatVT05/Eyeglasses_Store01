import { memo } from "react";
import "./style.scss";
import { CiFacebook, CiInstagram, CiSearch, CiTwitter, CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { formatter } from "../../../../utils/fomater";

const Header = () => {
    return(
     <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-6 header_top_left">
                    <ul>
                    <li><AiOutlineMail />
                    <span>Hello_niggar@gmail.com</span></li>
                    <li>Miễn phí giao hàng đơn từ {formatter(500000)} </li>
                    </ul>
                </div>
                <div className="col-6 header_top_right">
                    <ul>
                        <li><link to={""}><CiFacebook /></link></li>
                        <li><link to={""}><CiInstagram /></link></li>
                        <li><link to={""}><CiSearch /></link></li>
                        <li><link to={""}><CiTwitter /></link></li>
                        <li>
                            <link to={""}><CiUser /></link>
                            <span>Đăng nhập</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </div>   
    
);
}

export default memo(Header);