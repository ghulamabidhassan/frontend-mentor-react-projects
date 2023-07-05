import "./App.css";
import Navbar from "./Navbar";
import Sections from "./Sections";
import { AppProvider } from "./Context";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <Sections />
      </div>
    </div>
  );
}

export default App;
