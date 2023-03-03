import { forwardRef } from "react";

const Logo = forwardRef((props, logoRef) => {
    return (
        <div
            ref={logoRef}
            id="logo"
            className="section">
            Logo
        </div>
    );
});

export default Logo;