import HeaderLogo from "./HeaderLogo";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { RelativePaths } from "./RelativePaths";
import HeaderItem from "./HeaderItem";
import './Header.css';
import { useEffect, useLayoutEffect, useState } from "react";
import Hamburger from "./Hamburger";
import HeaderWrapper from "./HeaderWrapper";
import HeaderMenu from "./HeaderMenu";

const minUnwrappedWidth = 758.7;

const Header = ({ location, intersectingSection }) => {
    const scalar = 0.85;
    const config = {
        mass: 3.0,
        tension: 510,
        friction: 52,
    };
    const [windowSize, setWindowSize] = useState(getWindowSize);
    const [height, setHeight] = useState(determineHeight(windowSize.innerWidth));
    const minimize = () => window.scrollY >= height * 0.618;
    const [scrolled, setScrolled] = useState(minimize);
    const [openMenu, setOpenMenu] = useState(false);
    const [condense, setCondense] = useState(false);
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
    const transition = useTransition(!(scrolled || condense), transitionSettings);
    const titleTransition = useTransition(!scrolled, transitionSettings);
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
        }
    });
    const { size } = useSpring({
        config: config,
        from: {
            size: scrolled ? (height) : (height * scalar),
        },
        to: {
            size: scrolled ? (height * scalar) : (height),
        }
    });
    const scaleStyle = useSpring({
        config: config,
        from: {
            scale: scrolled ? 1 : scalar,
        },
        to: {
            scale: scrolled ? scalar : 1,
        }
    })

    useLayoutEffect(() => {
        const updateHeader = () => setScrolled(minimize);
        window.addEventListener('scroll', updateHeader);
        return () =>
            window.removeEventListener('scroll', updateHeader);
    });
    useLayoutEffect(() => {
        const handleResize = () => setWindowSize(getWindowSize);
        window.addEventListener('resize', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);
    });
    useEffect(() => {
        if (!scrolled && !condense && openMenu)
            setOpenMenu(false)
    }, [scrolled, condense, openMenu]);
    useEffect(() => {
        setCondense(windowSize.innerWidth < minUnwrappedWidth);
        setHeight(determineHeight(windowSize.innerWidth));
    },[windowSize]);

    const toggleOpenMenu = () => setOpenMenu(!openMenu);

    return (
        <HeaderWrapper location={location} size={size} 
            condense={condense} config={config} intersectingSection={intersectingSection}>
            <nav style={{ height: height, marginRight: (scrolled || condense) && 0 }}>
                <HeaderLogo height={height} scaleStyle={scaleStyle} scrolled={scrolled} config={config} transitionSettings={transitionSettings} />
                {titleTransition((style, content) => (
                    content &&
                    <animated.span style={style}>
                        <HeaderItem item={{
                            id: "home",
                            pathname: "/",
                            next: "/logos"
                        }} condense={condense}/>
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
                <animated.span style={{ ...style, ...scaleStyle, height: height, transformOrigin: "top center" }} className="hamburger-container">
                    <Hamburger openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
                </animated.span>
            ))}
            <HeaderMenu openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} condense={condense} headerHeight={height * scalar} config={config} />
        </HeaderWrapper>
    );
}

const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}
const determineHeight = (windowWidth) => {
    if (windowWidth <= minUnwrappedWidth)
        return 166.5 / 1.618;
    else
        return 166.5;
}

export default Header;