import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./footer";
import Home from "./Component/Home";
import Header from "./header";
import Details from "./Component/Details";
import Login from "./Component/LoginAuth/login";
import Register from "./Component/LoginAuth/register";
import UserInfo from "./Component/LoginAuth/userInfo";
import Ghost from "./Component/Ghost";
import ViewOrder from "./Component/orders/viewBooking";
import Cart from "./Component/cart/cart";
import Fav from "./Component/Favorities/fav";
import Booking from "./Component/orders/booking";
import SearchResult from "./Component/SearchResult";
import { useState } from "react";

const Routing = () => {
  const [nameAuth, setNameAuth] = useState(sessionStorage.getItem("name") ? sessionStorage.getItem("name") : "");
  const [refresh, setRefresh] = useState(0);
  const [showCoupon, setShowCoupon] = useState('block');
  return (
    <BrowserRouter>
      <Header nameAuth={nameAuth} refresh={refresh} setNameAuth={(data) => setNameAuth(data)} />
      <Switch>
        <Route exact path="/"><Home showCoupon={showCoupon} setShowCoupon={(data) => setShowCoupon(data)}></Home></Route>
        <Route path='/search_result/:category' component={SearchResult} />
        <Route path='/login' component={Login} />
        <Route path='/userInfo' >  <UserInfo nameAuth={nameAuth} setNameAuth={(data) => setNameAuth(data)} /> </Route>
        <Route path='/register' component={Register} />
        <Route path='/viewBooking' component={ViewOrder} />
        <Route path='/booking/:id/:quantity'> <Booking></Booking> </Route>
        <Route path='/favorities'  > <Fav refresh={refresh} setRefresh={(data) => setRefresh(data)} ></Fav> </Route>
        <Route path='/cart'> <Cart refresh={refresh} setRefresh={(data) => setRefresh(data)}></Cart> </Route>
        <Route path='/details/:id'> <Details refresh={refresh} setRefresh={(data) => setRefresh(data)}></Details> </Route>
        <Route path="*" component={Ghost} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
