import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import FontTester from "./FontTester";

const Arboria = forwardRef((props, arboriaRef) => {
    const weightOptions = [
        "Light",
        "Book",
        "Medium",
        "Bold",
        "Black"
    ];
    const weightSettings = {
        Light: {
            fontFamily: "Arboria",
            fontWeight: 300
        },
        Book: {
            fontFamily: "Arboria",
            fontWeight: 400
        },
        Medium: {
            fontFamily: "Arboria",
            fontWeight: 500
        },
        Bold: {
            fontFamily: "Arboria",
            fontWeight: 700
        },
        Black: {
            fontFamily: "Arboria",
            fontWeight: 900
        }
    }

    return (
        <div
            ref={arboriaRef}
            id="arboria"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    Arboria
                </SectionDivider>
                <p>
                    Arboria is our most dynamic typeface, used for longer headings, body text, and text sized smaller than 16 pt.
                </p>
                <FontTester fontName="Arboria" weightOptions={weightOptions} weightSettings={weightSettings}/>
            </div>
        </div>
    );
});

export default Arboria;