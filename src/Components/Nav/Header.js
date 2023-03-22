import { StyledHeader } from "./StyledHeader";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './vinal-logo-web.svg';
import { useState } from "react";
import { DropdownItems } from "./DropdownItems";
import { animated, useTransition } from "@react-spring/web";

const Header = ({ location }) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";
    const dropdownLinkClass = "nav-link nav-dropdown-link";

    const [dropdownHome, setDropdownHome] = useState(false);
    const [dropdownLogos, setDropdownLogos] = useState(false);
    const [dropdownColors, setDropdownColors] = useState(false);
    const [dropdownTypography, setDropdownTypography] = useState(false);

    const config = {
        config: {
            mass: 3.0,
            tension: 510,
            friction: 52,
        },
        from: { opacity: 0 },
        enter: { opacity: 1 },
    };
    const transitionHome = useTransition(dropdownHome, config);
    const transitionLogos = useTransition(dropdownLogos, config);
    const transitionColors = useTransition(dropdownColors, config);
    const transitionTypography = useTransition(dropdownTypography, config);

    // TODO: add useEffect with event listener to detect if the user scrolls
    // TODO: add function to animate the header once scrolled

    // TODO: make each NavLink animated w/ spring, from 0.75 to 1 opacity

    return (
        <StyledHeader pathname={location.pathname}>
            <span>
                <NavLink to="/">
                    <Logo width={168.1396} style={{ display: "block" }} />
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
                    {transitionHome((style, item) => (
                        item &&
                        <animated.ul style={style}
                            className="nav-dropdown nav-dropdown-first">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </animated.ul>
                    ))}
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
                    {transitionLogos((style, item) => (
                        item &&
                        <animated.ul style={style}
                            className="nav-dropdown">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/logos") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </animated.ul>
                    ))}
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
                    {transitionColors((style, item) => (
                        item &&
                        <animated.ul style={style}
                            className="nav-dropdown">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/colors") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </animated.ul>
                    ))}
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
                    {transitionTypography((style, item) => (
                        item &&
                        <animated.ul style={style}
                            className="nav-dropdown nav-dropdown-last">
                            {DropdownItems.map((item, index) => {
                                if (item.path.substring(0, item.path.indexOf('#')) === "/typography") {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={dropdownLinkClass}>
                                                {item.id}
                                            </NavLink>
                                        </li>
                                    )
                                } else return null;
                            })}
                        </animated.ul>
                    ))}
                </span>
            </div>
        </StyledHeader>
    );
}

export default Header;