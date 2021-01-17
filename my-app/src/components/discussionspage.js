import logo from './img/logo.png';
import acta from './img/Acta.gif';
import Header from './menu.js'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from './footer.js';
import './discussionspage.css';

function Discussions() {
  return (
    <div className="discussions main-bk">
        <Header/>
        <h1> Discussions Page</h1>
        <div> <Footer/></div>
    </div>
  );
}

export default Discussions;