import { forwardRef } from "react";
import Title from "../Title";

const Philosophy = forwardRef((props, philosophyRef) => {
    return (
        <section
            ref={philosophyRef}
            id="philosophy">
            <div className="container">
                <Title>Philosophy</Title>
                <div className="content">
                    <h2><em>Music is who you are.</em></h2>
                    <p>
                        That&rsquo;s why some albums resonate with you so much that you may feel inclined to own them in the classic format of vinyl records, even if only to have the album art displayed on your shelves or on your wall. 
                    </p>
                    <p>
                        If you can relate, you know you display that art proudly. That&rsquo;s because that visual collection of music represents you. 
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
        </section>
    );
});

export default Philosophy;