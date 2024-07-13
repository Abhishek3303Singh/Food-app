import { Link } from "react-router-dom"
import userContext from "../utils/context"
import { useContext } from "react"
import { useSelector } from "react-redux"
const Title = () => (
    <h1>FoodHub</h1>
)
const isLogin = true


const HeaderComponent = () => {
    const { user } = useContext(userContext)
    const cartItems = useSelector(store => store.cart.cartItems)
    return (
        <div className='header'>
            {/* <Link to='/'>{Title()}</Link> */}
            <Link><h1 data-testid="logo">FoodHub</h1></Link>

            <div className="nav-items">
                <ul>
                    <Link to='/instamart'><li>Instamart</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                
                        <Link to='/cart'>
                            <li data-testid='cart'>Cart-{cartItems.length}</li>
                        </Link>

                    
                    <li>{isLogin ? user.Name : ""}</li>
                    <li>{isLogin ? <button>Logout</button> : <button>Login</button>}</li>
                    <li></li>
                </ul>


            </div>

        </div>
    )
}
export default HeaderComponent