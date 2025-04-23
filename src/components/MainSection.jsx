import PlayerForm from "./PlayerForm";
import SinglePlayer from "./SinglePlayer";
import Players from "./Players";
import { Routes, Route } from "react-router-dom";


export default function MainSection({}){
    return (
        <>
        <Routes>
            <Route path = "/" element={<Players/>}/>
            <Route path = "/players/:id" element={<SinglePlayer />} />
            <Route path = "/createplayer" element={<PlayerForm />} />
        </Routes>

        </>
    )

}