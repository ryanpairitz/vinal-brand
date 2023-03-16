import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import FontTester from "./FontTester";

const NewSpirit = forwardRef((props, newSpiritRef) => {
    const weightOptions = [
        "Light",
        "Regular",
        "Medium",
        "SemiBold",
        "Bold"
    ];
    const weightSettings = {
        Light: {
            fontFamily: "New-Spirit",
            fontWeight: 300
        },
        Regular: {
            fontFamily: "New-Spirit",
            fontWeight: 400
        },
        Medium: {
            fontFamily: "New-Spirit",
            fontWeight: 500
        },
        SemiBold: {
            fontFamily: "New-Spirit",
            fontWeight: 600
        },
        Bold: {
            fontFamily: "New-Spirit",
            fontWeight: 700
        }
    }

    return (
        <div
            ref={newSpiritRef}
            id="new-spirit"
            className="section">
            <div className="container sub">
                <SectionDivider>
                    New Spirit
                </SectionDivider>
                <p>
                    New Spirit is our impactful serif typeface. Its hand-made and vintage feel lends itself perfectly to more expressive moments, when an accent is needed.
                </p>
                <FontTester fontName="New-Spirit" weightOptions={weightOptions} weightSettings={weightSettings}/>
            </div>
        </div>
    );
});

export default NewSpirit;