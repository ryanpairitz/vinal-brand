import { forwardRef } from "react";

const Futura = forwardRef((props, futuraRef) => {
    return (
        <div
            ref={futuraRef}
            id="futura"
            className="section">
            Futura
        </div>
    );
});

export default Futura;