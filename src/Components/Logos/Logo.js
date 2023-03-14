import { forwardRef } from "react";
import SectionDivider from "../SectionDivider.js";

const Logo = forwardRef((props, logoRef) => {
    return (
        <div
            ref={logoRef}
            id="logo"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Logo
                </SectionDivider>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Logo;