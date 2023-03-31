import { animated, useSpring } from "@react-spring/web";

const HeaderWrapper = ({ location, height, scalar, scrolled, condense, config, intersectingSection, children }) => {
    const style = useSpring({
        config: config,
        from: {
            height: scrolled ? height : height * scalar,
        },
        to: {
            height: scrolled ? height * scalar : height,
        }
    });

    const colorStyle = useSpring(condense && {
        config: config,
        from: {
            backgroundColor: (intersectingSection === "philosophy") ? "var(--black-carbon)" : location.pathname !== "/" ? "var(--black-carbon)" : "var(--deep-depression-cherry)"
        },
        to: {
            backgroundColor: (intersectingSection === "philosophy") ? "var(--deep-depression-cherry)" : "var(--black-carbon)"
        }
    });
    
    return (
        condense ? 
        <animated.div
            style={{
                ...style,
                ...colorStyle,
                position: "fixed",
                zIndex: 998,
                width: "100%",
            }}
        >
            {children}
        </animated.div>
        :
        <>
            {children}
        </>
    );
}

export default HeaderWrapper;