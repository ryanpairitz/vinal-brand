import { forwardRef } from "react";
import Card from "../Card";
import SectionDivider from "../SectionDivider";
import SectionTitle from "./SectionTitle";

const Voice = forwardRef((props, voiceRef) => {
    return (
        <div
            ref={voiceRef}
            id="voice"
            className="section">
            <div className="container">
                <SectionTitle>Voice</SectionTitle>
                <div className="content">
                    <h2>
                        We&rsquo;re demonstrating how users can express themselves through Vinal and shining the spotlight on them.
                    </h2>
                    <h2>
                        That starts with the Vinal voice.
                    </h2>
                    <p>
                        Vinal is just a tool people can use to reveal more about — and be celebrated for — who they are. So, while the Vinal brand should be fresh and unique and invigorating, it should primarily aid in their expression.
                    </p>
                    <p>
                        By using separate brand voices for function and expression, we maintain creativity and excitement in our own expression, while preventing the brand from competing with users for the spotlight and ensuring they have a seamless experience.
                    </p>
                </div>
            </div>
            <div className="container sub">
                <SectionDivider>
                    Functional vs. Expressive
                </SectionDivider>
                <div className="card-container">
                    <Card>
                        <h2>Functional</h2>
                        <p>
                            Whenever the Vinal brand should serve a functional purpose and lend itself to the user, it should be minimal and unobtrusive and therefore take on a functional voice.
                        </p>
                        <p>
                            Use this wherever albums or information should stand out &#40;i.e. anywhere users are authenticated&#41;.
                        </p>
                    </Card>
                    <Card>
                        <h2>Expressive</h2>
                        <p>
                            An expressive voice can be used to complement the functional branding and imitate user expression, to give anyone interacting with Vinal materials a sense of how they can express themselves through Vinal.
                        </p>
                        <p>
                            Anything expressive can be used on print material and outside of authentication &#40;i.e. anywhere where users aren&rsquo;t signed in&#41;.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
});

export default Voice;