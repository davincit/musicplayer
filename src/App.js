import { Typography } from "@material-ui/core";
import { useState } from 'react'
import Song from "./components/Song";
import Player from './components/Player'
import data from './components/data'

function App() {
    const [songs, setSongs] = useState(data())
    const [currentsong, setCurrentsong] = useState(songs[0])
    const [playing, setPlaying] = useState(false)
    console.log(20, songs)
    return (
        <div>
            <Typography variant="h6" align="center" style={{ background: "#1A535c" }}>Music Player</Typography>
            <Song currentsong={currentsong} />
            <Player currentsong={currentsong} playing={playing} setPlaying={setPlaying} />
        </div>
    );
}
export default App;
