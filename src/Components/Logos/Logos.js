import { forwardRef } from "react";
import Brandmark from "./Brandmark";
import Downloads from "./Downloads";
import Logo from "./Logo";
import LogosCover from "./LogosCover";

const Logos = forwardRef((props, sectionRefs) => {
    return (
        <div>
            <LogosCover />
            <Logo ref={(element) => sectionRefs.current['logo'] = element}/>
            <Brandmark ref={(element) => sectionRefs.current['brandmark'] = element}/>
            <Downloads ref={(element) => sectionRefs.current['downloads'] = element}/>
        </div>
    );
})

export default Logos;