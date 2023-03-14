import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Futura = forwardRef((props, futuraRef) => {
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
                    Futura is the typeface at the forefront of Vinal. It inspired the Vinal wordmark and is used flexibly for hero text &#40;headings 6 words or less in length&#41;, titles, labels, etc.
                </p>
                <p>
                    In addition, the condensed weights of Futura work well in contexts in which information needs to be communicated clearly in limited space.
                </p>
                <div>
                </div>
            </div>
        </div>
    );
});

export default Futura;