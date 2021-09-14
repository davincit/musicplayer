import { Avatar, Typography } from "@material-ui/core";
const Song = ({ currentsong }) => {
    return (
        <div>
            <img src={currentsong.cover} style={{ display: "flex", justifyContent: "center", margin: "auto", borderRadius: 120, marginBottom: 10 }}></img>
            {/* <Typography variant="h3" align="center">Picture</Typography> */}
            <Typography variant="h4" align="center">{currentsong.name}</Typography>
            <Typography variant="h6" align="center">{currentsong.artist}</Typography>
        </div>
    );
};
export default Song;
