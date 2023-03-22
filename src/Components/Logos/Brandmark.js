import { forwardRef, useState } from "react";
import SectionDivider from "../SectionDivider";
import InteractiveBrandmark from "./InteractiveBrandmark";
import Swatch from "./Swatch";
import { SwatchOptions } from "./Swatches";

const Brandmark = forwardRef((props, brandmarkRef) => {
    const [activeSwatch, setActiveSwatch] = useState(SwatchOptions[0]);

    return (
        <section
            ref={brandmarkRef}
            id="brandmark">
            <div className="container sub">
                <SectionDivider>
                    Brandmark
                </SectionDivider>
                <div className="swatch-container">
                    {SwatchOptions.map((swatch, index) => {
                        return (
                            <Swatch swatch={swatch} key={index}
                                activeSwatch={activeSwatch}
                                handleSelect={() => setActiveSwatch(swatch)}
                            />
                        )
                    })}
                </div>
                <InteractiveBrandmark activeSwatch={activeSwatch} className="logo-container"/>
            </div>
        </section>
    );
});

export default Brandmark;