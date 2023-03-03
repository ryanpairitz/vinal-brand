import { forwardRef } from "react";
import Brandmark from "./Brandmark";
import Downloads from "./Downloads";
import Logo from "./Logo";
import LogosCover from "./LogosCover";

const Logos = forwardRef((props, logosRef) => {
    const {logoRef, brandmarkRef, downloadsRef} = logosRef.current;

    return (
        <div>
            <LogosCover />
            <Logo ref={logoRef}/>
            <Brandmark ref={brandmarkRef}/>
            <Downloads ref={downloadsRef}/>
        </div>
    );
})

export default Logos;