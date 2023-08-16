import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Showbook from "./components/FrontPage_BookList"
import CreateBook from "./components/CreateBook"; // Updated import

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path = "/" element = {<Showbook />} />
          <Route path="/create-book" element={<CreateBook />} /> {/* Updated usage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
