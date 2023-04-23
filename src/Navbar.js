import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(){
    return (<nav className="nav">
        <Link to="/" className="site-title">
            StudyPal
        </Link>
        <ul>
 AndrewNewBranch
            <CustomLink to="/About">About</CustomLink>

            <li className="active">
                <a href="/" ><b>Home</b></a>
            </li>
            <li>
                <a href="./pages/About.js"><b>About</b></a>
            </li>
 main
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