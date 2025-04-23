import { useState, useEffect } from "react"
import { getSinglePlayer } from "../API calls"
import { useParams, useNavigate } from "react-router-dom"

export default function SinglePlayer({}){
    const [player, setPlayer] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchPlayer(){
            const response = await getSinglePlayer(id)
            console.log(response)
            setPlayer(response.data.player)
        }
        fetchPlayer()
    },[])

    return (
        <>
        {
            player && (
                <div className="singlePlayer" key={player.id}>
                    <h2><strong>{player.name}</strong></h2>
                    <img src={player.imageUrl} style = {{height: "200px"}}/>
                    <p>Breed: {player.breed}</p>
                    <p>Status: {player.status}</p>
                    <p>Team: {player.team?.name}</p>
                    <button onClick={() => navigate("/")}>Back to All Players</button>
                </div>
            )
        }
        
        </>
    )

}