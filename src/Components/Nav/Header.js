import { StyledHeader } from "./StyledHeader";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './vinal-logo-web.svg';
import { useEffect, useState } from "react";
import { animated, useTransition, useSpring } from "@react-spring/web";
import HeaderLogo from "./HeaderLogo";
import HeaderItem from "./HeaderItem";
import { RelativePaths } from "./RelativePaths";

const Header = ({ location }) => {
    const [scrolled, setScrolled] = useState(false);
    const transitionDisappear = useTransition(scrolled, {
        config: {
            mass: 3.0,
            tension: 510,
            friction: 52,
        },
        from: { opacity: scrolled ? 0 : 1 },
        enter: { opacity: scrolled ? 1 : 0 },
        // leave: { opacity: scrolled ? 0 : 1 },
    });
    const style = useSpring({
        from: { backgroundColor: scrolled ? "var(--black-carbon)" : "transparent" },
        to: { backgroundColor: scrolled ? "transparent" : "var(--black-carbon)" },
    })

    useEffect(() => {
        window.addEventListener('scroll', updateHeader);
        return () => {
            window.removeEventListener('scroll', updateHeader);
        }
    });

    const updateHeader = () => {
        if (window.scrollY >= 165)
            setScrolled(true);
        else
            setScrolled(false);
    };

    // TODO: make each NavLink animated w/ spring, from 0.75 to 1 opacity

    return (
        <StyledHeader pathname={location.pathname}>
            <span>
                <NavLink to="/">
                    {/* <Logo width={168.1396} style={{ display: "block" }} /> */}
                    <HeaderLogo width={168.1396} />
                </NavLink>
                <animated.span>
                    <HeaderItem item={{
                        id: "home",
                        pathname: "/",
                        next: "/logos"
                    }} />
                </animated.span>
            </span>
            <div>
                {RelativePaths.map((item, index) => (
                    item.id !== "home" &&
                    // transitionDisappear((style, content) => (
                    //     content &&
                    //     <animated.span key={index} style={style}>
                    //         <HeaderItem item={item} />
                    //     </animated.span>
                    // ))
                    <animated.span key={index}>
                        <HeaderItem item={item} />
                    </animated.span>
                ))}
            </div>
        </StyledHeader>
    );
}

export default Header;