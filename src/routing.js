import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./footer";
import Home from "./Component/Home";
import Header from "./header";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
