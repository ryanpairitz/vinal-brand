import ColorsCover from "./ColorsCover";
import Functional from "./Functional";
import Expressive from "./Expressive";
import { forwardRef } from "react";

const Colors = forwardRef((props, colorsRef) => {
    const {functionalRef, expressiveRef} = colorsRef.current;

    return (
        <div>
            <ColorsCover />
            <Functional ref={functionalRef}/>
            <Expressive ref={expressiveRef}/>
        </div>
    );
});

export default Colors;