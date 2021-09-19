import SongListItem from './SongListItem'

const SongList = ({ songs, onChange }) => {
    return (
        <div style={{top:32,left:0,position:"fixed",overflow:"scroll", height:"100vh", width:"20vw"}}>
            <h3>list of songs</h3>
            {songs.map((s) => (<SongListItem music={s} key={s.id} onChange={onChange} songs={songs}/>))}
        </div>
    )
}

export default SongList