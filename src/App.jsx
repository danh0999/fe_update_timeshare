import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import Navbar from "./components/Navbar"; // Thay đường dẫn tương ứng với vị trí của Navbar trong dự án của bạn
import UpdateTimeshare from "./components/UpdateTimeshare";
import UpdateRoom from "./components/UpdateRoom";
import UpdateUser from "./components/UpdateUser";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <UpdateTimeshare />
           <Footer />
    </div>
    </Router>
  );
}

export default App;
