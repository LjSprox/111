import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";

const Header = (props) => {
    return (
        <div className="Header">
            <h1>{props.headerTitle}</h1>
            <Navbar navbarLinkData={props.navbarLinkData}/>        
        </div>
    );
};

export default Header;
