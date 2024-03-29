import { forwardRef } from "react";
import Arboria from "./Arboria";
import Fallbacks from "./Fallbacks";
import Futura from "./Futura";
import NewSpirit from "./NewSpirit";
import TypographyCover from "./TypographyCover";

const Typography = forwardRef((props, sectionRefs) => {
    return (
        <div id="typography">
            <TypographyCover />
            <Futura ref={(element) => sectionRefs.current['futura'] = element}/>
            <Arboria ref={(element) => sectionRefs.current['arboria'] = element}/>
            <NewSpirit ref={(element) => sectionRefs.current['new-spirit'] = element}/>
            <Fallbacks ref={(element) => sectionRefs.current['fallbacks'] = element}/>
        </div>
    );
})

export default Typography;