import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const {user} = useContext(UserContext)
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
       <h1 style={{color: 'white'}}>Dashboard</h1>
       <div>
       {!!user && (<h2 style={{color: 'white'}}>Welcome {user.name}!</h2>)}
       </div>
        </div>
  )
}
