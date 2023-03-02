import { StyledHeader } from "./StyledHeader";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './vinal-logo-web.svg';

const Header = ({location}) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";
    // TODO: add useEffect with event listener to detect if the user scrolls
    // TODO: add function to animate the header once scrolled

    return (
        <StyledHeader pathname={location.pathname}>
            <NavLink to="/">
                <Logo width={168.1396} />
                <span>brand guide</span>
            </NavLink>
            <div>
                <NavLink
                    to="logos"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }>
                    logos
                </NavLink>
                <NavLink
                    to="colors"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }>
                    colors
                </NavLink>
                <NavLink
                    to="typography"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }>
                    typography
                </NavLink>
                {/* <NavLink
                    to="personal"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }> */}
            </div>
        </StyledHeader>
    );
}

export default Header;