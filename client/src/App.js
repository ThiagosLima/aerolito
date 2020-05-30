// Packages
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ScreenClassProvider } from "react-grid-system";
import { ToastContainer } from "react-toastify";

// components
import ProtectedRoute from "./components/common/protectedRoute";
import Header from "./components/header";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Credits from "./components/credits";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import Series from "./components/series";
import SerieDetail from "./components/serieDetail";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import SerieForm from "./components/serieForm";
import ChapterForm from "./components/chapterForm";
import AuthorsForm from "./components/authorForm";

function App() {
  return (
    <ScreenClassProvider>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute
          path="/series/:serieId/chapters/upload/:chapterId"
          component={ChapterForm}
        />
        <ProtectedRoute
          path="/series/:serieId/chapters/upload"
          component={ChapterForm}
        />
        <ProtectedRoute path="/series/upload/:id" component={SerieForm} />
        <ProtectedRoute path="/series/upload" component={SerieForm} />
        <Route path="/series/:id" component={SerieDetail} />
        <Route path="/series" component={Series} />
        <ProtectedRoute path="/authors/upload/:id" component={AuthorsForm} />
        <ProtectedRoute path="/authors/upload" component={AuthorsForm} />
        <Route path="/credits" component={Credits} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/series" />
      </Switch>
      <Footer />
    </ScreenClassProvider>
  );
}

export default App;
