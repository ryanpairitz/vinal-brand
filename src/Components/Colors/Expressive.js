import { forwardRef } from "react";

const Expressive = forwardRef((props, expressiveRef) => {
    return (
        <div
            ref={expressiveRef}
            id="expressive"
            className="section">
            Expressive
        </div>
    );
});

export default Expressive;