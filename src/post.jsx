export default function Post({post}){
    const{title, body} = post
return(
    <div className="card">
        <p> title: {title}</p>
        <p>body: {body}</p>
    </div>
)
}