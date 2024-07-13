import "@testing-library/dom"
import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurantDetails from "../RestrrauntDetails/RestrauntDetails"
import Header from "../header/Header"
import { Provider } from "react-redux";
import store from "../../store/Store";
import {StaticRouter} from 'react-router-dom/server'
import { RestaurantMenu } from "../../mocks/data";


global.fetch= jest.fn(()=>{
    return( 
    Promise.resolve({
        json:()=>{
            return Promise.resolve(RestaurantMenu)
        }
    })
)}) 


// test('Add item to cart', () => {

//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Header/>
//                 <RestaurantDetails/>
//             </Provider>
//         </StaticRouter>
//     ) 
// }) 



test('Add item to cart', async() => {

    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurantDetails/>
                <Header/>
            </Provider>
        </StaticRouter>
    ) 

    await waitFor(()=>expect(menu.getByTestId("menu")))
    const addBtn = menu.getAllByTestId("addBtn")
    fireEvent.click(addBtn[0])
    fireEvent.click(addBtn[2])

    const cart = menu.getByTestId('cart')
    expect(cart.innerHTML).toBe('Cart-2')
    // expect(resLis.children.length).toBe(8)
  
})
  