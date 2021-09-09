import { Typography } from "@material-ui/core";
import {useState} from 'react'
import Song from "./components/Song";
import Player from './components/Player'
import data from './components/data'

function App() {
    const [songs,setSongs]=useState(data())
    const [currentsong,setCurrentsong]=useState(songs[0])
    console.log(20,songs)
    return (
        <div>
            <Typography variant="h2">Music Player</Typography>
            <Song currentsong={currentsong} />
            <Player />
        </div>
    );
}
export default App;
