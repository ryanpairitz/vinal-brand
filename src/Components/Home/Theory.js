import { forwardRef } from "react";
import SectionTitle from "./SectionTitle";

const Theory = forwardRef((props, theoryRef) => {
    return (
        <div
            ref={theoryRef}
            id="theory"
            className="section">
            <div className="container content">
                <SectionTitle>Theory</SectionTitle>
                <div>
                    <h2>
                        Therefore, we need every element of the Vinal brand to remain in line with our philosophy.
                    </h2>
                    <p>
                        This means everything related to the brand should evoke an understanding of what Vinal stands for, in the same way that others may be able to infer who you are by only seeing your collection of records.
                    </p>
                    <p>
                        For instance, we want the brand to conjure seemingly contradictory feelings of both calm and intrigue, emotions that each person may tie to their favorite music. Using analogous colors that seamlessly fade into each other, the Vinal logo is able to accomplish that.
                    </p>
                    <p>
                        The brand is also clean, sharp, and abstracted, to illustrate the intersection between music and tech in a way that is engaging and easy to comprehend.
                    </p>
                    <p>
                        In addition, to capture the smoky, enigmatic, and intangible nature of music as a concept, no brand colors should be more rich and dark than our base color, Black Carbon.
                    </p>
                    <p>
                        Finally, the brand should include vibrance and creativity to model user expression, but the volume should be turned down anywhere users express themselves or need information, without distraction.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default Theory;