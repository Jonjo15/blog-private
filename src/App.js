import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import Navbar from "./components/Navbar"
// import jwtDecode from "jwt-decode"
// import axios from "axios"
import { AuthProvider} from "./context/AuthContext"
import Post from "./pages/Post";
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
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <Route  path="/register" component={Register}/>
            <Route  path="/login" component={Login}/>
            {/* <button onClick={() => console.log(test())}></button> */}
            <PrivateRoute path="/posts/:postId" component={Post}/>
            </Switch>
        </BrowserRouter>
      </AuthProvider>
        
      </div>    
  );
}

export default App;
