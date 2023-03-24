import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import AnimatedCard from "./AnimatedCard";
import ColorDetails from "./ColorDetails";
import { ExpressiveSwatches } from "./ColorSwatches";
import { isLight } from "./lightnessChecker";

const Expressive = forwardRef((props, expressiveRef) => {
    return (
        <section
            ref={expressiveRef}
            id="expressive">
            <div className="container sub">
                <SectionDivider>
                    Expressive
                </SectionDivider>
                <p>
                    To craft intriguing palettes for expressive moments, select any of the following color swatches. 
                    &#40;This is just a sample set for inspiration; creative expression is not limited to these specific colors.&#41;
                </p>
                <div className="card-container color-container">
                    {ExpressiveSwatches.map((color, index) => (
                        <AnimatedCard
                            index={index}
                            style={{
                                backgroundColor: color.hex,
                                color: isLight(color.hex) ? "var(--black-carbon)" : "white"
                            }}
                            className="card color expressive"
                            hoverContent={
                                <ColorDetails color={color}/>
                            }>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Expressive;