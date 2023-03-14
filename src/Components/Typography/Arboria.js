import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Arboria = forwardRef((props, arboriaRef) => {
    return (
        <div
            ref={arboriaRef}
            id="arboria"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Arboria
                </SectionDivider>
                <p>
                    Arboria is our most dynamic typeface, used for longer headings, body text, and text sized smaller than 16 pt.
                </p>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Arboria;