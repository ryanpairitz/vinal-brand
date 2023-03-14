import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Functional = forwardRef((props, functionalRef) => {
    return (
        <div
            ref={functionalRef}
            id="functional"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Functional
                </SectionDivider>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Functional;