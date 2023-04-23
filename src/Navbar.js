import { Link, useMatch, useResolvedPath} from "react-router-dom"
import './pages/About';
import './pages/Account';
export default function Navbar(){
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            StudyPals
        </Link>
        <ul>
            <CustomLink to="/" className="stroke">Home</CustomLink>
            <CustomLink to="./pages/About" className="stroke">About</CustomLink>
            <CustomLink to="./pages/Account" className="stroke">Account</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}