import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./Component/About/About";
import Advice from "./Component/Advice/Advice";
import Apply from "./Component/Apply/Apply";
import Contact from "./Component/Contact/Contact";
import Coursefee from "./Component/Coursefee/Coursefee";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Notfound404 from "./Component/Notfound404/Notfound404";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        {/* home component */}
        
        <Route path="/home">
            <Home></Home>
        </Route>
        {/* course fee component */}
       
        <Route path="/coursefee">
            <Coursefee></Coursefee>
        </Route>
        {/* aboutus component */}
       
        <Route path="/about">
            <About></About>
        </Route>
        {/* contact */}
       
        <Route path="/contact">
            <Contact></Contact>
        </Route>
        {/* advice component */}
       
        <Route path="/advice">
            <Advice></Advice>
        </Route>
        
       {/* login component */}
        <Route path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/apply">
          <Apply></Apply>
        </PrivateRoute>
        {/* not found componemt*/}
        <Route path="*">
            <Notfound404></Notfound404>
        </Route>

      </Switch>
      <Footer></Footer>

      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
