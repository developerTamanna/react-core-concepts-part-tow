import { use } from "react"
import Album from "./album"
export default function Albums({albumPromise}){

    const albums = use(albumPromise)
    console.log(albums)
    return(
        <div className="card">
            <h3>All albums here:</h3>

            {
                albums.map(album => <Album album={album} key={album.id}></Album> )
            }
        </div>
    )
}