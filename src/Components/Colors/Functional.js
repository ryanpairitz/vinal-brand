import { forwardRef } from "react";

const Functional = forwardRef((props, functionalRef) => {
    return (
        <div
            ref={functionalRef}
            id="functional"
            className="section">
            Functional
        </div>
    );
});

export default Functional;