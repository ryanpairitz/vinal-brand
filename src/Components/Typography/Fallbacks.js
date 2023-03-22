import { forwardRef } from "react";
import Card from "../Card";
import SectionDivider from "../SectionDivider";

const Fallbacks = forwardRef((props, fallbacksRef) => {
    return (
        <section
            ref={fallbacksRef}
            id="fallbacks">
            <div className="container sub">
                <SectionDivider>
                    Fallbacks
                </SectionDivider>
                <p>
                    For a web-based app, it&rsquo;s important to include type fallbacks, to ensure drastic differences are not visible in the case of loading issues or a font-related failure. 
                </p>
                <p>
                    If Arboria cannot be loaded, Arial appears as the fallback. Below is a comparison of the two typefaces.
                </p>
                <div className="card-container">
                    <Card>
                        <h2>Arboria</h2>
                        <p>
                            The quick brown fox jumps over the lazy dog.
                        </p>
                    </Card>
                    <Card>
                        <h2 style={{fontFamily: 'Arial'}}>Arial</h2>
                        <p style={{fontFamily: 'Arial'}}>
                            The quick brown fox jumps over the lazy dog.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
});

export default Fallbacks;