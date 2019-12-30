import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
//import Index from './components/index.component';
//import View from './components/view.component';
import Hoc from './components/hoc/hoc-main.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React Example</Link>
            {/* <Link to={'/'} className="nav-link">Home</Link> */}
            <Link to={'/create'} className="nav-link">Reduc-Create</Link>
            <Link to={'/index'} className="nav-link">Redux-View</Link>
            <Link to={'/hoc'} className="nav-link">HOC</Link>
          </nav> <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/hoc' component={Hoc} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <a> hello</a>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Test
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
