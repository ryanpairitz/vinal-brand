import { animated, useTransition } from "@react-spring/web";
import { Link, NavLink } from "react-router-dom";
import { DropdownItems } from "./DropdownItems";
import { RelativePaths } from "./RelativePaths";

const HeaderMenu = ({ openMenu, toggleOpenMenu, condense, headerHeight, config }) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";

    const transition = useTransition(openMenu, {
        config: {
            ...config,
            clamp: true
        },
        from: {
            opacity: 0,
            x: 233
        },
        enter: {
            opacity: 1,
            x: 0
        },
        leave: {
            opacity: 0,
            x: 233
        }
    });

    return (
        transition((style, content) =>
            content &&
            <animated.div style={{
                ...style,
                width: condense && "100vw"
            }}
                className="menu">
                {RelativePaths.map((item, index) => (
                    <>
                        <NavLink to={item.pathname}
                            onClick={toggleOpenMenu}
                            className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                            style={{
                                marginTop: index === 0 && headerHeight / 2
                            }}>
                            {item.id === "home" ? "cover" : item.id}
                        </NavLink>
                        {DropdownItems.map((subitem, subindex) => {
                            if (subitem.path.substring(0, subitem.path.indexOf('#')) === item.pathname) {
                                return (
                                    <Link
                                        to={subitem.path}
                                        onClick={toggleOpenMenu}
                                        className="nav-link link-sub"
                                        style={{
                                            marginBottom: (index + 1 === RelativePaths.length && subindex + 1 === DropdownItems.length) && headerHeight / 2
                                        }}>
                                        {subitem.id.replace('-', ' ')}
                                    </Link>
                                )
                            } else return null;
                        })}
                    </>
                ))}
            </animated.div>
        )
    );
}

export default HeaderMenu;