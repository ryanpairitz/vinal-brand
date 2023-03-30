import { animated, useSpring } from "@react-spring/web";

const HeaderWrapper = ({ location, height, scalar, scrolled, condense, config, children }) => {
    const style = useSpring({
        config: config,
        from: {
            height: scrolled ? height : height * scalar,
        },
        to: {
            height: scrolled ? height * scalar : height,
        }
    })
    
    return (
        condense ? 
        <animated.div
            style={{
                ...style,
                position: "fixed",
                zIndex: 998,
                width: "100%",
                backgroundColor: location.pathname === '/' ? "var(--deep-depression-cherry)" : "var(--black-carbon)"
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