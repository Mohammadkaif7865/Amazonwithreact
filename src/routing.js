import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./footer";
import Home from "./Component/Home";
import Header from "./header";
import Details from "./Component/Details";
import Login from "./Component/LoginAuth/login";
import Register from "./Component/LoginAuth/register";
import UserInfo from "./Component/LoginAuth/userInfo";
import Ghost from "./Component/Ghost";
import Cart from "./Component/cart/cart";
import Fav from "./Component/Favorities/fav";
import SearchResult from "./Component/SearchResult";
import { useState } from "react";

const Routing = () => {
  const [nameAuth, setNameAuth] = useState(sessionStorage.getItem("name") ? sessionStorage.getItem("name") : "");
  const [refresh, setRefresh] = useState(0);
  return (
    <BrowserRouter>
      <Header nameAuth={nameAuth} refresh={refresh} setNameAuth={(data) => setNameAuth(data)} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/search_result/:category' component={SearchResult} />
        <Route path='/login' component={Login} />
        <Route path='/userInfo' >  <UserInfo nameAuth={nameAuth} setNameAuth={(data) => setNameAuth(data)} /> </Route>
        <Route path='/register' component={Register} />
        <Route path='/favorities' component={Fav} />
        <Route path='/cart' component={Cart} />
        <Route path='/details/:id'> <Details refresh={refresh} setRefresh={(data) => setRefresh(data)}></Details> </Route>
        <Route path="*" component={Ghost} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
