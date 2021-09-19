
import { v4 as uuidv4 } from 'uuid';

export default function musicData() {
    return (
        [
            {
                name: "Old Money",
                cover: "https://ts4.tarafdari.com/contents/user644488/content-sound/artworks-000097078335-xr6n1s-t500x500.jpg",
                artist: "Lana Del Rey",
                audio: "https://ts4.tarafdari.com/contents/user644488/content-sound/10_old_money.mp3",
                color: ['FFE562', '4AA5B0'],
                id: uuidv4(),
                active: true
            },
            {
                name: "Ending",
                cover: "https://dlmusics.ir/wp-content/uploads/2019/05/Isak-Danielson.jpg",
                artist: "Isak Danielson",
                audio: "https://englishtipsforyou.com/wp-content/uploads/2019/04/Isak-Danielson-Ending.mp3",
                color: ['FFE562', '4AA5B0'],
                id: uuidv4(),
                active: true
            },
            {
                name: "Ending",
                cover: "https://www.covercentury.com/covers/audio/l/LP-07LostOnYouDeluxePoland.jpg",
                artist: "Isak Danielson",
                audio: "https://englishtipsforyou.com/wp-content/uploads/2019/05/LP-Lost-On-You-.www_.englishtipsforyou.com_.mp3",
                color: ['FFE562', '4AA5B0'],
                id: uuidv4(),
                active: true
            },
        ]
    )
}