import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Downloads = forwardRef((props, downloadsRef) => {
    return (
        <div
            ref={downloadsRef}
            id="downloads"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Downloads
                </SectionDivider>
                <p>
                    Below are official downloads for you to include the simplified Vinal brandmark on your own webpage, app, or link-in-bio tool, alongside other social icons.
                </p>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Downloads;