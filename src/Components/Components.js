import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import Philosophy from "./Home/Philosophy";
import Voice from "./Home/Voice";
import Theory from "./Home/Theory";
import Logos from "./Logos/Logos";
import Logo from "./Logos/Logo";
import Brandmark from "./Logos/Brandmark";
import Downloads from "./Logos/Downloads";
import Colors from "./Colors/Colors";
import Functional from "./Colors/Functional";
import Expressive from "./Colors/Expressive";
import Typography from "./Typography/Typography";
import Futura from "./Typography/Futura";
import Arboria from "./Typography/Arboria";
import Fallbacks from "./Typography/Fallbacks";

const Components = () => {
    const location = useLocation();

    const philosophyRef = useRef();
    const theoryRef = useRef();
    const voiceRef = useRef();
    const homeRef = useRef({philosophyRef, theoryRef, voiceRef});
    const logoRef = useRef();
    const brandmarkRef = useRef();
    const downloadsRef = useRef();
    const logosRef = useRef({logoRef, brandmarkRef, downloadsRef});
    const functionalRef = useRef();
    const expressiveRef = useRef();
    const colorsRef = useRef({functionalRef, expressiveRef});
    const futuraRef = useRef();
    const arboriaRef = useRef();
    const fallbacksRef = useRef();
    const typographyRef = useRef({futuraRef, arboriaRef, fallbacksRef});

    useEffect(() => {
        switch(location.hash){
            case('#philosophy'):
                philosophyRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#theory'):
                theoryRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#voice'):
                voiceRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#logo'):
                logoRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#brandmark'):
                brandmarkRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#downloads'):
                downloadsRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#functional'):
                functionalRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#expressive'):
                expressiveRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#futura'):
                futuraRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#arboria'):
                arboriaRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case('#fallbacks'):
                fallbacksRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            default:
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                break;
        }
    }, [location]);
    
    return (
        <div className="App">
            <Header location={location}/>
            <Routes>
                <Route path="/" element={<Home ref={homeRef} />}/>
                    <Route path="#philosophy" element={<Philosophy />}/>
                    <Route path="#theory" element={<Theory />}/>
                    <Route path="#voice" element={<Voice />}/>
                <Route path="/logos" element={<Logos ref={logosRef} />}/>
                    <Route path="#logo" element={<Logo />}/>
                    <Route path="#brandmark" element={<Brandmark />}/>
                    <Route path="#downloads" element={<Downloads />}/>
                <Route path="/colors" element={<Colors ref={colorsRef} />}/>
                    <Route path="#functional" element={<Functional />}/>
                    <Route path="#expressive" element={<Expressive />}/>
                <Route path="/typography" element={<Typography ref={typographyRef} />}/>
                    <Route path="#futura" element={<Futura />}/>
                    <Route path="#arboria" element={<Arboria />}/>
                    <Route path="#fallbacks" element={<Fallbacks />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default Components;