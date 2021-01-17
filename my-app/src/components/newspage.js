import Header from './menu.js'

import './newspage.css';
import Footer from './footer.js'
function NewsPage() {
  return (
    <div className="news main-bk">
    <Header/>
        <h1> News Page</h1>
        <div> <Footer/></div>
    </div>
  );
}

export default NewsPage;