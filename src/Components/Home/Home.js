import { forwardRef } from "react";
import Hero from "./Hero"
import Philosophy from "./Philosophy";
import Theory from "./Theory";
import Voice from "./Voice";

const Home = forwardRef((props, homeRef) => {
    const {philosophyRef, theoryRef, voiceRef} = homeRef.current;

    return (
        <div>
            <Hero />
            <Philosophy ref={philosophyRef}/>
            <Theory ref={theoryRef}/>
            <Voice ref={voiceRef}/>
        </div>
    );
})

export default Home;