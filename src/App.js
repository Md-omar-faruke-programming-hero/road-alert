import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./Component/About/About";
import Advice from "./Component/Advice/Advice";
import Contact from "./Component/Contact/Contact";
import Coursefee from "./Component/Coursefee/Coursefee";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Notfound404 from "./Component/Notfound404/Notfound404";



function App() {
  return (
    <div className="App">
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
        {/* not found componemt*/}
        
        <Route path="*">
            <Notfound404></Notfound404>
        </Route>

      </Switch>
      <Footer></Footer>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
