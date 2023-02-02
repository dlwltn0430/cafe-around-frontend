import './index.css';
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Navbar() {
    return (
        <div className='Navbar'>
            {/*<img src={logo} className='logo'></img>*/}
            <Link to="/" className='serviceName'>CAFE AROUND</Link>
            {/*<div className='navLink'>
                <Link to="/" className='navLink'>카페 조회</Link>
                <Link to="/" className='navLink'>로그인</Link>
            </div>*/}
        </div>
    );
}