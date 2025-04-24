import { useState, useEffect } from "react"
import { addPlayer, getPlayers, removePlayer } from "../API calls"

export default function PlayerForm({}){
    const [puppyName, setPuppyName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus]= useState("")
    const [image, setImage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [players, setPlayers] = useState([])
    const [refresh, setRefresh] = useState(false)


 function handleSubmit(event){
    event.preventDefault()

function savePlayerIdToLocalStorage (id) {
    const stored = localStorage.getItem("myPlayerIds");
    const ids = stored ? JSON.parse(stored) : [];
    ids.push(id);
    localStorage.setItem("myPlayerIds", JSON.stringify(ids));
    };

    async function invitePlayer (){
        console.log(puppyName)
        const response = await  addPlayer({
            puppyName,
            breed,
            status,
            image,
        })
            console.log(response)
            if (response.success === true) setSuccessMessage("Player Successfully Created!")

            savePlayerIdToLocalStorage(response.data.newPlayer.id)
            setRefresh(prev => !prev)
    }
    invitePlayer()
    }

    useEffect(()=>{
        async function fetchPlayers(){

            const response = await getPlayers()
            console.log(response)
            setPlayers(response.data.players)
        }
        fetchPlayers()
                       
},[refresh])

const myPlayerIds = JSON.parse(localStorage.getItem("myPlayerIds")) || [];
const filteredPlayers = players.filter(player => myPlayerIds.includes(player.id));

async function handleClick (id){
    const response = await removePlayer(id)
    console.log(response)
    setRefresh(prev => !prev)
}

    return (
        <>
        <form className = "playerForm" onSubmit = {handleSubmit}>
            <h2><strong>Create Your Own Player</strong></h2>
            <label>
                Puppy Name 
                <input 
                name = "puppyName"
                onChange={(event) => setPuppyName(event.target.value)}
                value = {puppyName}
                />
            </label>
            <br />
            <label>
                Breed 
                <input 
                name = "breed"
                onChange={(event) => setBreed(event.target.value)}
                value = {breed}
                />
            </label>
            <br />
            <label>
                Status
                <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                >
                    <option value="">--Select Status--</option>
                    <option value="bench">Bench</option>
                    <option value="field">Field</option>
                </select>
            </label>
            <br />
            <label>
                URL of an Image for Your Player 
                <input 
                name = "image"
                onChange={(event) => setImage(event.target.value)}
                value = {image}
                />
            </label>
            <br />
            <button>Submit</button>
            <br />
            {
                successMessage && <p>{successMessage}</p>
            }
        </form>
        <br />
        <h2 className = "created">My Created Players</h2>
        <div className = "container">
                {
                    filteredPlayers.map((player)=>
                        <div className="playerCard" key={player.id}>
                            <h2><strong>{player.name}</strong></h2>
                            <img src={player.imageUrl} style = {{height: "200px"}}/>
                            <br />
                            <button onClick={() => handleClick(player.id)}>Delete Player</button>
                            <br />
                        </div>

                    )
                }
            </div>

        </>
    )

}