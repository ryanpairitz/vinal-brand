import { useEffect, useRef } from "react";
import hamburgerAnimationData from "./icon-hamburger-data.json";
import lottie from 'lottie-web';

const Hamburger = ({ openMenu, toggleOpenMenu }) => {
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

            return () => hamburger.current?.destroy();
        }
    }, []);

    useEffect(() => {
        hamburger.current?.setDirection(openMenu ? 1 : -1);
        hamburger.current?.play();
    }, [openMenu])

    return (
        <span
            className="icon"
            ref={hamburgerContainer}
            onClick={toggleOpenMenu} />
    );
}

export default Hamburger;