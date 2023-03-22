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
        <section
            ref={newSpiritRef}
            id="new-spirit">
            <div className="container sub">
                <SectionDivider>
                    New Spirit
                </SectionDivider>
                <p>
                    New Spirit is our impactful serif typeface. Its vintage, 70s-inspired characteristics and modern feel make New Spirit perfect for more expressive moments, wherever an accent is needed.
                </p>
                <FontTester fontName="New-Spirit" weightOptions={weightOptions} weightSettings={weightSettings}/>
            </div>
        </section>
    );
});

export default NewSpirit;