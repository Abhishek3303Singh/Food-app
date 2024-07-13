import { render } from "@testing-library/react";
import Header from "../header/Header";
import { Provider } from "react-redux";
import store from "../../store/Store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
//   console.log(header);+
const logo = header.getAllByTestId('logo')
  console.log(logo[0])
  expect(logo[0].innerHTML).toBe('FoodHub')
});


test("cart should have zero item on rendering the Header ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
//   console.log(header);+
const cart = header.getByTestId('cart')
  // console.log(logo[0])
  expect(cart.innerHTML).toBe('Cart-0')
});
