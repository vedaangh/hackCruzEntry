import logo from './img/logo.png';
import acta from './img/Acta.gif';
import Header from './menu.js'
import './landing.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import NewsPage from './newspage.js';

function Landing() {
  return (
    <Router>
        <div className="landing">
        <Header/>
            <div className='main-bk'>
                <div className='center-title'> 
                    <img src={acta} className="acta" alt="logo" />
                </div>
                <div className='center-title'> 
                    <button className='yellow-button center-text main-title'>Sparking Healthy Conversations <br/> Among Different Views</button> 
                </div>
            </div>
        </div>
        
    </Router>
  );
}

export default Landing;