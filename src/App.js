import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
// import axios from "axios"
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <BrowserRouter>
        <Switch>
        {/* >PrivateRoute exact path="/" component={Home}/> */}
          <Route  path="/register" component={Register}/>
          <Route  path="/login" component={Login}/>
          {/* <Route exact path="/users/:userId" component={User}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
