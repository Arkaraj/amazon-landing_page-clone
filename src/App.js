import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Amazon Landing page clone</h1>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
