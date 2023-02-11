import './index.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='navbar_container'>
                <Link to="/" className='serviceName'>CAFE AROUND</Link>
                <div className='navLink_container'>
                    <Link to="/searchCafe" className='navLink'>카페 조회</Link>
                    <Link to="/addCafe" className='navLink'>카페 등록</Link>
                    <Link to="/login" className='navLink'>로그인</Link>
                </div>
            </div>
        </div>
    );
}