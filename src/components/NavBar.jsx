import { Link } from "react-router-dom"

export default function NavBar({}){
    return (
        <div className="navbar">
            <Link to="/">All Players</Link>
            <Link to="/createplayer">My Players</Link>
        </div>
    )

}