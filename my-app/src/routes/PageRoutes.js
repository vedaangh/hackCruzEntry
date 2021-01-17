import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Route, Switch } from "react-router";


import News from '../components/newspage.js'
import Discussions from '../components/discussionspage.js'
import Landing from '../components/landing.js'
import Comments from '../page/ViewForum';

// import Menu from '../side_panel_component/sidebar'

const Routes =()=>{
    return (
    <Router>
        <div>
            <Switch>
                <Route  exact path='/' component={Landing} />
                <Route   path='/news' component={News} />
                <Route   path="/discuss" component={Discussions}/>
                <Route   path="/comments" component={Comments}/> 
            </Switch>
        </div>

        
    </Router>
    
    );
};

export default Routes;