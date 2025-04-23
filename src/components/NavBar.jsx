import { Link } from "react-router-dom"

export default function NavBar({}){
    return (
        <div className="navbar">
            <Link to="/">Players</Link>
            <Link to="/createplayer">Create a Player</Link>
        </div>
    )

}