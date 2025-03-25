export default function Album({album}){
    const {title } = album
    return(
        <div className="card">
            <p>title:{title}</p>
            
        </div>
    )
}