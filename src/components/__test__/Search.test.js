// import "@testing-library/dom"
// import { render, waitFor } from "@testing-library/react";
// import Body from "../body/Body"
// import { Provider } from "react-redux";
// import store from "../../store/Store";
// import {StaticRouter} from 'react-router-dom/server'
// import { RestaurantList } from "../../mocks/data";


// global.fetch= jest.fn(()=>{
//     return( 
//     Promise.resolve({
//         json:()=>{
//             return Promise.resolve(RestaurantList)
//         }
//     })
// )})


// test('Is Shimmer Lolading', () => {

//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body/>
//             </Provider>
//         </StaticRouter>
//     ) 

//     const shimmer = body.getByTestId("shimmer")
//     expect(shimmer.children.length).toBe(8)
  
// })



// test('Restaurants should load on Homepage', async() => {

//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body/>
//             </Provider>
//         </StaticRouter>
//     ) 

//     await waitFor(()=>expect(body.getByTestId("search-btn")))
//     const resLis = body.getByTestId("res-list")
//     expect(resLis.children.length).toBe(8)
  
// })
 