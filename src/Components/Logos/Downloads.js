import { forwardRef } from "react";

const Downloads = forwardRef((props, downloadsRef) => {
    return (
        <div
            ref={downloadsRef}
            id="downloads"
            className="section">
            Downloads
        </div>
    );
});

export default Downloads;