import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Expressive = forwardRef((props, expressiveRef) => {
    return (
        <div
            ref={expressiveRef}
            id="expressive"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Expressive
                </SectionDivider>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Expressive;