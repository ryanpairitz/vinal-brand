import { animated, useSpring } from "@react-spring/web";

const HeaderWrapper = ({ location, size, condense, config, intersectingSection, children }) => {
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
            className="header-container"
            style={{
                ...colorStyle,
                height: size,
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