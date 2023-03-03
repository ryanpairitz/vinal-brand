import { forwardRef } from "react";

const Philosophy = forwardRef((props, philosophyRef) => {
    return (
        <div
            ref={philosophyRef}
            id="philosophy"
            className="section">
            Philosophy
        </div>
    );
});

export default Philosophy;