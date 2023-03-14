import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Brandmark = forwardRef((props, brandmarkRef) => {
    return (
        <div
            ref={brandmarkRef}
            id="brandmark"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Brandmark
                </SectionDivider>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Brandmark;