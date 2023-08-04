//import logo from './logo.svg';
import './App.css';
//import Navbar from './Navbar/Navbar';
import Nav from './Nav';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import ForEmplo from './component/forEmpl/ForEmplo';
import Refer from './component/forEmpl/Refer/Refer';
import Login from './component/login/Login';
import Singup from './component/sign/Singup';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children: [
      {path:'/',
      element:<ForEmplo/>
    },
    {
      path:'about',
      element:<Refer/>
    },{
      path:'eduction',
      element:<Login/>
    },{
      path:'project',
      element:<Singup/>
    }
    ]
    
  }
 
])

function App() {
  return (
    //<div className="App">
      //<Nav></Nav>
/*<Home></Home>
      <About></About>
      <Eduction></Eduction>
      <Project></Project>
  <Contact></Contact>
  </div>*/
  <div>
    <RouterProvider router={router}/>
  </div>
    
  );
}

export default App;
