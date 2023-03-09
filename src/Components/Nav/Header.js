import { StyledHeader } from "./StyledHeader";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './vinal-logo-web.svg';
import { useState } from "react";
import { DropdownItems } from "./DropdownItems";

const Header = ({ location }) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";
    const dropdownLinkClass = "nav-link nav-dropdown-link";

    const [dropdownHome, setDropdownHome] = useState(false);
    const [dropdownLogos, setDropdownLogos] = useState(false);
    const [dropdownColors, setDropdownColors] = useState(false);
    const [dropdownTypography, setDropdownTypography] = useState(false);

    // TODO: add useEffect with event listener to detect if the user scrolls
    // TODO: add function to animate the header once scrolled

    // TODO: make each NavLink animated w/ spring, from 0.75 to 1 opacity

    return (
        <StyledHeader pathname={location.pathname}>
            <span>
                <NavLink to="/">
                    <Logo width={168.1396} style={{display: "block"}} />
                </NavLink>
                <span
                    onMouseEnter={() => setDropdownHome(!dropdownHome)}
                    onMouseLeave={() => setDropdownHome(false)}
                    className="nav-item"
                    id="dropdownHome">
                    <NavLink to="/" className="nav-title">
                        brand guide
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdownHome &&
                        <ul className="nav-dropdown nav-dropdown-first">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                id={item.id}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </ul>
                    }
                </span>
            </span>
            <div>
                <span
                    onMouseEnter={() => setDropdownLogos(!dropdownLogos)}
                    onMouseLeave={() => setDropdownLogos(false)}
                    className="nav-item"
                    id="dropdownLogos">
                    <NavLink
                        to="logos"
                        className={({ isActive }) =>
                            isActive ? activeLinkClass : inactiveLinkClass
                        }>
                        logos
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdownLogos &&
                        <ul className="nav-dropdown">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/logos") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                id={item.id}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </ul>
                    }
                </span>
                <span
                    onMouseEnter={() => setDropdownColors(!dropdownColors)}
                    onMouseLeave={() => setDropdownColors(false)}
                    className="nav-item"
                    id="dropdownColors">
                    <NavLink
                        to="colors"
                        className={({ isActive }) =>
                            isActive ? activeLinkClass : inactiveLinkClass
                        }>
                        colors
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdownColors &&
                        <ul className="nav-dropdown">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/colors") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                id={item.id}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </ul>
                    }
                </span>
                <span
                    onMouseEnter={() => setDropdownTypography(!dropdownTypography)}
                    onMouseLeave={() => setDropdownTypography(false)}
                    className="nav-item"
                    id="dropdownTypography">
                    <NavLink
                        to="typography"
                        className={({ isActive }) =>
                            isActive ? activeLinkClass : inactiveLinkClass
                        }>
                        typography
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdownTypography &&
                        <ul className="nav-dropdown nav-dropdown-last">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/typography") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                id={item.id}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </ul>
                    }
                </span>
            </div>
        </StyledHeader>
    );
}

export default Header;