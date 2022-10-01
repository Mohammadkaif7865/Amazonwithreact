import { BrowserRouter, Route,Switch } from "react-router-dom";
import Footer from "./footer";
import Home from "./Component/Home";
import Header from "./header";
import Ghost from "./Component/Ghost";
import SearchResult from "./Component/SearchResult";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/search_result/:category' component={SearchResult} />
      <Route path="*" component={Ghost} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
