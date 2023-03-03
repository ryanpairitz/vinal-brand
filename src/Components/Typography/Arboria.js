import { forwardRef } from "react";

const Arboria = forwardRef((props, arboriaRef) => {
    return (
        <div
            ref={arboriaRef}
            id="arboria"
            className="section">
            Arboria
        </div>
    );
});

export default Arboria;