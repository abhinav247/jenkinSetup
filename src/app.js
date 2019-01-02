import React from "react";
import Home from "./components/Home";
import { Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        <Router history={history}>
         
           <div>
            <Route path="/" component={Home} />
            {/* <Route path="/register" component={RegisterPage} />                                 */}
            {/* <Route path="/forgot_password" component={ForgotPasswordPage} />
            <Route path="/users/add" component={AddUserPage} />
            <Route exact path="/users/edit/:id" component={EditUserPage} />
            <Route
              path="/application/:applicationId"
              component={ViewApplication}
            /> */}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
