
import * as React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';


const SongListItem = ({ music, onChange, songs }) => {

    const handleSongSelect = () => {
        const selectedSong = songs.filter((item) => item.id === songs.id)
        console.log(2000, selectedSong)
        onChange(selectedSong[0])
    }
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem onClick={handleSongSelect} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={music.cover} />
                </ListItemAvatar>
                <ListItemText
                    primary={music.name}
                    secondary={music.artist}
                />

            </ListItem>
        </List>
    )
}
export default SongListItem