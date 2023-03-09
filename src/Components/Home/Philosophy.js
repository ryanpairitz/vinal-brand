import { forwardRef } from "react";

const Philosophy = forwardRef((props, philosophyRef) => {
    return (
        <div
            ref={philosophyRef}
            id="philosophy"
            className="section">
            <div className="container content">
                <h3>Philosophy</h3>
                <div>
                    <h2 className="emphasized">Music is who you are.</h2>
                    <p>
                        That’s why some albums resonate with you so much that you may feel inclined to own them in the classic format of vinyl records, even if only to have the album art displayed on your shelves or on your wall. 
                    </p>
                    <p>
                        If you can relate, you know you display that art proudly. That’s because that visual collection of music represents you. 
                    </p>
                    <p>
                        Vinal is here to help foster that pride.
                    </p>
                    <h2>
                        We give our users a platform where they can celebrate —&nbsp;<i>and be celebrated for</i>&nbsp;— their taste in music.
                    </h2>
                    <h2>
                        That celebration is the basis of Vinal.
                    </h2>
                </div>
            </div>
        </div>
    );
});

export default Philosophy;