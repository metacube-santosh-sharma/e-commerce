import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Faq from './components/Faq';
import About from './components/About';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import { Provider } from 'react-redux'
import Cart from './components/Cart';


function App() {
  return (
    <>
    <Provider store={store}>
        <ToastContainer hideProgressBar={true}  closeOnClick pauseOnHover/>
        <Router>
          <Routes>
            <Route path='/' element={< Login />}></Route>
            <Route path='/home' element={< Home />}></Route>
            <Route path='/about' element={< About />}></Route>
            <Route path='/faq' element={< Faq />}></Route>
            <Route path='/contact' element={< Contact />}></Route>
            <Route path='/cart' element={< Cart />}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
