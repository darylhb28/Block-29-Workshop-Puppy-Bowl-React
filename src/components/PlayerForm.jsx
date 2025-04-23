import { useState, useEffect } from "react"
import { addPlayer } from "../API calls"

export default function PlayerForm({}){
    const [puppyName, setPuppyName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus]= useState("")
    const [image, setImage] = useState("")
    
    const [successMessage, setSuccessMessage] = useState("")


 function handleSubmit(event){
    event.preventDefault()

    async function invitePlayer (){
        console.log(puppyName)
        const response = await  addPlayer({
            puppyName,
            breed,
            status,
            image,
        })
            console.log(response)
            setSuccessMessage("Player Successfully Created!")

            localStorage.setItem("myPlayers", [response.data.newPlayer.id])
    }
    invitePlayer()
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
        </form>
        </>
    )

}