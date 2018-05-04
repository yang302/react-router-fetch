import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

import Home from './home/index';
//异步加载currentchannel组件
const Gqb = asyncComponent(() => import ('./gqb/index'));
const Fund = asyncComponent(() => import ('./fund/index'));
const Service = asyncComponent(() => import ('./service/index'));
const About = asyncComponent(() => import ('./about/index'));
const Detail = asyncComponent(() => import ('./detail/index'));

const App = () => (
    <div>
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/gqb" component={Gqb}/>
                <Route path="/fund" component={Fund}/>
                <Route path="/service" component={Service}/>
                <Route path="/about" component={About}/>
                <Route path="/detail" component={Detail}/>
            </div>
        </Router>
    </div>
)

export default App;
