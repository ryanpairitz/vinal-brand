import ColorsCover from "./ColorsCover";
import Functional from "./Functional";
import Expressive from "./Expressive";
import { forwardRef } from "react";

const Colors = forwardRef((props, sectionRefs) => {
    return (
        <div>
            <ColorsCover />
            <Functional ref={(element) => sectionRefs.current['functional'] = element}/>
            <Expressive ref={(element) => sectionRefs.current['expressive'] = element}/>
        </div>
    );
});

export default Colors;