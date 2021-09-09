import { Avatar, Typography } from "@material-ui/core";
const Song = ({ currentsong }) => {
    return (
        <div >
            <img src={currentsong.cover} style={{ display: "flex", justifyContent: "center", margin: "auto" }}></img>
            {/* <Typography variant="h3" align="center">Picture</Typography> */}
            <Typography variant="h3" align="center">{currentsong.name}</Typography>
            <Typography variant="h5" align="center">{currentsong.artist}</Typography>
        </div>
    );
};
export default Song;
