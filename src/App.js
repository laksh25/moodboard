import { Router, Route, Switch, Redirect } from "react-router-dom";

import About from "./containers/About/About";
import Blogs from "./containers/Blogs/Blogs";
import ContactUs from "./containers/ContactUs/ContactUs";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Services";
import { ABOUT, BLOGS, CONTACT_US, SERVICES } from "./Auth/Routes";
import "./App.css";

function App({ history }) {
  return (
    <Router history={history}>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={ABOUT}>
            <About />
          </Route>
          <Route exact path={SERVICES}>
            <Services />
          </Route>
          <Route exact path={BLOGS}>
            <Blogs />
          </Route>
          <Route exact path={CONTACT_US}>
            <ContactUs />
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
