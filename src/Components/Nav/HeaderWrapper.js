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

    const colorStyle = useSpring({
        config: config,
        from: {
            backgroundColor: intersectingSection === "philosophy" ? "#161616" : location.pathname !== "/" ? "#161616" : "#2B060F"
        },
        to: {
            backgroundColor: intersectingSection === "philosophy" ? "#2B060F" : "#161616"
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