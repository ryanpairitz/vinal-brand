import { useEffect, useRef } from "react";
import hamburgerAnimationData from "./icon-hamburger-data.json";
import lottie from 'lottie-web';

const Hamburger = ({ openMenu, setOpenMenu, style }) => {
    const hamburgerContainer = useRef(null);
    const hamburger = useRef(null);

    useEffect(() => {
        if (hamburgerContainer.current) {
            hamburger.current = lottie.loadAnimation({
                container: hamburgerContainer.current,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: hamburgerAnimationData,
            });

            return () => {
                hamburger.current?.destroy();
            }
        }
    }, []);

    const toggleOnClick = () => {
        setOpenMenu(!openMenu);
        hamburger.current?.setDirection(openMenu ? -1 : 1);
        hamburger.current?.play();
    }
    const closeOnClick = () => {
        setOpenMenu(false);
        hamburger.current?.setDirection(-1);
        hamburger.current?.play();
    }

    return (
        <span
            style={style}
            className="hamburger"
            ref={hamburgerContainer}
            onClick={toggleOnClick} />
    );
}

export default Hamburger;