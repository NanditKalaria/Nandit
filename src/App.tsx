import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Body } from "./screens/Body/Body";
import { Portfolio } from "./screens/Portfolio/Portfolio";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;