import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col, ScreenClassProvider } from "react-grid-system";

// components
import Header from "./components/header";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Credits from "./components/credits";
import Series from "./components/series";
import SerieDetail from "./components/serieDetail";
import NotFound from "./components/notFound";
import Footer from "./components/footer";

function App() {
  return (
    <ScreenClassProvider>
      <Header />
      <Container>
        <Switch>
          <Route path="/series/:id" component={SerieDetail} />
          <Route path="/series" component={Series} />
          <Route path="/credits" component={Credits} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/series" />
        </Switch>
      </Container>
      <Footer />
    </ScreenClassProvider>
  );
}

export default App;
