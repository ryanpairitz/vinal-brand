import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import FontTester from "./FontTester";

const Futura = forwardRef((props, futuraRef) => {
    const weightOptions = [
        "Medium",
        "Bold",
        "Condensed Medium",
        "Condensed Bold"
    ];
    const weightSettings = {
        Medium: {
            fontFamily: "Futura",
            fontWeight: 500
        },
        Bold: {
            fontFamily: "Futura",
            fontWeight: "bold"
        },
        CondensedMedium: {
            fontFamily: "Futura-CondensedMedium",
            fontWeight: 500
        },
        CondensedBold: {
            fontFamily: "Futura-CondensedExtraBold",
            fontWeight: "bold"
        }
    }

    return (
        <div
            ref={futuraRef}
            id="futura"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Futura
                </SectionDivider>
                <p>
                    Futura is the typeface at the forefront of Vinal. Its strength and sharpness inspired the Vinal wordmark and is used flexibly for hero text &#40;headings 6 words or less in length&#41;, titles, labels, etc.
                </p>
                <p>
                    In addition, the condensed weights of Futura work well in contexts in which information needs to be communicated clearly in limited space.
                </p>
                <FontTester fontName="Futura" weightOptions={weightOptions} weightSettings={weightSettings} />
            </div>
        </div>
    );
});

export default Futura;