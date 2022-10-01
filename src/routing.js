import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./footer";
import Home from "./Component/Home";
import Header from "./header";
import SearchResult from "./Component/SearchResult";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path='/search_result' component={SearchResult} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
