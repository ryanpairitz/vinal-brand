import { forwardRef } from "react";
import Hero from "./Hero"
import Philosophy from "./Philosophy";
import Theory from "./Theory";
import Voice from "./Voice";

const Home = forwardRef((props, sectionRefs) => {
    return (
        <div>
            <Hero />
            <Philosophy ref={(element) => sectionRefs.current['philosophy'] = element}/>
            <Theory ref={(element) => sectionRefs.current['theory'] = element}/>
            <Voice ref={(element) => sectionRefs.current['voice'] = element}/>
        </div>
    );
})

export default Home;