

export async function getPlayers(){
            try {
                const response =  await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-PT-puppies/players")
                const res = await response.json()
                return res

            } catch (error) {
                console.log(error)
            }
}
    

export async function getSinglePlayer(id){

        try {
            const response =  await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-PT-puppies/players/${id}`)
            const res = await response.json()
            return res

        } catch (error){
            console.log(error)
        } 

}

export async function addPlayer({
    puppyName,
    breed,
    status,
    image,
}){
    try {
        const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-PT-puppies/players",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: puppyName,
                    breed,
                    status,
                    imageUrl: image,
                })
            }
        );
        const res = await response.json()
        return res

    } catch (error) {
        console.log(error)
    } 

}

export async function removePlayer(){

    return 

}