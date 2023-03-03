import { forwardRef } from "react";

const Fallbacks = forwardRef((props, fallbacksRef) => {
    return (
        <div
            ref={fallbacksRef}
            id="fallbacks"
            className="section">
            Fallbacks
        </div>
    );
});

export default Fallbacks;