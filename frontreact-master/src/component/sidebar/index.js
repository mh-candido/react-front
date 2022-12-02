import { Link } from "react-router-dom";
import { routesSideBar } from "../../utils/listSideBar";

const SideBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav">
                {
                    routesSideBar.map((item) => {
                        return(
                        <li className="nav-item">
                            <Link className="nav-link" to={`${item.path}`}>{item.name}</Link>
                        </li>)
                    })
                }
            </ul>
        </nav>

    )
}


export default SideBar;