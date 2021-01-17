import logo from './img/logo.png';
import acta from './img/Acta.gif';
import Header from './menu.js'
import './landing.css';

function Landing() {
  return (
      
    <div className="landing">
    <Header/>
        <div className='main-bk'>
            <div className='center-title'> 
                <img src={acta} className="acta" alt="logo" />
            </div>
            <div className='center-title'> 
                <button className='yellow-button center-text main-title'>Sparking Healthy Conversations <br/> Amoung Different Views</button> 
            </div>
        </div>
    </div>
  );
}

export default Landing;