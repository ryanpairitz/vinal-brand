import { forwardRef } from "react";
import Arboria from "./Arboria";
import Fallbacks from "./Fallbacks";
import Futura from "./Futura";
import TypographyCover from "./TypographyCover";

const Typography = forwardRef((props, typographyRef) => {
    const {futuraRef, arboriaRef, fallbacksRef} = typographyRef.current;

    return (
        <div>
            <TypographyCover />
            <Futura ref={futuraRef}/>
            <Arboria ref={arboriaRef}/>
            <Fallbacks ref={fallbacksRef}/>
        </div>
    );
})

export default Typography;