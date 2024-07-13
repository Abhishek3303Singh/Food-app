
import React, { lazy, Suspense, useState } from 'react';
import About from './components/about/About';
import Cart from './components/Cart/Cart';
import Error from './components/Error';
import RestrauntDetails from './components/RestrrauntDetails/RestrauntDetails';
import ReactDOM from "react-dom/client"
import Profile from './components/about/Profile';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import userContext from './components/utils/context';
import { Provider } from 'react-redux';
import store from './store/store'
const header1 = React.createElement("h1", {
    id: 'title',
    key: "Baby"

}, 'HEllo React')
const header2 = React.createElement("h2", {
    id: 'title',
    key: "Priya"
}, 'HEllo World')
// React Element
import HeaderComponent from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import { IMG_CDN_URL } from './config';
import Shimmer from './components/loader/Shimmer';

//Dynamic import or lazy loading..
const Instamart = lazy(() => import("./components/instamart/Instamart"))
const header3 = (
    <h1 style={{ color: "blue", fontSize: "30px" }}>React Is Awosome </h1>
)



// component



// const RestrauntCard = (props)=>{
//     console.log(props)
//     return(
//         <div className='card'>
//             <img alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+props.restaurant?.info?.cloudinaryImageId}  />
//             <h2>{props.restaurant?.info?.name}</h2>

//             <h3>{props.restaurant?.info?.cuisines.join(',')}</h3>
//             <h4>{props.restaurant?.info?.avgRatingString} Stars</h4>
//          </div>

//     )
// }


// Destructure the object
// const RestrauntCard = ({restaurant})=>{
//     return(
//         <div className='card'>
//             <img alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurant?.info?.cloudinaryImageId}  />
//             <h2>{restaurant?.info?.name}</h2>

//             <h3>{restaurant?.info?.cuisines.join(',')}</h3>
//             <h4>{restaurant?.info?.avgRatingString} Stars</h4>
//          </div>

//     )
// }

// More optimisation
// const RestrauntCard = ({restaurant})=>{

//     // again DeStructure
//     const {name,cloudinaryImageId,cuisines,avgRatingString} = restaurant.info
//     return(
//         <div className='card'>
//             <img alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}  />
//             <h2>{name}</h2>

//             <h3>{cuisines.join(',')}</h3>
//             <h4>{avgRatingString} Stars</h4>
//          </div>

//     )
// }


// we can destructurelike this/////////////////////

const AppLayout = () => {
    const [user, setUser] = useState({
        Name: "Priya",
        Email: "baby@gmail.com"
    })
    return (
        <>
            <Provider store={store}>
                <userContext.Provider
                    value={{
                        user: user,
                        setUser: setUser

                    }}
                >

                    <HeaderComponent />
                    <Outlet />   {/* outlet is a placeholder which is used to place a children component according to path clicked by the user*/}
                    <Footer />

                </userContext.Provider>

            </Provider>

            {/* <Shimmer/> */}
        </>

    )
}

// const divContainer = React.createElement("div",{
//     id:'container'
// }, [header1, header2, header3])
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restraunt/:id",
                element: <RestrauntDetails />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            }

        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log('root', root)
root.render(header3)  // render of react Elelment

root.render(<RouterProvider router={appRouter} />) // Render of Functional component    