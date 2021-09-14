import { Typography } from "@material-ui/core";
import { useState } from 'react'
import Song from "./components/Song";
import Player from './components/Player'
import data from './components/data'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    const [currentsong, setCurrentsong] = useState(songs[1])
    const [playing, setPlaying] = useState(false)

    const playingHandler = () => {
        setPlaying(!playing)
    }
    console.log(20, songs)
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant="h6" align="center" style={{ background: "#1A535c", marginBottom: 10 }}>Music Player</Typography>
                <Song currentsong={currentsong} />
                <Player currentsong={currentsong} playing={playing} onchange={playingHandler} />
            </ThemeProvider>
        </div>
    );
}
export default App;
