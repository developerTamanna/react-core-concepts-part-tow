import { use } from "react"
    import Usee from "./usee"
export default function Users({fetchUser}){
const users = use(fetchUser)
console.log(users)

    return(
        <div className="card">
            <h3>
                user list: {users.length}:
                {
                  users.map(users => <Usee key={users.id} users={users}></Usee>)
                }
            </h3>
        </div>
    )
}