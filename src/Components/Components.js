import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "./Nav/Footer";
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
import NewSpirit from "./Typography/NewSpirit";
import Header from "./Nav/Header";

const Components = () => {
    const location = useLocation();
    const sectionRefs = useRef([]);

    useEffect(() => {
        if (!location.hash){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        else sectionRefs.current[location.hash.substring(1)]?.scrollIntoView({behavior: 'smooth'});
    }, [location]);
    
    return (
        <div className="App">
            <Header location={location}/>
            <Routes>
                <Route path="/" element={<Home ref={sectionRefs} />}/>
                    <Route path="#philosophy" element={<Philosophy />}/>
                    <Route path="#theory" element={<Theory />}/>
                    <Route path="#voice" element={<Voice />}/>
                <Route path="/logos" element={<Logos ref={sectionRefs} />}/>
                    <Route path="#logo" element={<Logo />}/>
                    <Route path="#brandmark" element={<Brandmark />}/>
                    <Route path="#downloads" element={<Downloads />}/>
                <Route path="/colors" element={<Colors ref={sectionRefs} />}/>
                    <Route path="#functional" element={<Functional />}/>
                    <Route path="#expressive" element={<Expressive />}/>
                <Route path="/typography" element={<Typography ref={sectionRefs} />}/>
                    <Route path="#futura" element={<Futura />}/>
                    <Route path="#arboria" element={<Arboria />}/>
                    <Route path="#new-spirit" element={<NewSpirit />}/>
                    <Route path="#fallbacks" element={<Fallbacks />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer location={location} />
        </div>
    );
}

export default Components;