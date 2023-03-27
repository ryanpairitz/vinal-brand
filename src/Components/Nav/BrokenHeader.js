import HeaderLogo from "./HeaderLogo";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { RelativePaths } from "./RelativePaths";
import HeaderItem from "./HeaderItem";
import './Header.css';
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";

const BrokenHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const config = {
        mass: 3.0,
        tension: 510,
        friction: 52,
    };
    const style = useSpring({
        config: config,
        from: {
            opacity: scrolled ? 1 : 0,
            y: scrolled ? 0 : -166.5
        },
        to: {
            opacity: scrolled ? 0 : 1,
            y: scrolled ? -166.5 : 0
        }
    });
    const transition = useTransition(!scrolled, {
        config: config,
        from: {
            opacity: 0,
            y: -166.5
        },
        enter: {
            opacity: 1,
            y: 0
        },
        leave: {
            opacity: 0,
            y: -166.5
        },
        onDestroyed: () => setScrolled(scrolled)
    });
    const hamburgerTransition = useTransition(scrolled, {
        config: config,
        from: {
            opacity: 0,
            // y: -166.5
            scale: 0
        },
        enter: {
            opacity: 1,
            // y: 0
            scale: 1
        },
        leave: {
            opacity: 0,
            // y: -166.5
            scale: 1
        },
        onStart: () => setScrolled(false)
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

    return (
        <>
            <nav style={{ marginRight: scrolled && 0 }}>
                <HeaderLogo height={166.5} scrolled={scrolled} config={config} />
                {transition((style, content) => (
                    content &&
                    <animated.span style={style}>
                        <HeaderItem item={{
                            id: "home",
                            pathname: "/",
                            next: "/logos"
                        }} />
                    </animated.span>
                ))}
            </nav>
            <animated.nav style={style}>
                {RelativePaths.map((item, index) => (
                    item.id !== "home" &&
                    <HeaderItem item={item} isLast={(index + 1) === RelativePaths.length} key={index} />
                ))}
            </animated.nav>
            {hamburgerTransition((style, content) => (
                content &&
                <animated.span style={style}
                    className="hamburger-container"
                >
                    <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} style={{ width: "calc(55rem / 25.5)" }} />
                </animated.span>
            ))}
        </>
    );
}

export default BrokenHeader;