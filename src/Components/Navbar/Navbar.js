import "./Navbar.css";

const Navbar = props => {

    const navbarLinkData = props.navbarLinkData;

    return (
        <div className="Navbar">
            <ul>{navbarLinkData.map((navbarLink, i) => (
                <li key={navbarLink + i}>
                    <a href="#">{navbarLink}</a>
                </li>
            ))}</ul>
        </div>
    )
}

export default Navbar;