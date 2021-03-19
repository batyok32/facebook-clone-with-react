import React, {Suspense} from 'react'
import './App.css';
import { useStateValue } from './StateProvider';

const Header = React.lazy(() => import("./Header"))
const Sidebar = React.lazy(() => import("./Sidebar"))
const Feed = React.lazy(() => import("./Feed"))
// import Header from "./Header"
// import Sidebar from './Sidebar';
// import Feed from "./Feed"
// import Widgets from './Widgets';
const Login = React.lazy(() => import("./Login"))
// import Login from "./Login"


function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      
      {!user ? 
        (<Suspense fallback={<div>Loading</div>}><Login /></Suspense>) 
        : 
        (<div className="">
          <Suspense fallback={<div>Loading</div>}>
            <Header />
          </Suspense>
          <div className="app__body">
          <Suspense fallback={<div>Loading</div>}>
            <Sidebar />
            <Feed />
            {/* <Widgets /> */}
            {/* Feed */}
            {/* Widgets */}
            </Suspense>
          </div>
        </div>)
      }
    </div>
  );
}

export default App;
