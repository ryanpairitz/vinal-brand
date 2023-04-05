import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "./vinal-icons_arrow.svg";

const NavButton = ({pathname, isNext}) => {
    return (
        <Link to={pathname} className="nav-button">
            {
                isNext ?
                    <>
                        <span className="nav-button-label">{pathname.substring(1)}</span>
                        <Arrow className="arrow" />
                    </>
                    :
                    <>
                        <Arrow className="arrow" />
                        <span className="nav-button-label">
                            {
                                pathname === "/" ?
                                "cover"
                                :
                                pathname.substring(1)
                            }
                        </span>
                    </>
            }
        </Link>
    );
};

export default NavButton;