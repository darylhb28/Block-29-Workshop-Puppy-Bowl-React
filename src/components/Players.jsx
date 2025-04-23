import { useState, useEffect } from "react"
import {getPlayers} from "../API calls"
import { useNavigate } from "react-router-dom"

export default function Players({}){
    const [players, setPlayers] = useState([])
    const [selectPlayer, setSelectedPlayer] = useState([])
    const [searchPlayer, setSearchPlayer] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
            async function fetchPlayers(){

                const response = await getPlayers()
                console.log(response)
                setPlayers(response.data.players)
            }
            fetchPlayers()
                           
    },[])

    const filteredPlayers = players.filter((player)=>
        player.name.toLowerCase().includes(searchPlayer.toLowerCase())
)

function handleClick(player){
    setSelectedPlayer(player.id)
    navigate(`/players/${player.id}`)
}


    return (
        <>
             <label className="search">
                <strong>Search for a Player :  </strong>
                    <input 
                    name="searchPlayer" 
                    onChange={(event)=> setSearchPlayer(event.target.value)} 
                    value = {searchPlayer}
                    />
            </label>
            <br />
            <br />
            <div className = "container">
                {
                    filteredPlayers.map((player)=>
                        <div className="playerCard" key={player.id}>
                            <h2><strong>{player.name}</strong></h2>
                            <img src={player.imageUrl} style = {{height: "200px"}}/>
                            <br />
                            <button onClick={()=>handleClick(player)}>View Details</button>
                        </div>

                    )
                }
            </div>
        
        </>
    )

}