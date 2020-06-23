// Packages
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ScreenClassProvider } from "react-grid-system";
import { ToastContainer } from "react-toastify";

// components
import ProtectedRoute from "./components/common/protectedRoute";
import Header from "./components/header";
import Shop from "./components/shop";
import SideBar from "./components/sidebar";
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
import StoryForm from "./components/storyForm";

function App() {
  return (
    <ScreenClassProvider>
      <div id="main">
        <Suspense fallback={null}>
          <ToastContainer />
          <Header />
          <SideBar />
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
            <ProtectedRoute
              path="/story/upload/:serieId/:id"
              component={StoryForm}
            />
            <ProtectedRoute path="/story/upload/:serieId" component={StoryForm} />
            <Route path="/credits" component={Credits} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/series" />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </ScreenClassProvider>
  );
}

export default App;
