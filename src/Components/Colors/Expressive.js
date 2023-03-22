import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";

const Expressive = forwardRef((props, expressiveRef) => {
    return (
        <section
            ref={expressiveRef}
            id="expressive">
            <div className="container sub">
                <SectionDivider>
                    Expressive
                </SectionDivider>
                <div>
                </div>
            </div>
        </section>
    );
});

export default Expressive;