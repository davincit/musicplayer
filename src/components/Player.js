import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { duration, IconButton } from "@material-ui/core";
import PauseIcon from '@material-ui/icons/Pause';
import { useRef, useState } from "react";

const Player = ({ currentsong, playing, onchange }) => {

    const audioRef = useRef(null)
    const playSong = () => {
        //console.log(2000, audioRef)
        if (playing) {
            audioRef.current.pause();
            onchange();
        }
        else {
            audioRef.current.play();
            onchange();
        }
    }

    const [songTime, setSongtime] = useState({ currentTime: undefined, duration: undefined })
    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongtime({ ...songTime, currentTime: currentTime, duration: duration })
    }

    const timeFormat = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }


    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongtime({ ...songTime, currentTime: e.target.value })
    }


    return (
        <div >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>{timeFormat(songTime.currentTime)}</p>
                <input type="range" onChange={dragHandler} value={songTime.currentTime} min={0} max={songTime.duration} style={{ width: "25em" }} />

                <p>{timeFormat(songTime.duration)}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <IconButton><SkipPreviousIcon style={{ fontSize: "2em", color: "#1A535c" }} /></IconButton>
                <IconButton onClick={playSong} >{!playing ? <PlayCircleFilledIcon style={{ fontSize: "2em", color: "#1A535c" }} /> : <PauseIcon style={{ fontSize: "2em" }} />}</IconButton>
                <IconButton><SkipNextIcon style={{ fontSize: "2em", color: "#1A535c" }} /></IconButton>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} src={currentsong.audio} ref={audioRef}></audio>
        </div>
    );
};
export default Player;
