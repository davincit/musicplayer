import { Typography } from "@material-ui/core";
import { useState } from 'react'
import Song from "./components/Song";
import Player from './components/Player'
import data from './data'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SongList from './components/SongList'

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Chilanka',
            'cursive',
        ].join(','),
    },

});


function App() {
    const [songs, setSongs] = useState(data())
    const [currentsong, setCurrentsong] = useState(songs[0])
    const [playing, setPlaying] = useState(false)

    const playingHandler = () => {
        setPlaying(!playing)
    }

    const songSelected = () => {
        setCurrentsong(currentsong)
        console.log(200, setCurrentsong())
    }

    //     console.log(20, songs)
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant="h6" align="center" style={{ background: "#1A535c", marginBottom: 10 }}>Music Player</Typography>
                <Song currentsong={currentsong} />
                <Player currentsong={currentsong} playing={playing} onChange={playingHandler} />
                <SongList songs={songs} onChange={songSelected} />
            </ThemeProvider>
        </div>
    );
}
export default App;
