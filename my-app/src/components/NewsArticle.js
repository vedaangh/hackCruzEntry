import React from 'react';

import './NewsArticle.css'
function NewsArticle({data}){
    return(
        <div className="news"> 
           <h1 className="news-title"> {data.title}</h1>
           <p className="news-description">{data.description}</p>
           <span className="news-author">{data.author}</span>
           <span className="news-published">{data.publishedAt}</span>
           <button className="news-source">News Source: {data.source.name}</button>
        </div>
    );
};

export default NewsArticle;