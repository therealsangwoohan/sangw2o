import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
