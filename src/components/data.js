
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
        ]
    )
}