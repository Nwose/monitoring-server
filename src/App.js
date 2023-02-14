import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Exam from "./components/Exam";
import Activation from "./components/Activation";
import Login from "./components/Login";
import SetTime from "./components/SetTime"



function App() {
  return (
    <Router>
        <Routes>
             <Route path="/" element={<Login />} />
             <Route path="layout" element={<Layout />}>
                <Route path="exam" element={<Exam />} />
                <Route path="activation" element={<Activation />} />
                <Route path="settime" element={<SetTime />} />
                <Route path="attendance" element={<SetTime />} />
                <Route path="*" element={<p>Not Found</p>} />
            </Route>
        </Routes>
    </Router>
   
  );
}

export default App;
