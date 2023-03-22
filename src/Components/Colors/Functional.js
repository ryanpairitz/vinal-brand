import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import ColorCard from "./ColorCard";
import { FunctionalSwatches } from "./FunctionalSwatches";

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
                    {FunctionalSwatches.map((color, index) => {
                        return (
                            <ColorCard key={index} color={color}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
});

export default Functional;