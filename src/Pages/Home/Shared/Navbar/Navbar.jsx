import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.svg"


const Navbar = () => {
    const navbar = <>
       <li><Link to ="/">Home</Link></li>
       <li><a>About</a></li>
       <li><a>Services</a></li>
       <li><a>Blog</a></li>
       <li><a>contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navbar}
                    </ul>
                </div>
                <Link to="/">
                    <img className="h-10" src={Logo} alt="" />
                    </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                  {navbar}
                   
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;