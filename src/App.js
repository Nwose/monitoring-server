import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Exam from "./components/Exam";
import Activation from "./components/Activation";
import Login from "./components/Login";
import SetTime from "./components/SetTime"
import Attendance from "./components/Attendance";
import Monitoring from "./components/Monitoring";
import Issues from "./components/Issues";
import Livecenter from "./components/Livecenter";
import Malpractice from "./components/Malpractice";
import Fastestfinger from "./components/Fastestfinger";
import Identity from "./components/Identity";
import Centerupload from "./components/Centerupload";



function App() {
  return (
    <Router>
        <Routes>
             <Route path="/" element={<Login />} />
             <Route path="layout" element={<Layout />}>
                <Route path="exam" element={<Exam />} />
                <Route path="activation" element={<Activation />} />
                <Route path="settime" element={<SetTime />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="monitoring" element={<Monitoring />} />
                <Route path="issues" element={<Issues />} />
                <Route path="centers" element={<Livecenter />} />
                <Route path="malpractice" element={<Malpractice />} />
                <Route path="fastfinger" element={<Fastestfinger />} />
                <Route path="identitymanagement" element={<Identity />} />
                <Route path="centerupload" element={<Centerupload />} />
                {/* <Route path="*" element={<p>Not Found</p>} /> */}  
            </Route>
        </Routes>
    </Router>
   
  );
}

export default App;
