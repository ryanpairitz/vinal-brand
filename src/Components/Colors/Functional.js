import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import AnimatedCard from "./AnimatedCard";
import ColorDetails from "./ColorDetails";
import { FunctionalSwatches } from "./ColorSwatches";
import { isLight } from "./lightnessChecker";

const Functional = forwardRef((props, functionalRef) => {
    return (
        <section
            ref={functionalRef}
            id="functional">
            <div className="container sub">
                <SectionDivider>
                    Functional
                </SectionDivider>
                <div className="card-container color-container">
                    {FunctionalSwatches.map((color, index) => (
                        <AnimatedCard
                            key={index}
                            style={{
                                backgroundColor: color.hex,
                                color: isLight(color.hex) ? "var(--black-carbon)" : "white",
                                borderWidth: color.title !== "Black Carbon" && 0
                            }}
                            className="card color"
                            hoverContent={
                                <p
                                    style={{
                                        color: "inherit",
                                        lineHeight: '1em'
                                    }}
                                    className="light">
                                    {color.description}
                                </p>
                            }
                            hoverContentClassName="light">
                            <ColorDetails color={color} />
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Functional;