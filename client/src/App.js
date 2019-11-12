// Packages
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Components
import Accessibility from "./components/accessibility";
import Chapters from "./components/chapters";
import Comments from "./components/comments";
import Contact from "./components/contact";
import Credits from "./components/credits";
import Extras from "./components/extras";
import Footer from "./components/footer";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import MainNavBar from "./components/mainNavBar";
import NotFound from "./components/notFound";
import RegisterForm from "./components/registerForm";
import SerieDetail from "./components/serieDetail";
import SerieShop from "./components/serieShop";
import Series from "./components/series";
import Shop from "./components/shop";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <MainNavBar />
      {/* <div className="container"> */}
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/series/:id" component={SerieDetail} />
        <Route path="/series" component={Series} />
        <Route path="/credits" component={Credits} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/series" />
      </Switch>
      <Route path="/series/:id/chapters" exact component={Chapters} />
      <Route path="/series/:id/comments" exact component={Comments} />
      <Route path="/series/:id/extras" exact component={Extras} />
      <Route path="/series/:id/accessibility" exact component={Accessibility} />
      <Route path="/series/:id/serieShop" exact component={SerieShop} />
      {/* <Redirect to="/not-found" /> */}
      {/* <Redirect from="/" exact to="/series" /> */}
      {/* </div> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
