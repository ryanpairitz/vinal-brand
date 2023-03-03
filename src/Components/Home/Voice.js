import { forwardRef } from "react";

const Voice = forwardRef((props, voiceRef) => {
    return (
        <div
            ref={voiceRef}
            id="voice"
            className="section">
            Voice
        </div>
    );
});

export default Voice;