import './App.css';
import Form from './Conponents/Form';
import NavBar from './Conponents/NavBar';
import Home from './Conponents/Home';
import JsQuestion from './Conponents/JsQuestion';
import FeedBack from './Conponents/FeedBack'; 
import LogIn from './Conponents/LogIn';
import DisplayQuestion from './Conponents/ReactQuestion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddQuestion from './Conponents/AddQuestion';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/question' element={<DisplayQuestion />} />
          <Route path='/feedback' element={<FeedBack />} />
          <Route path='/sign' element={<Form />} />
          <Route path='/log' element={<LogIn />} />
          <Route path='/learn' element={<JsQuestion />}/>
          <Route path='/addque' element={<AddQuestion/>}/>
        </Routes>
        {/* <ToastContainer /> */}
      </Router>
    </div>
  );
}

export default App;
