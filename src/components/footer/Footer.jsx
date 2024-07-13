import { useContext } from "react"
import userContext from "../utils/context"
const Footer = ()=>{
    const {user} = useContext(userContext)
    return(
        <>
        <h2>Footer</h2>
        <h3>{user.Name} - {user.Email}</h3>
        </>
        
    )
}
export default Footer 