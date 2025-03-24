export default function Usee({users}){
    console.log(users)
    const {name, email, phone}= users
    return(
       <div className="card">
        <h4>name: {name}</h4>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
       </div> 
    )
}