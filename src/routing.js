import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./footer";
import Home from "./Component/Home";
import Header from "./header";
import Details from "./Component/Details";
import Login from "./Component/LoginAuth/login";
import Register from "./Component/LoginAuth/register";
import UserInfo from "./Component/LoginAuth/userInfo";
import Ghost from "./Component/Ghost";
import SearchResult from "./Component/SearchResult";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/search_result/:category' component={SearchResult} />
        <Route path='/login' component={Login}/>
        <Route path='/userinfo' component={UserInfo}/>
        <Route path='/register' component={Register}/>
        <Route path='/details/:id' component={Details} />
        <Route path="*" component={Ghost} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
