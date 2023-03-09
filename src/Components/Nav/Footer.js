import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { RelativePaths } from "./RelativePaths";
import { ReactComponent as Logo } from "./vinal-logo-web.svg";

const Footer = ({ location }) => {
    const curr = RelativePaths.find(current => current.pathname === location.pathname);
    const prev = curr.prev;
    const next = curr.next;

    return (
        <footer>
            <div className="footer-nav">
                <span>
                    {prev && <NavButton pathname={prev} />}
                </span>
                <span>
                    <Link to="/" className="footer-logo">
                        <Logo />
                    </Link>
                </span>
                <span>
                    {next && <NavButton pathname={next} isNext={true} />}
                </span>
            </div>
            <div className="footer-text">
                Copyright &copy; 2023 Vinal. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;