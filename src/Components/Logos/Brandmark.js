import { forwardRef } from "react";

const Brandmark = forwardRef((props, brandmarkRef) => {
    return (
        <div
            ref={brandmarkRef}
            id="brandmark"
            className="section">
            Brandmark
        </div>
    );
});

export default Brandmark;