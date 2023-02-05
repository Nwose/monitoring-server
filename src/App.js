import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Exam from "./components/Exam";
import Activation from "./components/Activation";



function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Exam />} />
                <Route path="activation" element={<Activation />} />
            </Route>
        </Routes>
    </Router>
   
  );
}

export default App;
