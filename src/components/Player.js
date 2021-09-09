import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { IconButton } from "@material-ui/core";

const Player = () => {
    return (
        <div style={{ background: "#898989" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <IconButton><SkipPreviousIcon /></IconButton>
                <IconButton><PlayCircleFilledIcon /></IconButton>
                <IconButton><SkipNextIcon /></IconButton>
            </div>
        </div>
    );
};
export default Player;
