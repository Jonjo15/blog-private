import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
// import jwtDecode from "jwt-decode"
// import axios from "axios"
import { AuthProvider} from "./context/AuthContext"
// const token = localStorage.getItem("token")

// if (token) {
//   const decodedToken = jwtDecode(token);
//   if(decodedToken.exp > Date.now()) {
//     //logout token expired
//   }
//   else {
//     //get user data
//     axios.defaults.headers.common["Authorization"] = token;
//   }
// }

function App() {
  return (
      <div className="App">
        <h1>Hello world</h1>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/admin" component={Dashboard}/>
            <Route  path="/register" component={Register}/>
            <Route  path="/login" component={Login}/>
            {/* <button onClick={() => console.log(test())}></button> */}
                      {/* <Route exact path="/users/:userId" component={User}/> */}
            </Switch>
        </BrowserRouter>
      </AuthProvider>
        
      </div>    
  );
}

export default App;
