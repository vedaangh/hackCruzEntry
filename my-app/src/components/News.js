import React, {useContext} from 'react';
import {NewsContext} from './NewsContext.js';
import NewsArticle from './NewsArticle.js';

function News(props){
    const {data} = useContext(NewsContext);
    console.log(data)
    return (
        <div className='all-news'>
            {data 
                ? data.articles.map((news) => 
                    (<NewsArticle data={news} key={news.url}/>))
                : "Loading"}
        </div>
    )
}
export default News;