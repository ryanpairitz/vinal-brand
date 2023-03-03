import { StyledHeader } from "./StyledHeader";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './vinal-logo-web.svg';
import { useState } from "react";
import { DropdownItems } from "./DropdownItems";

const Header = ({ location }) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";
    const dropdownLinkClass = "nav-link nav-dropdown-link";
    const initDropdowns = {
        dropdownHome: false,
        dropdownLogos: false,
        dropdownColors: false,
        dropdownTypography: false
    }

    const [dropdowns, setDropdowns] = useState(initDropdowns);
    // TODO: add useEffect with event listener to detect if the user scrolls
    // TODO: add function to animate the header once scrolled

    // TODO: make each NavLink animated w/ spring, from 0.75 to 1 opacity

    return (
        <StyledHeader pathname={location.pathname}>
            <span>
                <NavLink to="/">
                    <Logo width={168.1396} />
                </NavLink>
                <span
                    onMouseEnter={() => setDropdowns({ ...dropdowns, dropdownHome: !dropdowns.dropdownHome })}
                    onMouseLeave={() => setDropdowns({ ...dropdowns, dropdownHome: false })}
                    className="nav-item">
                    <NavLink to="/">
                        brand guide
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdowns.dropdownHome &&
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
                                }
                            })}
                        </ul>
                    }
                </span>
            </span>
            <div>
                <span
                    onMouseEnter={() => setDropdowns({ ...dropdowns, dropdownLogos: !dropdowns.dropdownLogos })}
                    onMouseLeave={() => setDropdowns({ ...dropdowns, dropdownLogos: false })}
                    className="nav-item">
                    <NavLink
                        to="logos"
                        className={({ isActive }) =>
                            isActive ? activeLinkClass : inactiveLinkClass
                        }>
                        logos
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdowns.dropdownLogos &&
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
                                }
                            })}
                        </ul>
                    }
                </span>
                <span
                    onMouseEnter={() => setDropdowns({ ...dropdowns, dropdownColors: !dropdowns.dropdownColors })}
                    onMouseLeave={() => setDropdowns({ ...dropdowns, dropdownColors: false })}
                    className="nav-item">
                    <NavLink
                        to="colors"
                        className={({ isActive }) =>
                            isActive ? activeLinkClass : inactiveLinkClass
                        }>
                        colors
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdowns.dropdownColors &&
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
                                }
                            })}
                        </ul>
                    }
                </span>
                <span
                    onMouseEnter={() => setDropdowns({ ...dropdowns, dropdownTypography: !dropdowns.dropdownTypography })}
                    onMouseLeave={() => setDropdowns({ ...dropdowns, dropdownTypography: false })}
                    className="nav-item">
                    <NavLink
                        to="typography"
                        className={({ isActive }) =>
                            isActive ? activeLinkClass : inactiveLinkClass
                        }>
                        typography
                    </NavLink>
                    {/* when associated dropdown is true, show dropdown */}
                    {dropdowns.dropdownTypography &&
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
                                }
                            })}
                        </ul>
                    }
                </span>
            </div>
        </StyledHeader>
    );
}

export default Header;