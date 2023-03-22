import { SwatchSettings } from "./Swatches";

const Swatch = ({ swatch, activeSwatch, handleSelect }) => {
    const borderColor = swatch === activeSwatch ? "var(--warm-neutral)" : "#535353";

    return (
        <span 
            style={{
                background: SwatchSettings[swatch].background,
                borderColor: borderColor,
                transform: swatch === activeSwatch ? "scale(1.09)" : "scale(1)"
            }}
            onClick={handleSelect}
            className="swatch"/>
    );
};

export default Swatch;