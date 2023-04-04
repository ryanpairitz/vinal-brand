import { animated, useTransition } from "@react-spring/web";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DropdownItems } from "./DropdownItems";

const HeaderItem = ({ item, isLast, condense }) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";
    const containerClass = "nav-item";
    const dropdownContainerClass = isLast ? "nav-dropdown nav-dropdown-last" : "nav-dropdown";
    
    const config = {
        config: {
            mass: 3.0,
            tension: 510,
            friction: 52,
        },
        from: { opacity: 0 },
        enter: { opacity: 1 },
    };
    const [dropdown, setDropdown] = useState(false);
    const transition = useTransition(dropdown, config);

    return (
        <span
            onMouseEnter={() => setDropdown(!dropdown)}
            onMouseLeave={() => setDropdown(false)}
            onClick={() => setDropdown(false)}
            className={containerClass}>
            <NavLink to={item.pathname} className={({ isActive }) =>
                item.id === "home" ? "nav-title" :
                    isActive ? activeLinkClass : inactiveLinkClass
            }>
                {item.id === "home" ? "brand guide" : item.id}
            </NavLink>
            {/* when associated dropdown is true, show dropdown */}
            {!condense && transition((style, show) => (
                show &&
                <animated.ul style={style}
                    className={dropdownContainerClass}>
                    {DropdownItems.map((subitem, index) => {
                        if (subitem.path.substring(0, subitem.path.indexOf('#')) === item.pathname) {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={subitem.path}
                                        className="nav-link nav-dropdown-link">
                                        {subitem.id.replace('-', ' ')}
                                    </NavLink>
                                </li>
                            )
                        } else return null;
                    })}
                </animated.ul>
            ))}
        </span>
    );
}

export default HeaderItem;