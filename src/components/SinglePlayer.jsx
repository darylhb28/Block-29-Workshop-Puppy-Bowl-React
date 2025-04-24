import { useState, useEffect } from "react"
import { getSinglePlayer, removePlayer } from "../API calls"
import { useParams, useNavigate } from "react-router-dom"

export default function SinglePlayer({}){
    const [player, setPlayer] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const [successMessage, setSuccessMessage] = useState("")



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
                    <p>Player ID {player.id}</p>
                    <button onClick={() => navigate("/")}>Back to All Players</button>
                    <br />
                    <br />
                </div>
            )
        }
        
        </>
    )

}