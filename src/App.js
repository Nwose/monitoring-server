import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Exam from "./components/Exam";
import Activation from "./components/Activation";
import Login from "./components/Login";



function App() {
  return (
    <Router>
        <Routes>
             <Route path="/" element={<Login />} />
             <Route path="layout" element={<Layout />}>
                <Route path="exam" element={<Exam />} />
                <Route path="activation" element={<Activation />} />
            </Route>
        </Routes>
    </Router>
   
  );
}

export default App;
