import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./home";

function App() {
  return (
    <Router> 
    <div className="App">
     <div className="Content">
     <Routes>
     <Route path="/"  exact component={Home} />
     <Route path="/Home"   component={Home} />
     </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
