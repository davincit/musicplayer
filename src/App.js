import { Typography } from "@material-ui/core";
import Song from "./components/Song";
import Player from './components/Player'

function App() {
    return (
        <div>
            <Typography variant="h1">Music Player</Typography>
            <Song />
            <Player />
        </div>
    );
}

export default App;
