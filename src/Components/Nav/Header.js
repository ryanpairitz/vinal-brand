import HeaderLogo from "./HeaderLogo";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { RelativePaths } from "./RelativePaths";
import HeaderItem from "./HeaderItem";
import './Header.css';
import { useEffect, useLayoutEffect, useState } from "react";
import Hamburger from "./Hamburger";
import HeaderWrapper from "./HeaderWrapper";
import HeaderMenu from "./HeaderMenu";

const BrokenHeader = ({ location }) => {
    const height = 166.5;
    const scalar = 0.85;
    const minimize = () => window.scrollY >= height * 0.618;
    const shouldBeCondensed = () => window.innerWidth < 744;
    const config = {
        mass: 3.0,
        tension: 510,
        friction: 52,
    };
    const transitionSettings = {
        config: config,
        from: {
            opacity: 0,
            y: -1 * height
        },
        enter: {
            opacity: 1,
            y: 0
        },
        leave: {
            opacity: 0,
            y: -1 * height
        }
    };

    const [scrolled, setScrolled] = useState(minimize);
    const [openMenu, setOpenMenu] = useState(false);
    const [condense, setCondense] = useState(shouldBeCondensed);
    const transition = useTransition(!(scrolled || condense), {
        ...transitionSettings,
        // onDestroyed: () => setScrolled(scrolled)
    });
    const titleTransition = useTransition(!scrolled, {
        ...transitionSettings
    });
    const hamburgerTransition = useTransition((scrolled || condense), {
        config: config,
        from: {
            opacity: 0,
            scale: 0
        },
        enter: {
            opacity: 1,
            scale: 1
        },
        leave: {
            opacity: 0,
            scale: 0
        },
        // onStart: () => setScrolled(false)
    });
    const hamburgerStyle = useSpring({
        config: config,
        from: {
            height: scrolled ? height : height * scalar,
        },
        to: {
            height: scrolled ? height * scalar : height,
        }
    });

    useLayoutEffect(() => {
        const updateHeader = () => setScrolled(minimize);
        window.addEventListener('scroll', updateHeader);
        return () =>
            window.removeEventListener('scroll', updateHeader);
    });

    useLayoutEffect(() => {
        const handleResize = () => setCondense(shouldBeCondensed);
        window.addEventListener('resize', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);
    });

    useEffect(() => {
        if (!scrolled && !condense && openMenu)
            setOpenMenu(false)
    }, [scrolled, condense, openMenu]);

    const toggleOpenMenu = () => setOpenMenu(!openMenu);

    return (
        <HeaderWrapper location={location} height={height} scalar={scalar} scrolled={scrolled} condense={condense} config={config}>
            <nav style={{ marginRight: (scrolled || condense) && 0 }}>
                <HeaderLogo height={height} scalar={scalar} scrolled={scrolled} config={config} transitionSettings={transitionSettings} />
                {titleTransition((style, content) => (
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
            {transition((style, content) => (
                content &&
                <animated.nav style={style}>
                    {RelativePaths.map((item, index) => (
                        item.id !== "home" &&
                        <HeaderItem item={item} isLast={(index + 1) === RelativePaths.length} key={index} />
                    ))}
                </animated.nav>
            ))}
            {hamburgerTransition((style, content) => (
                content &&
                <animated.span style={{...style, ...hamburgerStyle}} className="hamburger-container">
                    <Hamburger openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
                </animated.span>
            ))}
            <HeaderMenu openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} condense={condense} headerHeight={height * scalar} config={config} />
        </HeaderWrapper>
    );
}

export default BrokenHeader;