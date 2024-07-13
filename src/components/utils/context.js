import { createContext } from "react";

const userContext = createContext({
    user:{
        Name:"Dummy",
        Email:"dummy@gmail.com"
    }
})
export default userContext;