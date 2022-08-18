import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./footer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
