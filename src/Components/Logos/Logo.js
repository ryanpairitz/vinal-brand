import { forwardRef, useState } from "react";
import SectionDivider from "../SectionDivider.js";
import Swatch from "./Swatch.js";
import InteractiveLogo from "./InteractiveLogo.js";
import { SwatchOptions } from "./Swatches.js";
import Card from "../Card.js";

const Logo = forwardRef((props, logoRef) => {
    const [activeSwatch, setActiveSwatch] = useState(SwatchOptions[1]);

    return (
        <section
            ref={logoRef}
            id="logo">
            <div className="container sub">
                <SectionDivider>
                    Logo
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
                <Card>
                    <InteractiveLogo activeSwatch={activeSwatch} className="logo-container"/>
                </Card>
            </div>
        </section>
    );
});

export default Logo;