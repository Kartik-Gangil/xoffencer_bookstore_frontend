
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/userinterface/homepage/Homepage'
import Header from './components/userinterface/homepage/Header';
import BookCategoryDetails from './components/userinterface/bookcategorypage/BookCategoryDetails';
import BookDetailPage from './components/userinterface/bookdetailpage/BookDetailPage';
import DisplayCartDetail from './components/userinterface/mycart/DisplayCartDetail';
import Wishlist from './components/userinterface/bookdetailpage/Wishlist';
import Aboutus from './components/userinterface/homepage/Aboutus';
import Contact from './components/userinterface/homepage/Contact';
import Authors from './components/userinterface/homepage/Authors';
import Signup from './components/userinterface/login/Signup';
import Login from './components/userinterface/login/Login';
import Publication from './components/userinterface/homepage/Publication';

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'></Route>
          <Route element={<Header/>} path='/hed'></Route>

          <Route element={<BookCategoryDetails/>} path='/bookcategorydetails'></Route>
          <Route element={<BookDetailPage/>} path='/bookdetailpage'></Route>

          <Route element={<DisplayCartDetail/>} path='/cart'></Route>
          <Route element={<Wishlist/>} path='/wish'></Route>
          <Route element={<Aboutus/>} path='/about'></Route>
          <Route element={<Contact/>} path='/contact'></Route>
          <Route element={<Authors/>} path='/author'></Route>

          <Route element={<Signup/>} path='/signup'></Route>
          <Route element={<Login/>} path='/login'></Route>
          <Route element={<Publication/>} path='/public'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
