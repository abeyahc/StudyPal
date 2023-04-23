export default function Navbar(){
    return (<nav className="nav">
        <a href="/" className="site-title">StudyPal</a>
        <ul>
            <li className="active">
                <a href="/" ><b>Home</b></a>
            </li>
            <li>
                <a href="./pages/About.js"><b>About</b></a>
            </li>
        </ul>
    </nav>
    )
}