
// import Profile from './Profile';
import { Outlet } from 'react-router-dom';

const About =()=>{
    return(
        <>
        <h1>About us </h1> 
        {/* <Profile/> */}
        <Outlet/>
        </>
    )

}
export default About