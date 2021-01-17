import React from 'react';
import'./footer.css'

import NewsIcon from './img/news-icon.png';
import LeavesIcon from './img/leaves-icon.png';
import PlusIcon from './img/plus-icon.png';
const Footer = () => {
    return(
        <div> 
            <footer className='footer'>
                <div className='hero center'> 
                    <a href="#" className='button-style'>
                        <img id='news-icon' src={NewsIcon}  />
                         Newsfeed
                    </a>
                    <a href="#" className='button-style'>
                        <img id='leaves-icon' src={LeavesIcon} />
                        Discussions
                    </a>
                    <a href="#" className='button-style'>
                        <img id='plus-icon' src={PlusIcon}  />
                      Add Post
                    </a>
                </div>
            </footer>
        </div>
    );

};

export default Footer;