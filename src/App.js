import logo from './logo.svg';
import './App.css';
import Register from './components/styledcomponents/register';
import Login from './components/styledcomponents/login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterTail from './components/registerTail';
import Home from './components/styledcomponents/home';
import RegisterCnpj from './components/styledcomponents/registerPj';
import EventPage from './components/styledcomponents/EventPage';
import EventPage2 from './components/styledcomponents/EventPage2';
import PaymentInstructions from './components/PaymentDetail';
import EventDashboard from './components/styledcomponents/CreateEvent';
import EventEdit from './components/styledcomponents/EventEdit';


function App() {
  return (
        <Router>
        <div className="App">
          {/* <Navbar isLogged={isLogged} signUserOut={signUserOut} /> */}
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/eventPage" exact element={<EventPage2 />} />
            <Route path="/registerCnpj" exact element={<RegisterCnpj />} />
            <Route path="/paymentInstructions" exact element={<PaymentInstructions />} />
             <Route path="/createEvent" exact element={<EventDashboard />} />
             <Route path="/eventEdit" exact element={<EventEdit />} />
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/video" exact element={<Video />} /> */}
          </Routes>
        </div>
      </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
