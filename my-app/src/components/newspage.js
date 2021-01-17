import React from 'react';
import ReactDOM from 'react-dom';
import Header from './menu.js'
import './newspage.css';
import Footer from './footer.js'
import { NewsContextProvider } from './NewsContext.js';
import News from './News.js';

function NewsPage() {
  return (
    <div >
        <Header/>
        
            <button className='page-title center-page-title'>Trending News</button>
        
        <NewsContextProvider className="NewsPage">
            <News/>
        </NewsContextProvider>

        <div>
            <Footer/>
        </div>
    </div>
  );
}

export default NewsPage;