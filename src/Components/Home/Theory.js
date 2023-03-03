import { forwardRef } from "react";

const Theory = forwardRef((props, theoryRef) => {
    return (
        <div
            ref={theoryRef}
            id="theory"
            className="section">
            Theory
        </div>
    );
});

export default Theory;