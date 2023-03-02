import Brandmark from "./Brandmark";
import Downloads from "./Downloads";
import Logo from "./Logo";
import LogosCover from "./LogosCover";

const Logos = () => {
    return (
        <div>
            <LogosCover />
            <Logo />
            <Brandmark />
            <Downloads />
        </div>
    );
}

export default Logos;