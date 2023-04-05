import { SwatchSettings } from "./Swatches";
import { animated, useSpring } from "@react-spring/web";

const Swatch = ({ swatch, activeSwatch, handleSelect }) => {
    const borderColor = swatch === activeSwatch ? "var(--warm-neutral)" : "#535353";

    const swatchStyles = useSpring({
        config: {
            mass: 3.0,
            tension: 510,
            friction: 39,
        },
        to: {
            scale: swatch === activeSwatch ? 1.0557 : 1
        }
    });

    return (
        <animated.span 
            style={{...{
                background: SwatchSettings[swatch].background,
                borderColor: borderColor,
            },...swatchStyles}}
            onClick={handleSelect}
            className="swatch"/>
    );
};

export default Swatch;