import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { duration, IconButton } from "@material-ui/core";
import PauseIcon from '@material-ui/icons/Pause';
import { useRef, useState } from "react";

const Player = ({ currentsong, playing, setPlaying }) => {

    const audioRef = useRef(null)
    const [playPause, setPlayPause] = useState(false)
    const playSong = () => {
        //console.log(2000, audioRef)
        if (playing) {
            audioRef.current.pause();
            setPlaying(!playing);
            setPlayPause(!playPause)
        }
        else {
            audioRef.current.play();
            setPlaying(!playing);
            setPlayPause(!playPause)
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


    const dragHandler = (e) =>{
        audioRef.current.currentTime=e.target.value;
        setSongtime({...songTime,currentTime:e.target.value})
    }


    return (
        <div >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>{timeFormat(songTime.currentTime)}</p>
                <input type="range" onChange={dragHandler} value={songTime.currentTime} min={0} max={songTime.duration} style={{width: "25em"}}/>
                
                <p>{timeFormat(songTime.duration)}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", background: "#4a919e" }}>
                <IconButton><SkipPreviousIcon style={{ fontSize: "2em" }} /></IconButton>
                <IconButton onClick={playSong} >{!playPause ? <PlayCircleFilledIcon style={{ fontSize: "2em" }} /> : <PauseIcon style={{ fontSize: "2em" }} />}</IconButton>
                <IconButton><SkipNextIcon style={{ fontSize: "2em" }} /></IconButton>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} src={currentsong.audio} ref={audioRef}></audio>
        </div>
    );
};
export default Player;
